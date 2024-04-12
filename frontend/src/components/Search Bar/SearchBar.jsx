import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  return (
    <div>
      <div class="flex items-center p-6 space-x-6 rounded-xl bg-zinc-700 border-zinc-500 border mb-12">
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

        <button class="bg-light-blue p-4 text-white text-sm font-semibold rounded-lg border border-white hover:text-navy-blue hover:bg-white cursor-pointer flex items-center justify-center">
  <span class="text-base whitespace-nowrap">Find Event</span>
</button>


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
