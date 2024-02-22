import React, { useState } from "react";
import { CalendarDays } from "lucide-react";
import { CircleDashed } from "lucide-react";
import { MapPin } from "lucide-react";
import { Users } from "lucide-react";
import { Binary } from "lucide-react";
import { UserSquare } from "lucide-react";
import { X } from "lucide-react";

import poster from "../../assets/event3poster.jpeg";

const InvitationDetailsModal = ({
  onClose,
  creator,
  status,
  timeline,
  venue,
  capacity,
  code,
}) => {
  const [isImageModalOpen, setImageModalOpen] = useState(false);

  const openImageModal = () => {
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="relative lg:w-2/5 sm:w-3/5 w-11/12 bg-gray-100 rounded-xl mx-auto border p-10 shadow-sm">
        <div className="inline-flex items-center justify-between w-full">
          {/* Modal Heading */}
          <h3 className="font-bold text-xl sm:text-2xl text-gray-800">
          Invite Request
          </h3>
          {/* Close Modal Button */}
          <button
            className="inline-flex text-xs sm:text-sm bg-[#01663E] px-2 sm:px-3 py-2  items-center rounded-lg font-medium  border focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-[#8A2623] text-white hover:text-white"
            onClick={onClose}
          >
            <X size={18} className="text-white" />
            Close
          </button>
        </div>

        {/* Modal Subheading */}
        <p className=" font-medium text-gray-500 text-sm sm:text-base">
          You've been invited
        </p>

        {/* Elements of modal */}
        <div>
          {/* View Event Cover */}
          <div
  className="overflow-hidden mx-auto rounded-lg mb-6 mt-6 cursor-pointer relative"
  onClick={openImageModal}
  style={{ position: "relative" }}
>
  <img
    src={poster}
    alt="yolo"
    className="w-full h-44 max-h-60 object-cover"
  />
  {/* Add the overlay element after the image */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
    }}
  ></div>
  
  {/* Add the text element with a higher z-index */}
  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-opacity-90 cursor-pointer" style={{ zIndex: 1 }}>
    <span className="text-sm">Click to view full poster</span>
  </div>
</div>

          {/* //---- endof ----// */}

          {/* Creator Info */}
          <div className="flex items-center justify-left mb-2">
            <UserSquare size={20} color="gray" />
            <p className="ml-2 text-xs font-bold">Creator</p>
            <span className="ml-2 text-xs  text-black font-bold px-8 py-1 rounded-full">
              {creator}
            </span>
          </div>
          {/* //---- endof ----// */}

          {/* Status Info */}
          <div className="flex items-center justify-left mb-2">
            <CircleDashed size={20} color="gray" />
            <p className="ml-2 text-xs  mr-8 font-bold">Status</p>
            <span className="ml-2 text-xs  bg-[#FFF0D1] text-black font-bold px-8 py-1 rounded-full">
              {status}
            </span>
          </div>
          {/* //---- endof ----// */}

          {/* TimeLine Info */}
          <div className="flex items-center justify-left mb-2">
            <CalendarDays size={20} color="gray" />
            <p className="ml-2 text-xs font-bold">Timeline</p>
            <span className="ml-2 text-xs text-black font-bold px-8 py-1 rounded-full">
              {timeline}
            </span>
          </div>
          {/* //---- endof ----// */}

          {/* Venue Info */}
          <div className="flex items-center justify-left mb-2">
            <MapPin size={20} color="gray" />
            <p className="ml-2 text-xs font-bold">Venue</p>
            <span className="ml-2 text-xs text-black font-bold px-8 py-1 rounded-full">
              {venue}
            </span>
          </div>
          {/* //---- endof ----// */}

          {/* Capacity Info */}
          <div className="flex items-center justify-left mb-2">
            <Users size={20} color="gray" />
            <p className="ml-2 text-xs font-bold">Potential capacity</p>
            <span className="ml-2 text-xs text-black font-bold px-8 py-1 rounded-full">
              {capacity}
            </span>
          </div>
          {/* //---- endof ----// */}

          {/* Event Code Info */}
          <div className="flex items-center justify-left mb-2">
            <Binary size={20} color="gray" />
            <p className="ml-2 text-xs font-bold">Event Code</p>
            <span className="ml-2 text-xs text-black font-bold px-8 py-1 rounded-full">
              {code}
            </span>
          </div>
          {/* //---- endof ----// */}
        </div>
        {/* ///---- endof Elements of modal ----/// */}

        <hr className="h-0.5 border-t-0 bg-[#9B9D9C] opacity-40" />
        <p className="text-xs font-bold mt-6 mb-6 flex justify-center items-center">
          {" "}
          Please choose an option below:
        </p>

        {/* Option Buttons */}
        <div className="flex flex-col justify-center space-y-4">
          <button className="px-6 py-2 text-[#03663F] font-bold bg-white border-[#DADADA] border-2 rounded-full hover:bg-[#03663F] hover:text-white">
            Accept Invite
          </button>
          <button className="px-6 py-2 text-[#8A2623] font-bold bg-white border-[#DADADA] border-2 rounded-full hover:bg-[#8A2623] hover:text-white">
            Decline Invite
          </button>
        </div>
        {/* //---- endof ----// */}
      </div>

      {/* Modal for Full Image */}
      {isImageModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-40"></div>
          <div className="relative bg-white rounded-lg">
            <img
              src={poster}
              alt="Full Image"
              className="w-full h-auto max-h-[30rem]"
              onClick={closeImageModal}
            />
            <button
              className="absolute top-2 right-2 bg-[#01663E] text-white rounded-full p-2 cursor-pointer"
              onClick={closeImageModal}
            >
              <X size={18} />
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default InvitationDetailsModal;
