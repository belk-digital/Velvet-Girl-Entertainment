"use client";

import { useBookingContext } from "@/context/BookingProvider";
import { type BookingContextType } from "@/types/booking";

export function useBookingForm(): BookingContextType {
  return useBookingContext();
}
