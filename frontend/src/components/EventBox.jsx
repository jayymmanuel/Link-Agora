import React from "react";
import { Link } from "react-router-dom";


const EventBox = ({
  weekDay,
  dayValue,
  timeline,
  eventTitle,
  eventDetails,
  poster,
}) => {
  return (

    <Link to="/event-details">
    <div className="flex max-w-6xl p-6 bg-zinc-700 border border-zinc-600 rounded-lg hover:bg-navy-blue">
      {/* Item 1 - Date */}
      <div className="flex flex-col items-center mr-4 ml-8 mt-[5rem]">
        <p className="text-red-500">{weekDay}</p>
        <p className="text-2xl text-white">{dayValue}</p>
      </div>

      {/* Item 2 - Event Details */}
      <div>
        <p className="font-light text-sm ml-14 text-gray-400 mb-2 mt-[3rem]">
          {timeline}
        </p>
        <h5 className="mb-2 text-lg ml-14 font-bold tracking-tight text-white">
          {eventTitle}
        </h5>
        <p className="font-normal ml-14 pr-4 text-white text-sm">{eventDetails}</p>
      </div>

      {/* Item 3 - Event Poster */}
      <div className="ml-auto">
        <div
          style={{
            width: "250px",
            height: "250px",
            overflow: "hidden",
            borderRadius: "10px", // Adjust the border-radius as needed
          }}
        >
          <img
            src={poster}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="Event Poster"
          />
        </div>
      </div>
    </div>
    </Link>

  );
};

export default EventBox;
