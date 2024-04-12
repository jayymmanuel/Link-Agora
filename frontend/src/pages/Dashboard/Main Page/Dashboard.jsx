// Importing the React library, which is required for creating and working with React components.
import React from "react";

// Importing the useState and useEffect hooks from the React library.
// - The useState hook allows functional components to manage state.
// - The useEffect hook is used for performing side effects in functional components, such as data fetching or subscribing to external events.
import { useState, useEffect } from "react";

// Importing the HashLoader component from the react-spinners library.
// HashLoader is a spinner/loading animation component that can be used to indicate that some asynchronous process is in progress.
import HashLoader from "react-spinners/HashLoader";

// Importing the Link component from the react-router-dom library.
// The Link component is used for creating navigation links in React applications.
import { Link } from "react-router-dom";

// Importing the CircularProgress component from the Material-UI library.
// CircularProgress is a circular loading indicator commonly used to show that a process is in progress.
import CircularProgress from "@mui/joy/CircularProgress";


// Importing Image Asset(s)
import image from "../../../assets/event2poster.jpeg";
import background from "../../../assets/event2poster.jpeg";

// Importing Component(s)
// import BeginShift from "../../modals/Confirmation/Begin Shift/BeginShift";

// Importing React Icon(s)
import { LuFuel } from "react-icons/lu";
import { MdFilterTiltShift } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { BiCalendarStar } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiActivity } from "react-icons/fi";
import { FaPeopleGroup } from "react-icons/fa6";
import EventCarousel from "../../../components/Carousel/EventCarousel";

const Dashboard = () => {
  const sectionStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [showBeginShiftModal, setShowBeginShiftModal] = useState(false);

  const openModal = () => {
    setShowBeginShiftModal(true);
  };

  const closeModal = () => {
    setShowBeginShiftModal(false);
  };
  return (
    <section className="flex items-center justify-center dark:bg-zinc-900 lg:h-screen">
      <div className="px-4 py-20 mx-auto max-w-7xl">
        <div className="flex flex-wrap">

          <div class="flex-1 pr-0 lg:pr-4">
            <div class="mb-12">
              <div class="relative">
                <h1 class="text-6xl font-bold text-white mb-2">Welcome Back,</h1>
                <h2 class="text-3xl font-bold text-white">Emmanuel Kianda</h2>

              </div>
              <p class="mb-16 text-base text-gray-500 mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Delectus magni eius eaque? Pariatur numquam, odio quod nobis
                ipsum ex cupiditate? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Amet, cum.
              </p>
            </div>
            <div class="grid flex-1 grid-cols-1 p-4 gap-6 md:grid-cols-2 lg:grid-cols-2">
              <div class="w-full p-4 text-center transition-all bg-white rounded shadow dark:bg-zinc-800 border border-zinc-600  hover:shadow-lg">
                <div class="inline-block p-4 mb-4 bg-zinc-600 rounded-full">
                  <CircularProgress
                    size="lg"
                    variant="solid"
                    color="success"
                    determinate
                    value={25}
                    className="text-white"
                  >
                    25
                  </CircularProgress>
                </div>
                <h3 class="text-sm font-semibold text-black dark:text-white">
                  {" "}
                  Contract completion{" "}
                </h3>
              </div>
              {/*  */}
              <Link to="/viewmyevents" className="w-full p-8 flex flex-col items-center justify-center text-center transition-all rounded shadow bg-zinc-800 hover:bg-zinc-600 border border-zinc-600 hover:shadow-lg">
                <button>
                  <div className="flex">
                    <h3 class="text-sm font-semibold text-black dark:text-white mr-4 mt-1">
                     My Events
                    </h3>
                    <FaPeopleGroup size={26} className="text-white" />
                  </div>
                </button>
              </Link>

              {/*  */}
              <Link to="/viewmyinvitations">
                <button class="w-full p-8 flex flex-col items-center justify-center text-center transition-all rounded shadow bg-zinc-800 hover:bg-zinc-600 border border-zinc-600 hover:shadow-lg">
                  <div className="flex">
                    <h3 class="text-sm font-semibold text-black dark:text-white mr-4 mt-1">
                     Event Invitations
                    </h3>
                    <HiOutlineMailOpen size={26} className="text-white" />
                  </div>
                </button>
              </Link>
              {/*  */}
              <Link to="/upcomingevents">
                <button class="w-full p-8 flex flex-col items-center justify-center text-center transition-all rounded shadow bg-zinc-800 hover:bg-zinc-600 border border-zinc-600 hover:shadow-lg">
                  <div className="flex">
                    <h3 class="text-sm font-semibold text-black dark:text-white mr-4 mt-1">
                    Upcoming Events
                    </h3>
                    <BiCalendarStar size={26} className="text-white" />
                  </div>
                </button>
              </Link>
              {/* Render ChangePasswordModal if showChangePasswordModal is true */}
              {/* {showBeginShiftModal && <BeginShift onClose={closeModal} />} */}
            </div>
          </div>

<EventCarousel
whereto="/event-details"/>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
