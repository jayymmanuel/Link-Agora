// Importing the React library, which is required for creating and working with React components.
import React from "react";

// Importing the useState hook from the React library.
// The useState hook allows functional components to manage state.
import { useState } from "react";

// Importing the Link component from the react-router-dom library.
// The Link component is used for creating navigation links in React applications.
import { Link } from "react-router-dom";

// Importing React Icon
import { FaArrowRight } from "react-icons/fa";

const StockRow = ({
  ownership,
  bikes,
  customerName,
  customerEmail,
  initials,
}) => {
  const [isEventDetailsOpen, setIsEventDetailsOpen] = useState(false);

  const toggleEventDetails = () => {
    setIsEventDetailsOpen(!isEventDetailsOpen);
  };

  return (
    <tr>
      <td className="w-20 px-3 py-4 text-center"></td>
      <td className="px-3 py-4">
        <div className="flex items-center w-max">
          <div className="ml-4">
            <div className="py-2 text-sm text-white">{customerName}</div>
          </div>
        </div>
      </td>

      <td className="px-3 py-4">
        <div className="flex items-center w-max">
          <div className="ml-4">
            <div className="py-2 text-sm text-white">{customerName}</div>
          </div>
        </div>
      </td>
      <td className="px-8 py-4 text-sm text-white">{ownership}</td>
      <td className="px-12 py-4 text-sm text-white">{bikes}</td>
      <td className="w-20 px-3 py-2 text-center text-white">
        <Link to="/event-details">
          <button
            className="flex items-center justify-center bg-light-blue border border-transparent hover:bg-navy-blue hover:border-white rounded-lg h-[2rem] w-[2rem]"
            onClick={toggleEventDetails}
          >
            <FaArrowRight color="#FFFFFF" />
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default StockRow;
