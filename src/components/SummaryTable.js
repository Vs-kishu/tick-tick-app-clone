import { useDatePickerStore } from "@/store/useDatePickerStore";
import React from "react";

export default function SummaryTable() {
  const { startDate, endDate, recurrencePattern, recurrenceOptions } =
    useDatePickerStore();

  return (
    <div className="mt-6">
      <h3 className="text-lg font-medium">Summary of Your Selection</h3>
      <table className="min-w-full bg-white mt-4 shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="text-left p-4">Field</th>
            <th className="text-left p-4">Selection</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-4 font-medium">Start Date</td>
            <td className="p-4">
              {startDate ? startDate.toDateString() : "Not selected"}
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 font-medium">End Date</td>
            <td className="p-4">
              {endDate ? endDate.toDateString() : "Not selected"}
            </td>
          </tr>
          <tr className="border-b">
            <td className="p-4 font-medium">Recurrence Pattern</td>
            <td className="p-4">
              {recurrencePattern
                ? recurrencePattern.charAt(0).toUpperCase() +
                  recurrencePattern.slice(1)
                : "Not selected"}
            </td>
          </tr>
          {/* Recurrence options, such as interval and specific days, if applicable */}
          {recurrenceOptions && Object.keys(recurrenceOptions).length > 0 && (
            <tr className="border-b">
              <td className="p-4 font-medium">Recurrence Details</td>
              <td className="p-4">
                {Object.entries(recurrenceOptions).map(([key, value]) => (
                  <div key={key}>
                    <strong>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:
                    </strong>{" "}
                    {value}
                  </div>
                ))}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
