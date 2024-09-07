import { act } from '@testing-library/react';
import { create } from 'zustand';

const useTestStore = create((set) => ({
  startDate: new Date('2024-01-01'),
  endDate: new Date('2024-01-07'),
  recurrencePattern: 'daily',
  recurrenceOptions: { interval: 1 },
  getRecurringDates: jest.fn(() => [
    new Date('2024-01-01'),
    new Date('2024-01-02'),
    new Date('2024-01-03'),
    new Date('2024-01-04'),
    new Date('2024-01-05'),
  ]),
  // other state fields...
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));

test('your test case', () => {
  act(() => {
    useTestStore.getState().setStartDate(new Date('2024-02-01'));
  });
  expect(useTestStore.getState().startDate).toEqual(new Date('2024-02-01'));
});
