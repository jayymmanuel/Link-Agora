// Importing the React library, which is required for creating and working with React components.
import React, { useContext, useState } from "react";

import GlobalContext from "../../context/GlobalContext";

// Importing Icons
import { X } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { MdOutlinePedalBike } from "react-icons/md";

// Import the Staff Form
import StaffFormOne from "./StaffFormOne";
import StaffFormTwo from "./StaffFormTwo";

const CreateStaffModal = () => {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [step, setStep] = useState(1);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false); // State for the update modal
  const {
    firstName,
    surname,
    phoneNumber,
    email,
    dob,
    expYears,
    jsxStaffFormOne,
  } = StaffFormOne();
  const {
    address1,
    address2,
    city,
    province,
    postalCode,
    country,
    jsxStaffFormTwo,
  } = StaffFormTwo();


  const openUpdateModal = () => {
    setUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          // Step 1 Content
          jsxStaffFormOne
        );
      case 2:
        return (
          // Step 2 Content
          jsxStaffFormTwo
        );
      default:
        return null;
    }
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);   
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
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
      <div className="relative sm:w-[70%] md:w-3/4 lg:w-[50%] bg-zinc-800 rounded-xl mx-auto border border-zinc-500 p-10 shadow-sm">
        <div className="inline-flex items-center justify-between w-full">
          {/* Modal Heading */}
          <div className="flex items-center justify-center">
            <p className="font-medium text-diamond-blue text-center text-xl">
              {daySelected.format("dddd, MMMM DD")}
            </p>
          </div>
          {/* Close Modal Button */}
          <button
            className="inline-flex text-xs sm:text-sm bg-light-blue border border-white px-2 py-2  items-center rounded-lg font-medium focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-navy-blue text-white hover:text-white"
            onClick={() => setShowEventModal(false)}
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* Modal Subheading */}
        <p className=" font-medium text-diamond-blue text-sm sm:text-base mt-2">
          Fill in details
        </p>

        {/* Rendering the content based on the step. */}
        {renderStepContent()}

        <hr className="h-0.5 border-t-0 bg-[#9B9D9C] opacity-40 mt-10" />
        <p className="text-xs text-gray-500 font-bold mt-6 mb-6 flex justify-center items-center">
          {" "}
          Press button to confirm entry
        </p>

        <div className="flex flex-col justify-center space-y-4">
          {step > 1 && (
            <button
              className="flex items-center justify-center px-6 py-2 text-navy-purple font-bold bg-white border-[#DADADA] border-2 rounded-lg hover:bg-navy-purple hover:text-white"
              type="button"
              onClick={prevStep}
            >
              Back
            </button>
          )}
          {step < 2 && (
            <button
              className="flex items-center justify-center px-6 py-2 text-navy-purple font-bold bg-white border-[#DADADA] border-2 rounded-lg hover:bg-navy-purple hover:text-white"
              type="button"
              onClick={nextStep}
            >
              Next
            </button>
          )}
          {step === 2 && (
            <button
              className="flex items-center justify-center px-6 py-2 text-navy-purple font-bold bg-white border-[#DADADA] border-2 rounded-lg hover:bg-navy-purple hover:text-white"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Register Staff
              {isHovered ? (
                <CheckCircle size={21} className="ml-2" />
              ) : (
                <MdOutlinePedalBike size={23} className="ml-2" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default CreateStaffModal;
