import { getRecurringDates } from '@/utils/getRecurringDates'; // Adjust the path as needed

test('generates recurring dates correctly for daily pattern', () => {
  const options = { interval: 1 };
  const startDate = new Date('2024-01-01');
  const endDate = new Date('2024-01-05');
  
  const dates = getRecurringDates(startDate, endDate, 'daily', options);
  
  expect(dates).toEqual([
    new Date('2024-01-01'),
    new Date('2024-01-02'),
    new Date('2024-01-03'),
    new Date('2024-01-04'),
    new Date('2024-01-05'),
  ]);
});

// Add tests for other patterns
