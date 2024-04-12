import React, { useState, useEffect } from "react";
import image1 from "../../assets/event2poster.jpeg";
import image2 from "../../assets/event3poster.jpeg";
import image3 from "../../assets/event1poster.jpg";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

import { Link } from "react-router-dom";

const EventCarousel = ({ whereto }) => {
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Switch image every 10 seconds

    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, [images.length]);

  return (
    <Link
      to={whereto}
      className="relative w-full rounded-lg mb-10 lg:mb-0 lg:ml-20 lg:w-2/4"
    >
      <div>
        <div className="relative z-20 p-8 lg:p-2 md:p-6 sm:p-8 border border-zinc-600 w-full h-[40rem] rounded overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={images[currentImageIndex]}
            alt={`Event ${currentImageIndex + 1}`}
          />
          <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
            {/* Info Text */}
            <div className="text-white text-md font-bold font-palanquin bg-zinc-800 rounded-full px-4 p-4">
              Upcoming Event
            </div>
            {/* View Button */}
            <button className="flex items-center text-white hover:text-diamond-blue text-md font-bold font-palanquin shadow-xl bg-zinc-800 hover:bg-zinc-600 rounded-full px-4 p-4">
              View
              <IoArrowForwardCircleSharp className="ml-4" size={20} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCarousel;
