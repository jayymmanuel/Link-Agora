import React, { useState } from "react";

// Importing Icons
import { CalendarDays } from "lucide-react";
import { CircleDashed } from "lucide-react";
import { MapPin } from "lucide-react";
import { Users } from "lucide-react";
import { Binary } from "lucide-react";
import { UserSquare } from "lucide-react";
import { X } from "lucide-react";
import { IoMail } from 'react-icons/io5';
import { SiMinutemailer } from 'react-icons/si';
import { ScrollText } from "lucide-react";





import poster from "../../assets/event1poster.jpg";

const MyEventsDetailsModal = ({
  onClose,
  creator,
  status,
  timeline,
  venue,
  capacity,
  code,
}) => {
  const [isImageModalOpen, setImageModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false); // State for the update modal

  const openImageModal = () => {
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };

  const openUpdateModal = () => {
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
  };

    // Function to handle saving the updated fields
    const handleSave = () => {
      // Perform the save operation here (e.g., update data in a database)
      // You can access the updated values in creatorField, timelineField, venueField, etc.
      // Then, close the update modal
      closeUpdateModal();
    };


  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="relative lg:w-2/5 sm:w-3/5 w-11/12 bg-gray-100 rounded-xl mx-auto border p-10 shadow-sm">
        <div className="inline-flex items-center justify-between w-full">
          {/* Modal Heading */}
          <h3 className="font-bold text-xl sm:text-2xl text-gray-800">
            My Event
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
          Manage your event
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
        <button
        className="flex items-center justify-center px-6 py-2 text-[#03663F] font-bold bg-white border-[#DADADA] border-2 rounded-full hover:bg-[#03663F] hover:text-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Send Invitation
        {isHovered ? (
          <SiMinutemailer size={24} className="ml-2" />
        ) : (
          <IoMail size={23} className="ml-2" />
        )}
      </button>
  <button className="flex items-center justify-center px-6 py-2 text-[#03663F] font-bold bg-white border-[#DADADA] border-2 rounded-full hover:bg-[#03663F] hover:text-white"
  onClick={openUpdateModal}>
    Request Update
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

            {/* Update Details Modal */}
            {isUpdateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-40"></div>
          <div className="relative  w-[500px] bg-white rounded-lg p-4">
            <div className="flex items-center justify-center mb-4">
              <button
                className="px-6 py-2 text-[#8A2623] font-bold hover:underline"
                onClick={closeUpdateModal} // Cancel the update
              >
                Cancel
              </button>
            </div>
            <div className="flex items-center justify-center">
              <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-6">
                {/* Heading */}
                Request update of event details
              </h3>
            </div>

            <div class="flex items-center mb-4">
              <label
                for="website-admin"
                class="text-sm font-medium text-gray-900 mr-2"
              >
                Subject
              </label>
              <div class="flex w-full">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-gray-300 rounded-l-md">
                  <ScrollText size={20} color="gray" />
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="rounded-none rounded-r-lg border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
                  placeholder="Enter request subject"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-900"
              >
                Description
              </label>
              <div className="mt-2.5 relative">
                <textarea
                  id="description"
                  name="description"
                  placeholder=""
                  required
                  className="block w-full px-4 py-4 text-sm text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-300 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex justify-between w-full">
                <div className="flex flex-col w-full">
                  <button
                    className="px-6 py-2 w-full text-white font-bold bg-[#03663F] rounded-full mt-4 mb-4 hover:bg-black"
                    onClick={handleSave} // Save the changes button
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyEventsDetailsModal;
