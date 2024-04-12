// Importing the React library, which is required for creating and working with React components.
import React from "react";

// Importing the useState and useEffect hooks from the React library.
// - The useState hook allows functional components to manage state.
// - The useEffect hook is used for performing side effects in functional components, such as data fetching or subscribing to external events.
import { useState, useEffect } from "react";

// Importing the BarLoader component from the react-spinners library.
// BarLoader is a spinner/loading animation component that can be used to indicate that some asynchronous process is in progress.
import BarLoader from "react-spinners/BarLoader";

// Importing React Icon(s)
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { IoMdInformationCircle } from "react-icons/io";
import EventCarousel from "../../../../components/Carousel/EventCarousel";
import TextInformation from "./TextInformation";
import EventCard from "../../../../components/Card/EventCard";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { RiShareForward2Fill } from "react-icons/ri";

const EventDetails = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to the top when component is mounted
    window.scrollTo(0, 0);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center pt-[25rem]">
        <BarLoader color={"#476070"} loading={loading} size={100} />
      </div>
      ) : (
        <div className="px-32">
          {/* Breadcrumbs */}
          <div className="w-full mt-8">
            <ol
              className="flex items-center whitespace-nowrap mb-6 ml-2"
              aria-label="Breadcrumb"
            >
              <li className="inline-flex items-center">
                <a
                  className="flex items-center text-sm text-gray-500 hover:text-navy-purple focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
                  href="/"
                >
                  Home
                </a>
                <IoIosArrowForward className="text-neutral-600 ml-2 mr-2" />
              </li>
              <li className="inline-flex items-center">
                <a
                  className="flex items-center text-sm text-gray-500 hover:text-navy-purple focus:outline-none focus:text-blue-600 dark:focus:text-blue-500"
                  href="/upcomingevents"
                >
                  Events
                  <IoIosArrowForward className="text-neutral-600 ml-2 mr-2" />
                </a>
              </li>
              <li
                className="inline-flex items-center text-sm font-semibold text-white truncate"
                aria-current="page"
              >
                Selected Event Name
                <IoMdInformationCircle className="ml-2 mr-2" />
              </li>
              {/* Close Button */}
              <div className="ml-auto  bg-light-blue border hover:bg-navy-blue text-white hover:text-white p-2 rounded-xl flex items-center justify-center">
                <IoCloseOutline size={24} />
              </div>
            </ol> 
          </div>

          {/*  */}
          <div className="flex flex-col w-full lg:flex-row medi:flex-row  gap-20">
            {/* Event Poster + Buttons */}
            <div>
              <EventCard whereto="/event-details" />

              {/* Buttons */}
              <div className="flex mt-10 justify-start gap-12">
                <button className="flex items-center text-white border text-md font-bold font-palanquin shadow-xl bg-zinc-700 hover:bg-navy-blue rounded-xl px-4 p-4">
                  Make Booking
                  <BsFillPatchCheckFill className="ml-4" size={18} />
                </button>
                <button className="flex items-center text-white border text-md font-bold font-palanquin shadow-xl bg-zinc-700 hover:bg-safety-yellow rounded-xl px-4 p-4">
                  Share
                  <RiShareForward2Fill className="ml-2" size={18} />
                </button>
              </div>
            </div>

            {/* Event Details */}
            <div className="flex-col w-full gap-4 bg-navy-blue border rounded-xl p-4">
              <TextInformation
                title="Event Name"
                content="Masterclass - Leadership and Ethics"
                
              />

              <TextInformation title="Date" content="27 September 2022" />

              <TextInformation title="Time" content="6:00 PM" />


              <TextInformation
                title="Location"
                content="Helliot Road, 42 Avenue"
              />

              <TextInformation
                title="Description"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />

              <TextInformation
                title="Description"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
