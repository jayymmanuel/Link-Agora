import React from "react";

// Importing React-Icons
import { FiSearch } from "react-icons/fi";

// Importing Lucide-Icons
import { MoveRight } from 'lucide-react';
import { MoveLeft } from 'lucide-react';
import MyEventItem from "./MyEventItem";

function MyEvents() {
  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* Heading */}

          <div className="flex items-center gap-x-3 -mt-8 mb-6">
            <h1 className="text-3xl font-medium text-black">Events</h1>
          </div>
        </div>

        <div className="-mt-2 md:flex md:items-center md:justify-between">
          {/* ... Search and filter buttons ... */}
          <div class="inline-flex overflow-hidden bg-white border divide-x rounded-lg mb-2 rtl:flex-row-reverse">
            <button class="px-5 py-2 text-xs font-medium text-gray-200 transition-colors duration-200 bg-[#8A2623] sm:text-sm">
              View all
            </button>

            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm">
              Attending
            </button>

            <button class="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm ">
              Awaiting
            </button>
          </div>

          <div class="relative flex items-center mt-6 md:mt-0">
            <span class="absolute">
              <FiSearch className="w-5 h-5 ml-2" color="#6d6d6d" />
            </span>

            <input
              type="text"
              placeholder="Search"
              class="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-400 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-[#8A2623]">
                    {/* Table header */}
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-white"
                      >
                        <button class="flex items-center gap-x-3 focus:outline-none">
                          <span>Organiser</span>

                        </button>
                      </th>

                      <th
                        scope="col"
                        class="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                      >
                        Date
                      </th>

                      <th
                        scope="col"
                        class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-white"
                      >
                        Venue
                      </th>

                      <th scope="col" class="relative py-3.5 px-4">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  {/* Row 1 */}
                  <tbody className="bg-white divide-y divide-gray-20">
                    <MyEventItem
                      eventId="6783"
                      organiser="Jasmine Ming"
                      eventStatus="Confirmed"
                      statusColor="#C2F6CA"
                      eventDate="03-08-2023"
                      eventVenue="Think Tank 1"
                      textColor="#22c55e"
                    />
                    {/* Other rows */}
                  </tbody>

                  {/* Row 2 */}
                  <tbody className="bg-white divide-y divide-gray-20">
                    <MyEventItem
                      eventId="6783"
                      organiser="Jasmine Ming"
                      eventStatus="Pending"
                      statusColor="#FFF6C2"
                      eventDate="03-08-2023"
                      eventVenue="Think Tank 1"
                      textColor="#E0BF00"
                    />
                    {/* Other rows */}
                  </tbody>

                  {/* Row 3 */}
                  <tbody className="bg-white divide-y divide-gray-20">
                    <MyEventItem
                      eventId="6783"
                      organiser="Jasmine Ming"
                      eventStatus="Declined"
                      statusColor="#F7EEF2"
                      eventDate="03-08-2023"
                      eventVenue="Think Tank 1"
                      textColor="#EF4444"
                    />
                    {/* Other rows */}
                  </tbody>

                  {/* Row 4 */}
                  <tbody className="bg-white divide-y divide-gray-20">
                    {/* <RequestList
                      eventId="6783"
                      organiser="Jasmine Ming"
                      eventStatus="Confirmed"
                      statusColor="#F7EEF2"
                      eventDate="15-08-2023"
                      eventVenue="Think Tank 4"
                    /> */}
                    {/* Other rows */}
                  </tbody>

                  {/* Row 5 */}
                  <tbody className="bg-white divide-y divide-gray-20">
                    {/* <RequestList
                      eventId="6783"
                      organiser="Jasmine Ming"
                      eventStatus="Confirmed"
                      statusColor="#F7EEF2"
                      eventDate="17-08-2023"
                      eventVenue="Think Tank 5"
                    /> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:flex sm:items-center sm:justify-between">
          {/* Pagination */}
          <div class="text-sm text-black">
            Page <span class="font-medium text-black">1 of 10</span>
          </div>

          <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
            {/* Previous Button */}
            <a
              href="#"
              class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white capitalize transition-colors duration-200 bg-[#8A2623] border rounded-md sm:w-auto gap-x-2 hover:bg-[#01663E]"
            >
              <MoveLeft size={18}/>


              <span>previous</span>
            </a>

            {/* Next Button */}
            <a
              href="#"
              class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-white capitalize transition-colors duration-200 bg-[#8A2623] border rounded-md sm:w-auto gap-x-2 hover:bg-[#01663E]"
            >
              <span>Next</span>
              <MoveRight size={18}/>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyEvents;
