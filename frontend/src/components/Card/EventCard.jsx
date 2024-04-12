import React from "react";
import image1 from "../../assets/event2poster.jpeg";

const EventCard = () => {
  return (
    <div className="relative rounded-lg">
      <div className="relative z-20 p-8 lg:p-2 md:p-6 sm:p-8 border border-zinc-600 w-[30rem] h-[30rem] rounded overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={image1}
          alt="Event Name"
        />
      </div>
    </div>
  );
};

export default EventCard;
