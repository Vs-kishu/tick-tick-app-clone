import create from 'zustand';

export const useDatePickerStore = create((set, get) => ({
  startDate: null,
  endDate: null,
  recurrencePattern: 'daily',
  recurrenceOptions: { interval: 1 },
  
  // Function to calculate recurring dates based on the current state
  getRecurringDates: () => {
    const { startDate, endDate, recurrencePattern, recurrenceOptions } = get();
    
    if (!startDate) return [];
    
    const dates = [];
    let currentDate = new Date(startDate);
    const interval = recurrenceOptions.interval || 1;
    const maxOccurrences = 100;
    let count = 0;

    while (currentDate <= (endDate || new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)))) {
      dates.push(new Date(currentDate));
      
      switch (recurrencePattern) {
        case 'daily':
          currentDate.setDate(currentDate.getDate() + interval);
          break;
        case 'weekly':
          currentDate.setDate(currentDate.getDate() + interval * 7);
          break;
        case 'monthly':
          const currentMonth = currentDate.getMonth();
          currentDate.setMonth(currentMonth + interval);
          if (currentDate.getMonth() !== (currentMonth + interval) % 12) {
            currentDate.setDate(0);
          }
          break;
        case 'yearly':
          const currentYear = currentDate.getFullYear();
          currentDate.setFullYear(currentYear + interval);
          if (currentDate.getMonth() === 1 && currentDate.getDate() === 29) {
            currentDate.setDate(28);
          }
          break;
        default:
          break;
      }
      
      count++;
      if (count >= maxOccurrences || currentDate > endDate) break;
    }

    return dates;
  },
  
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setRecurrenceOptions: (options) => set({ recurrenceOptions: options }),
}));
