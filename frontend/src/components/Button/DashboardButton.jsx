import React from "react";

const DashboardButton = ({ title, icon, subtitle, info }) => {
  return (
    <a href="#" className="group relative flex flex-col mb-4 w-40 h-40 sm:w-52 sm:h-52 md-medium md:w-72 md:h-full lg:w-64 rounded-md border bg-white text-black py-6 sm:py-8 px-2 shadow-lg transition-all duration-200 ease-in-out responsive-stats-card text-center text-decoration-none">

      <div className="flex flex-col items-center justify-between -mt-4 sm:-mt-5">
        <div className="flex items-center">
          <div
            className="text-sm sm:text-xxs md:text-base font-bold mt-4 sm:mt-8"
            style={{ whiteSpace: "nowrap" }}
          >
            {title}
          </div>
        </div>
      </div>

      <div className="flex-grow flex flex-col justify-center items-center">
        <p className="font-sans text-3xl sm:text-4xl md:text-5xl mt-1 sm:mt-2">
          {icon}
        </p>
        <p
          className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-6"
          style={{ whiteSpace: "nowrap" }}
        >
          {subtitle}
        </p>
      </div>

      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center rounded-md bg-[#8A2623] text-white px-4 sm:px-6 opacity-0  group-hover:opacity-100">
        <span className="text-xs sm:text-sm font-bold">{info}</span>
      </div>
    </a>
  );
};

export default DashboardButton;
