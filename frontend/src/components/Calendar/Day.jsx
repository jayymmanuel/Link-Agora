import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";


export default function Day({ day, rowIdx }) {
  const [dayEvents, setDayEvents] = useState([]);
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-light-blue text-white border font-semibold rounded-lg mt-3 w-7"
      : "";
  }
  return (
    <div className="bg-zinc-700 border border-zinc-600 hover:border-diamond-blue rounded-lg mr-3 mt-3 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1 text-white font-semibold">
            {day.format("ddd").toUpperCase()}
          </p>
        )}
        <p
          className={`text-sm text-white font-semibold p-1 my-1 mt-3 text-center  ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div className="flex justify-center">
             <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1  text-gray-600 text-sm w-24 flex justify-center rounded-lg mb-1 truncate`}
          >
            {evt.title}
          </div>         
            </div>
        ))}
      </div>
    </div>
  );
}