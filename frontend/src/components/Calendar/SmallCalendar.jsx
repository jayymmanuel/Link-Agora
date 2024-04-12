import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { getMonth } from "../../util";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const { monthIndex, setSmallCalendarMonth, setDaySelected, daySelected } =
    useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }
  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);

    if (nowDay === currDay) {
      return "bg-light-blue border border-white rounded-lg text-white ";
    } else if (currDay === slcDay) {
      return "bg-navy-blue border border-white rounded-lg text-white font-bold";
    } else {
      return "text-gray-400"; // Default text color for other days
    }
  }

  return (
    <div className="mt-9 w-full">
      {/* Header */}
      <header className="flex justify-between">
        <p className="text-white font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
        </p>
        <div>
          {/* Left Arrow button */}
          <button onClick={handlePrevMonth}>
            <ChevronLeft
              size={24}
              className="bg-light-blue text-white mx-2 cursor-pointer rounded-md border-white hover:border-navy-blue hover:text-navy-blue border-2"
            />
          </button>
          {/* Right Arrow button */}
          <button onClick={handleNextMonth}>
            <ChevronRight
              size={24}
              className="bg-light-blue text-white mx-2 cursor-pointer rounded-md border-white hover:border-navy-blue hover:text-navy-blue border-2"
            />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-7 grid-rows-6 gap-y-2 gap-x-2 mt-2">
        {currentMonth[0].map((day, i) => (
          // Week Days Symbols
          <span key={i} className="text-sm py-1 text-center text-gray-400">
            {day.format("dd").charAt(0)}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          // Days
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={`w-full ${getDayClass(day)}`} // Adjusted padding here
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
