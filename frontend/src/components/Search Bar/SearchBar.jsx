import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div>
      <div class="flex items-center p-6 space-x-6 rounded-xl bg-white border-gray-200 border mb-12">
        <div class="relative w-full flex items-center mt-6 md:mt-0">
          <span class="absolute">
            <FiSearch className="w-5 h-5 ml-2" color="#6d6d6d" />
          </span>

          <input
            type="text"
            placeholder="Search for events"
            class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg  placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div class="bg-[#116239] w-44  h-9 text-white text-sm rounded-lg hover:bg-[#8A2623] cursor-pointer flex items-center justify-center">
          <span>Find Event</span>
        </div>

        {/* <div class=" w-16 h-16 text-black flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-200">
            <span>List</span>
          </div> */}

        {/* <div class=" w-16 h-16 text-black flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-200">
            <span>Month</span>
          </div> */}

        {/* <div class=" w-16 h-16 text-black flex items-center justify-center rounded-lg cursor-pointer hover:bg-gray-200">
            <span>Day</span>
          </div> */}
      </div>
    </div>
  );
};

export default SearchBar;
