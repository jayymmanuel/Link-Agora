import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import InvitationDetailsModal from "../../../Modals/My Invitation/InvitationDetailsModal";


const InvitationItem = ({
  eventId,
  organiser,
  eventDate,
  eventVenue,
  eventStatus,
  statusColor,
  textColor,
}) => {
  const [isEventDetailsOpen, setIsEventDetailsOpen] = useState(false);

  const openEventDetails = () => {
    setIsEventDetailsOpen(true);
  };

  const closeEventDetails = () => {
    setIsEventDetailsOpen(false);
  };

  return (
    <tr>
      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black">
        <div className="flex items-center gap-x-3">
          <p className="font-medium text-gray-400">#{eventId}</p>
          <h2 className="text-sm font-normal text-black">{organiser}</h2>
        </div>
      </td>
      <td className="px-12 py-3.5 text-sm font-bold text-left rtl:text-right text-black">
        <div
          className="inline px-3 py-1 text-sm font-normal rounded-full gap-x-2"
          style={{ background: statusColor, color: textColor }}
        >
          {eventStatus}
        </div>
      </td>
      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black">
        <div className="flex items-center gap-x-3">
          <h2 className="text-sm font-normal text-black">{eventDate}</h2>
        </div>
      </td>
      <td className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-black">
        <div className="flex items-center gap-x-3">
          <h2 className="text-sm font-normal text-black">{eventVenue}</h2>
        </div>
      </td>
      {/* Open Event Details Button */}
      <td className="relative py-3.5 px-4">
        {/* Wrap the button with a Link component */}
        <div className="block">
          <button
            className="px-1 py-1 text-white transition-colors duration-200 rounded-md bg-[#01663E] hover:bg-[#8A2623]"
            onClick={openEventDetails}
          >
            {/* arrow icon */}
            <FaArrowRight className="w-3 h-3" />
          </button>
        </div>
      </td>
      {isEventDetailsOpen && (
        <InvitationDetailsModal
          isOpen={isEventDetailsOpen}
          onClose={closeEventDetails}
        />
      )}
    </tr>
  );
};

export default InvitationItem;
