import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../../assets/linkagoraCalendar.png";
import GlobalContext from "../../context/GlobalContext";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import CreateEventButton from "./CreateEventButton";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center">
      <img src={logo} alt="calendar" className="w-28 h-28" />

      {/* First set of components */}
      <div className="ml-40 flex items-center">
        {/* Left Arrow button */}
        <button onClick={handlePrevMonth}>
          <ChevronLeft
            size={28}
            className="bg-light-blue text-white mx-2 cursor-pointer rounded-md border-white hover:border-navy-blue hover:text-navy-blue border-2"
          />
        </button>

        {/* Right Arrow button */}
        <button onClick={handleNextMonth}>
          <ChevronRight
            size={28}
            className="bg-light-blue text-white mx-2 cursor-pointer rounded-md border-white hover:border-navy-blue hover:text-navy-blue border-2"
          />
        </button>
        <h2 className="ml-4 text-xl text-white font-semibold whitespace-nowrap">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>

      {/* Second set of components */}
      <div className="flex items-center ml-24 mr-24">
        <button
          onClick={handleReset}
          className="border-light-blue border-2 rounded-lg py-2 px-4 ml-5 mr-5 text-light-blue hover:text-white bg-[#fafbfd] hover:bg-navy-blue"
        >
          Today
        </button>
        <CreateEventButton />
      </div>
    </header>
  );
}
