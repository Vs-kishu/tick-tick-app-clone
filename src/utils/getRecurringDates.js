export function getRecurringDates(startDate, endDate, recurrencePattern, recurrenceOptions) {
    const dates = [];
    if (!startDate) return dates;
  
    let currentDate = new Date(startDate);
    const interval = recurrenceOptions.interval || 1;
    const maxOccurrences = 100; // Limit the number of occurrences
    let count = 0;
  
    while (currentDate <= (endDate || new Date(currentDate.setFullYear(currentDate.getFullYear() + 1)))) {
      dates.push(new Date(currentDate)); // Add the current date to the list
  
      // Calculate the next date based on the recurrence pattern
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
  
          // Adjust if the new month doesn't have the same day as the current date
          if (currentDate.getMonth() !== (currentMonth + interval) % 12) {
            currentDate.setDate(0); // Last day of the intended month
          }
          break;
  
        case 'yearly':
          const currentYear = currentDate.getFullYear();
          currentDate.setFullYear(currentYear + interval);
  
          // Handle February 29th in leap years
          if (currentDate.getMonth() === 1 && currentDate.getDate() === 29) {
            currentDate.setDate(28);
          }
          break;
  
        default:
          break;
      }
  
      count++;
      if (count >= maxOccurrences || currentDate > endDate) break; // Stop if we reach the max occurrences or pass the end date
    }
  
    return dates;
  }
  