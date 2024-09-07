import { useDatePickerStore } from "@/store/useDatePickerStore";
import MiniCalendarPreview from "./MiniCalendarPreview";
import ScheduledDatesTable from "./ScheduledDatesTable";
import React from "react";

export default function DatePickerComponent() {
  const recurringDates = useDatePickerStore((state) =>
    state.getRecurringDates()
  );

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4">
      <div>
        <MiniCalendarPreview />
      </div>
      <div>
        <ScheduledDatesTable recurringDates={recurringDates} />
      </div>
    </div>
  );
}
