import React from "react";

const EventBox = ({
  weekDay,
  dayValue,
  timeline,
  eventTitle,
  eventDetails,
  poster,
}) => {
  return (
    // Event Component
    <div className="flex max-w-6xl p-6 bg-white border border-gray-200 rounded-lg mb-12">
      {/* Item 1 - Date */}
      <div className="flex flex-col items-center mr-4 ml-8 mt-[5rem]">
        <p className="text-[#f0451f]">{weekDay}</p>
        <p className="text-2xl text-gray-700 dark:text-gray-400">{dayValue}</p>
      </div>

      {/* Item 2 - Event Details */}
      <div>
        <p className="font-light text-sm ml-14 text-gray-400 mb-2 mt-[3rem]">
          {timeline}
        </p>
        <h5 className="mb-2 text-lg ml-14 font-bold tracking-tight text-black hover:text-[#01663E]">
          {eventTitle}
        </h5>
        <p className="font-normal ml-14 pr-4 text-black text-sm">{eventDetails}</p>
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
  );
};

export default EventBox;
