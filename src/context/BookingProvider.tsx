"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
  useCallback,
} from "react";
import {
  type BookingState,
  type BookingContextType,
  INITIAL_BOOKING_STATE,
} from "@/types/booking";

const STORAGE_KEY = "velvet_booking_progress";

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<BookingState>(INITIAL_BOOKING_STATE);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === "object") {
          queueMicrotask(() => {
            setState((prev) => ({ ...prev, ...parsed }));
            setIsLoaded(true);
          });
          return;
        }
      }
    } catch (err) {
      console.error("Failed to load booking state from localStorage", err);
    }
    queueMicrotask(() => {
      setIsLoaded(true);
    });
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (err) {
      console.error("Failed to save booking state to localStorage", err);
    }
  }, [state, isLoaded]);

  const setField = useCallback(
    <K extends keyof BookingState>(field: K, value: BookingState[K]) => {
      setState((prev) => ({ ...prev, [field]: value }));
    },
    []
  );

  const nextStep = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.min(12, prev.currentStep + 1),
    }));
  }, []);

  const prevStep = useCallback(() => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.max(1, prev.currentStep - 1),
    }));
  }, []);

  const goToStep = useCallback((step: number) => {
    if (step >= 1 && step <= 12) {
      setState((prev) => ({ ...prev, currentStep: step }));
    }
  }, []);

  const toggleUpgrade = useCallback((upgradeSlug: string) => {
    setState((prev) => {
      const exists = prev.upgrades.includes(upgradeSlug);
      return {
        ...prev,
        upgrades: exists
          ? prev.upgrades.filter((u) => u !== upgradeSlug)
          : [...prev.upgrades, upgradeSlug],
      };
    });
  }, []);

  const togglePerformer = useCallback((performerId: string) => {
    setState((prev) => {
      const current = prev.selectedPerformers || [];
      const exists = current.includes(performerId);
      return {
        ...prev,
        selectedPerformers: exists
          ? current.filter((id) => id !== performerId)
          : [...current, performerId],
      };
    });
  }, []);

  const isCurrentStepValid = useCallback(() => {
    switch (state.currentStep) {
      case 1: // Welcome
        return true;
      case 2: // Event Type
        return Boolean(state.eventType.trim());
      case 3: // Event City
        return Boolean(state.city.trim());
      case 4: // Event Date
        return Boolean(state.eventDate.trim());
      case 5: // Guest Count
        return state.guestCount >= 1;
      case 6: // Theme
        return Boolean(state.theme.trim());
      case 7: // Costume
        return Boolean(state.costume.trim());
      case 8: // Dancers
        return state.dancers >= 2;
      case 9: // Upgrades
      case 10: // Notes
        return true;
      case 11: // Review & Contact
        return (
          Boolean(state.name.trim()) &&
          Boolean(state.phone.trim()) &&
          Boolean(state.email.trim())
        );
      case 12: // Success
        return true;
      default:
        return true;
    }
  }, [state]);

  const resetBooking = useCallback(() => {
    setState(INITIAL_BOOKING_STATE);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error("Failed to remove booking state from localStorage", err);
    }
  }, []);

  return (
    <BookingContext.Provider
      value={{
        state,
        setField,
        nextStep,
        prevStep,
        goToStep,
        toggleUpgrade,
        togglePerformer,
        isCurrentStepValid,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBookingContext(): BookingContextType {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingContext must be used within a BookingProvider");
  }
  return context;
}
