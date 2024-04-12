import React, { useState, useEffect } from "react";

import BarLoader from "react-spinners/BarLoader";
import TitleContainer from "../../../components/Decoration/TitleContainer";
import backgroundImage from "./../../../assets/seminar2.png";

import FlavourTable from "../../../components/Table/Flavour Table/FlavourTable";

import { AiTwotoneCalendar } from "react-icons/ai";

// Importing React Icon(s)
import { BiMoneyWithdraw } from "react-icons/bi";
import { BiBox } from "react-icons/bi";
import { FaRegSquareCheck } from "react-icons/fa6";

// Importing Component(s)
// import { bikeCatalogData } from "../../../components/Table/Flavour Table/StockData";
// import FlavourTable from "../../../components/Table/Flavour Table/FlavourTable";
// import TableStat from "../../../components/Stat/TableStat";

const ViewMyEvents = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center pt-[25rem]">
          <BarLoader color={"#476070"} loading={loading} size={100} />
        </div>
      ) : (
        <div className="px-44 mt-6">
          <div className="w-full mx-auto lg:container">
            <TitleContainer
              title="Personal Events"
              subtitle="View and manage all your created events"
              icon={<AiTwotoneCalendar size={50} />}
              backgroundImage={backgroundImage}
            />
          </div>

          <div className="px-2 mt-14">
          <FlavourTable/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMyEvents;
