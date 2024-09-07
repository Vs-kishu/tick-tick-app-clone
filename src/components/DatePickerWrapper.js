import DatePickerComponent from "./DatePickerComponent";
import DateRangePicker from "./DateRangePicker";
import RecurrenceCustomization from "./RecurrenceCustomization";
import RecurrenceOptions from "./RecurrenceOptions";
import SummaryTable from "./SummaryTable";
import React from "react";

export default function DatePickerWrapper() {
  return (
    <div className="flex justify-between gap-10">
      <div className="p-4 bg-white rounded shadow-md w-full max-w-md">
        <DateRangePicker />
        <RecurrenceOptions />
        <RecurrenceCustomization />
        <SummaryTable />
      </div>
      <DatePickerComponent />
    </div>
  );
}
