export interface BookingState {
  currentStep: number; // 1 to 12
  eventType: string;
  city: string;
  eventDate: string;
  eventTime: string;
  guestCount: number; // default 8, min 1
  theme: string;
  costume: string;
  dancers: number; // default 2, min 2
  upgrades: string[];
  selectedPerformers: string[];
  notes: string;
  name: string;
  phone: string;
  email: string;
  isSubmitted: boolean;
}

export const INITIAL_BOOKING_STATE: BookingState = {
  currentStep: 1,
  eventType: "",
  city: "Charleston, SC",
  eventDate: "",
  eventTime: "07:00 PM",
  guestCount: 8,
  theme: "no-preference",
  costume: "no-preference",
  dancers: 2,
  upgrades: [],
  selectedPerformers: [],
  notes: "",
  name: "",
  phone: "",
  email: "",
  isSubmitted: false,
};

export interface BookingContextType {
  state: BookingState;
  setField: <K extends keyof BookingState>(field: K, value: BookingState[K]) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;
  toggleUpgrade: (upgradeSlug: string) => void;
  togglePerformer: (performerId: string) => void;
  isCurrentStepValid: () => boolean;
  resetBooking: () => void;
}
