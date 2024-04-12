import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { BiSolidCalendarPlus } from "react-icons/bi";




export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-4 rounded-lg flex w-full h-12 items-center bg-light-blue hover:bg-navy-blue"
    >
      <span className="text-white"> Make Request</span>
      <BiSolidCalendarPlus alt="create_event" className="ml-2 w-6 h-6" color="#FFFFFF" />
    </button>
  );
}