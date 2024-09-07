import { getRecurringDates } from '@/utils/getRecurringDates'; // Adjust the path as needed
import { create } from 'zustand';

export const useDatePickerStore = create((set, get) => ({
  startDate: null,
  endDate: null,
  recurrencePattern: 'daily',
  recurrenceOptions: { interval: 1 },

  getRecurringDates: () => {
    const { startDate, endDate, recurrencePattern, recurrenceOptions } = get();
    return getRecurringDates(startDate, endDate, recurrencePattern, recurrenceOptions);
  },

  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setRecurrenceOptions: (options) => set({ recurrenceOptions: options }),
}));
