import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { BiSolidCalendarPlus } from "react-icons/bi";




export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-lg flex w-[10.5rem] h-12 items-center bg-[#01663E] hover:bg-[#8A2623]"
    >
      <BiSolidCalendarPlus alt="create_event" className="w-6 h-6" color="#FFFFFF" />
      <span className="pl-3 text-white"> Make Request</span>
    </button>
  );
}