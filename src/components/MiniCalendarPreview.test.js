import React from 'react';
import MiniCalendarPreview from '@/components/MiniCalendarPreview';
import { useDatePickerStore } from '@/store/useDatePickerStore';
import { render, screen, waitFor } from '@testing-library/react';

jest.mock('@/store/useDatePickerStore');

describe('MiniCalendarPreview Integration Test', () => {
  beforeEach(() => {
    useDatePickerStore.mockImplementation(() => ({
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
    }));
  });

  test('renders MiniCalendarPreview component and highlights recurring dates', async () => {
    const { container } = render(<MiniCalendarPreview />);
    
    // Check if the component renders correctly
    expect(screen.getByText('Preview')).toBeInTheDocument();
    
    // Check if recurring dates are highlighted
    await waitFor(() => {
      // Query all elements with the class 'highlighted-date'
      const highlightedDates = container.querySelectorAll('.highlighted-date');
      
      // Extract the text content (dates) of the highlighted elements
      const highlightedDatesText = Array.from(highlightedDates).map(el => el.textContent.trim());
      
      // Define the expected highlighted dates
      const expectedDatesText = ['1', '2', '3', '4', '5'];
      
      expect(highlightedDatesText).toEqual(expect.arrayContaining(expectedDatesText));
    });
  });
});
