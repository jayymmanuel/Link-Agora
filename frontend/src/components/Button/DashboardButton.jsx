// Importing the React library, which is required for creating and working with React components.
import React from "react";
import { TbCalendarStar } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiActivity } from "react-icons/fi";

// Importing the Link component from the react-router-dom library.
// The Link component is used for creating navigation links in React applications.
import { Link } from "react-router-dom";

const DashboardButton = ({ icon, title, whereto }) => {
  return (
    <Link to={whereto} className="w-full">
            <div className="w-full h-36 lg:h-[16.5rem] md:h-44 sm:h-56 flex flex-col justify-center bg-white border border-zinc-200 hover:bg-amazon-green shadow-lg rounded-xl text-center p-4 md:p-5 dark:border-gray-700 text-amazon-green hover:text-white">
              {/* Icon */}
              <div className="flex justify-center items-centermx-auto">
                <TbCalendarStar size={50} />
              </div>
              {/* End Icon */}
              <div className="mt-3">
                <h3 className="text-sm sm:text-lg font-semibold">
                  {title}
                </h3>
              </div>
            </div>
    </Link>
  );
};

export default DashboardButton;
