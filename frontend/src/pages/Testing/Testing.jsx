import React, { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";

const Testing = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#000000]">
      {loading ? (
        <BarLoader color={"#01663E"} loading={loading} size={150} />
      ) : (
        <div className="w-full text-center text-white">
          {/* PAGE CONTENT */}
          <h1>IMPLEMENT 502 PAGE HERE</h1>
        </div>
      )}
    </div>
  );
};

export default Testing;
