import React from 'react';
import { useDatePickerStore } from '@/store/useDatePickerStore';
import { useMemo } from 'react';
import Calendar from 'react-calendar';

export default function MiniCalendarPreview() {
  const { startDate, endDate, recurrencePattern, recurrenceOptions } = useDatePickerStore();

  const getRecurringDates = () => {
    const dates = [];
    if (!startDate || !recurrencePattern) return dates;

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
  };

  const recurringDates = useMemo(() => getRecurringDates(), [startDate, endDate, recurrencePattern, recurrenceOptions]);

  return (
    <div className="calendar-container">
      <h3 className="text-sm font-medium mb-2">Preview</h3>
      <Calendar
        value={startDate}
        tileClassName={({ date }) =>
          recurringDates.some(d => d.toDateString() === date.toDateString())
            ? 'highlighted-date'
            : ''
        }
      />
    </div>
  );
}
