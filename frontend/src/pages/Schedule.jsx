// Import the React library, which is necessary for creating React components.
import React from "react";

import { useState, useEffect } from "react";

import BarLoader from "react-spinners/BarLoader";

// Import the BigCalendar component
import BigCalendar from "../components/Calendar/BigCalendar";


const Schedule = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fafbfd]"> 
                {loading ? (
        <BarLoader color={"#01663E"} loading={loading} size={150} />
      ) : (
      <div className="w-full p-5">
        {/* Render the BigCalendar component */}
        <BigCalendar />
      </div>
                  )}
    </div>
  );
};

// Export the Schedule component to make it available for use in other parts of the application.
export default Schedule;
