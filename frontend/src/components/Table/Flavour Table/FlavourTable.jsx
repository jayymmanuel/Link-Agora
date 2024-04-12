// Importing the React library, which is required for creating and working with React components.
import React from "react";

// Importing the useState and useEffect hooks from the React library.
// - The useState hook allows functional components to manage state.
// - The useEffect hook is used for performing side effects in functional components, such as data fetching or subscribing to external events.
import { useState, useEffect } from "react";

// Importing Create Client Modal
import CreateShisha from "../../../Modals/My Events/MyEventsDetailsModal";

// Importing React Icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { LuSettings2 } from "react-icons/lu";


// Importing the StockRow
import FlavourRow from "./FlavourRow";
import BikeData from "./StockData"; // Importing BikeData array

const StockTable = () => {
  const [isEventDetailsOpen, setIsEventDetailsOpen] = useState(false);
  const [StockTable, setStockTable] = useState(BikeData); // Initializing with BikeData array

  const toggleEventDetails = () => {
    setIsEventDetailsOpen(!isEventDetailsOpen);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Check if clientData is empty
  const isTableEmpty = StockTable.length === 0;

  return (
    <div>
      <>
        {/* Table Section */}
        <div className="w-full py-10 lg:py-14 mx-auto">
          {/* Card */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="bg-zinc-800 border-[1px] border-zinc-500 rounded-xl shadow-sm overflow-hidden">
                  {/* Header */}
                  <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-dark-grey">
                    <div>
                      <h2 className="text-xl font-semibold text-white">
                        All Your Personal Events
                      </h2>
                      <p className="text-sm text-white">Full Inventory</p>
                    </div>
                    <div>
                      <div className="inline-flex gap-x-2">
                        <div className="relative flex items-center mt-6 md:mt-0">
                          <span className="absolute">
                            <FiSearch
                              className="w-5 h-5 ml-2"
                              color="#6d6d6d"
                            />
                          </span>
                          <input
                            type="text"
                            placeholder="Search Client"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="block w-full py-1.5 pr-5 text-zinc-900 bg-white border border-dark-grey rounded-lg md:w-80 placeholder-gray-500/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                        </div>

                        <button
                          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-white font-semibold bg-light-blue  text-white hover:bg-french-bistre focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                          onClick={toggleEventDetails}
                        >
                          Filter
              <LuSettings2 />

                        </button>
                        {isEventDetailsOpen && (
                          <CreateShisha
                            isOpen={isEventDetailsOpen}
                            onClose={toggleEventDetails}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  {/* End Header */}

                  {/* Check if clientData is empty */}
                  {isTableEmpty ? (
                    <div className="p-6 text-center text-royal-gold font-semibold">
                      No record stored
                    </div>
                  ) : (
                    // Render the table if clientData is not empty
                    <>
                      {/* Table */}
                      <table className="min-w-full divide-y divide-dark-grey">
                        <thead className="bg-light-blue">
                          <tr>
                            <th
                              scope="col"
                              className="py-6 text-left"
                            ></th>
                            <th
                              scope="col"
                              className="pl-6 lg:pl-3 xl:pl-8 pr-12 py-3 text-left"
                            >
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-white ml-4">
                                  Brand
                                </span>
                              </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-left">
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-white">
                                  Product Name
                                </span>
                              </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-left">
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-white whitespace-nowrap">
                                  License Number
                                </span>
                              </div>
                            </th>
                            <th scope="col" className="px-6 py-3 text-left">
                              <div className="flex items-center gap-x-2">
                                <span className="text-xs font-semibold uppercase tracking-wide text-white whitespace-nowrap">
                                  Quantity
                                </span>
                              </div>
                            </th>

                            <th scope="col" className="px-6 py-3 text-right" />
                          </tr>
                        </thead>
                        {/* ... (omitting other parts for brevity) */}
                        <tbody className="divide-y divide-dark-grey">
                          {StockTable.map((bike, index) => (
                            <FlavourRow
                              key={index}
                              customerName={bike.customerName}
                              customerEmail={bike.customerEmail}
                              ownership={bike.ownership}
                              initials={bike.initials}
                              bikes={bike.bikes} // Passing bikes data to FlavourRow component
                            />
                          ))}
                        </tbody>

                        {/* ... (omitting other parts for brevity) */}
                      </table>
                      {/* End Table */}
                      {/* Footer */}
                      <div className="px-6 py-4 flex justify-between items-center border-t border-dark-grey">
                        {/* Result Value */}
                        <div className="text-center flex-grow">
                          <p className="text-sm text-white">
                            <span className="font-semibold text-white mr-2">
                              {StockTable.length}
                            </span>{" "}
                            results
                          </p>
                        </div>
                        {/* Buttons */}
                        <div className="inline-flex gap-x-4">
                          <button
                            type="button"
                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium bg-light-blue hover:bg-french-bistre text-white shadow-sm align-middle hover:bg-sombre-purple text-sm"
                          >
                            <IoIosArrowBack />
                            Prev
                          </button>
                          <button
                            type="button"
                            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium bg-light-blue hover:bg-french-bistre text-white shadow-sm align-middle hover:bg-sombre-purple text-sm"
                          >
                            Next
                            <IoIosArrowForward />
                          </button>
                        </div>
                      </div>
                      {/* End Footer */}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Table Section */}
      </>
    </div>
  );
};

export default StockTable;
