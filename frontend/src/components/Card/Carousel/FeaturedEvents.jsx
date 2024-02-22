import React, { useState, useEffect } from "react";
import poster from "../../../assets/event1poster.jpg"; 
import poster2 from "../../../assets/event2poster.jpeg"; 
import poster3 from "../../../assets/event3poster.jpeg"; 

import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { RiFileList3Line } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";

const FeaturedEvents = () => {
  const images = [
    {
      id: 1,
      src: poster,
      description:
        "The Black Management Forum is pleased to invite you to the 7th Annual Don Mkhwanazi Lecture presented by Bonang Mohale.",
      date: "Date: September 15, 2023",
      time: "Time: 10:00 AM - 12:00 PM",
      category: "Event Category: Business",
      website: "Website: example.com/event1",
      organizerName: "Organizer: John Doe",
      organizerEmail: "Email: john.doe@example.com",
    },
    {
      id: 2,
      src: poster2,
      description:
        "The Black Management Forum invites you to the second instalment of the virtual masterclass series themed: Leadership and Ethics. This session will be delivered by…",
      date: "Date: October 5, 2023",
      time: "Time: 2:00 PM - 4:00 PM",
      category: "Event Category: Leadership",
      website: "Website: example.com/event2",
      organizerName: "Organizer: Jane Smith",
      organizerEmail: "Email: jane.smith@example.com",
    },
    {
      id: 3,
      src: poster3,
      description:
        "The aim of this webinar is to adequately prepare all members for the upcoming 2022 Policy Conference and themes for commissions.",
      date: "Date: November 20, 2023",
      time: "Time: 3:30 PM - 5:30 PM",
      category: "Event Category: Government",
      website: "Website: example.com/event3",
      organizerName: "Organizer: Mary Johnson",
      organizerEmail: "Email: mary.johnson@example.com",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = images[currentImageIndex];

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(goToNextSlide, 5000); // Auto-advance every 5 seconds
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoplay, currentImageIndex]);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="relative">
        <h3 className="font-bold mb-4 text-lg ">Featured Events</h3>
        <div
          className="bg-white border-gray-200 border p-4 rounded-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden mx-auto rounded-lg">
            <img
              src={currentImage.src}
              alt={currentImage.description}
              className="w-full h-44 object-cover"
            />
          </div>
          <div className="text-center md:text:sm lg:text-sm mt-4 h-24">
            {currentImage.description}
          </div>
          <hr className="mt-8 h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50 flex-grow" />

          <div className="text-left p-2">
            <div className="text-md font-semibold flex items-center">
              <RiFileList3Line className="mr-2 text-gray-600" />
              Details
            </div>
            <div className="md:text:sm lg:text-sm h-20 w-64">
              <p>{currentImage.date}</p>
              <p>{currentImage.time}</p>
              <p>{currentImage.category}</p>
              <p>{currentImage.website}</p>
            </div>
          </div>
          <hr className="mt-8 h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50 flex-grow" />

          <div className="text-left p-2">
            <div className="text-md font-semibold flex items-center">
              <RiUser3Line className="mr-2 text-gray-600" />
              Organizer
            </div>
            <div className="md:text:sm lg:text-sm h-8 w-64">
              <p>{currentImage.organizerName}</p>
              <p>{currentImage.organizerEmail}</p>
            </div>
          </div>
        </div>
        <button
          onClick={goToPreviousSlide}
          className="absolute top-1/4 left-0 transform -translate-y-1/2 p-4 text-white rounded-full"
        >
          <ChevronLeft
            size={32}
            className="text-gray-600 hover:text-white bg-white mx-2 cursor-pointer rounded-md hover:bg-[#007f66]  border-2"
          />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/4 right-0 transform -translate-y-1/2 p-4 text-white rounded-full"
        >
          <ChevronRight
            size={32}
            className="text-gray-600 hover:text-white bg-white mx-2 cursor-pointer rounded-md hover:bg-[#007f66]  border-2"
          />
        </button>
      </div>
    </div>
  );
};

export default FeaturedEvents;
