import { useDatePickerStore } from "@/store/useDatePickerStore";
import React from "react";

export default function RecurrenceOptions() {
  const { recurrencePattern, setRecurrencePattern } = useDatePickerStore();

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium">Recurrence Pattern</h3>
      <div className="mt-2 flex space-x-4">
        {["daily", "weekly", "monthly", "yearly"].map((pattern) => (
          <label key={pattern} className="flex items-center">
            <input
              type="radio"
              value={pattern}
              checked={recurrencePattern === pattern}
              onChange={() => setRecurrencePattern(pattern)}
              className="mr-2"
            />
            {pattern.charAt(0).toUpperCase() + pattern.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );
}
