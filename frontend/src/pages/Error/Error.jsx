import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import './Error.css';
import logo from "../../assets/link-agora-logo-variation-4.png";

const Error = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000000]">
      {loading ? (
        <BarLoader color={"#01663E"} loading={loading} size={150} />
      ) : (
        <div className="w-full text-center text-white">
          {/* PAGE CONTENT */}
          <div className="flex justify-center w-76 h-44 m-4 "> {/* Center the content horizontally */}
            <img src={logo} className="h-full" alt="Logo" />
          </div>
          <h2>502 Bad Gateway</h2>
          <p>Sorry, the page you have requested does not exist.</p>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          <a href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Return to Dashboard?</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Error;
