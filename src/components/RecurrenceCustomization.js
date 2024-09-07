import { useDatePickerStore } from "@/store/useDatePickerStore";
import React from "react";

export default function RecurrenceCustomization() {
  const { recurrencePattern, recurrenceOptions, setRecurrenceOptions } =
    useDatePickerStore();

  // Customize options based on the pattern
  const handleCustomizationChange = (option, value) => {
    setRecurrenceOptions({ ...recurrenceOptions, [option]: value });
  };

  return (
    <div className="mt-4">
      {/* Render customization options based on recurrencePattern */}
      {/* Example customization: "Every X days/weeks/months/years" */}
      {recurrencePattern && (
        <div>
          <label className="text-sm">Every</label>
          <input
            type="number"
            min="1"
            value={recurrenceOptions.interval || 1}
            onChange={(e) =>
              handleCustomizationChange("interval", e.target.value)
            }
            className="ml-2 p-1 border rounded"
          />
          <span className="ml-1">{recurrencePattern}</span>
        </div>
      )}
      {/* Additional customizations go here */}
    </div>
  );
}
