import { format } from "date-fns";
import React from "react";

const ScheduledDatesTable = ({ recurringDates }) => {
  if (!recurringDates || recurringDates.length === 0) return null;

  // Group dates by year and month
  const groupedDates = recurringDates.reduce((acc, date) => {
    const year = date.getFullYear();
    const month = format(date, "MMMM");

    if (!acc[year]) acc[year] = {};
    if (!acc[year][month]) acc[year][month] = [];

    acc[year][month].push(date);
    return acc;
  }, {});

  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium mb-2">Scheduled Dates</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Year</th>
              <th className="py-2 px-4 border-b">Month</th>
              <th className="py-2 px-4 border-b">Dates</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(groupedDates).map((year) =>
              Object.keys(groupedDates[year]).map((month) => (
                <tr key={`${year}-${month}`}>
                  <td className="py-2 px-4 border-b">{year}</td>
                  <td className="py-2 px-4 border-b">{month}</td>
                  <td className="py-2 px-4 border-b">
                    {groupedDates[year][month].length > 1 ? (
                      <select className="w-full py-1 px-2 border rounded-lg bg-gray-100">
                        {groupedDates[year][month].map((date, index) => (
                          <option
                            key={index}
                            value={format(date, "yyyy-MM-dd")}
                          >
                            {format(date, "do EEEE")}{" "}
                            {/* Shows date and day without year and month */}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <span className="block">
                        {format(groupedDates[year][month][0], "do EEEE")}{" "}
                        {/* Shows date and day without year and month */}
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScheduledDatesTable;
