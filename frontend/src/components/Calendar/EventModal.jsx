import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { X } from "lucide-react";
import { Upload } from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import MyTimePicker from "./MyTimePicker";
import DropdownButton from "../Button/DropdownButton";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  // Functions to Control Modal States
  const [showPrimaryModal, setShowPrimaryModal] = useState(true); // State for primary modal
  const [showSecondaryModal, setShowSecondaryModal] = useState(false); // State for secondary modal
  const [showThirdModal, setShowThirdModal] = useState(false); // State for third modal

  function handleNext1Click() {
    setShowPrimaryModal(false); // Close the primary modal
    setShowSecondaryModal(true); // Open the second modal
  }

  function handleNext2Click() {
    setShowSecondaryModal(false); // Close the secondary modal
    setShowThirdModal(true); // Open the third modal
  }

  function handlePrevious1Click() {
    setShowPrimaryModal(true); // Reopen the primary modal
    setShowSecondaryModal(false); // Close the current modal
  }

  function handlePrevious2Click() {
    setShowSecondaryModal(true); // Reopen the secondary modal
    setShowThirdModal(false); // Close the current modal
  }

  function handleSubmit(e) {
    // To be removed/altered so imput goes to request, have fun vuyo
    e.preventDefault();
    const calendarEvent = {
      title,
      time,
      description,
      eventType,
      venue,
      address1,
      address2,
      capacity,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false); // Close the current modal
  }

  return (
    <div className="fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center">
      {/* Overlay */}
      <div
        className="fixed left-0 top-0 w-full h-full bg-black opacity-40 z-10"
        onClick={() => setShowEventModal(false)} // Close modal on overlay click
      ></div>

      {/* First Modal */}
      {showPrimaryModal && (
        // 1st Modal Form
        <form className="bg-white rounded-lg shadow-2xl w-2/5 z-20">
          <header className="bg-[gray-100] rounded-md px-4 py-2 flex justify-between items-center">
            <div>
              {selectedEvent && (
                <span
                  onClick={() => {
                    dispatchCalEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    setShowEventModal(false);
                  }}
                  className="material-icons-outlined text-gray-400 cursor-pointer"
                >
                  delete
                </span>
              )}
            </div>
            <button onClick={() => setShowEventModal(false)}>
              <X
                size={28}
                className="text-gray-600 mx-2 cursor-pointer rounded-md hover:border-[#007f66]"
              />
            </button>
          </header>
          <div className="flex items-center justify-center">
            <p className="font-medium text-teal-500 bg-green-50 rounded-full text-center text-xl w-72 h-8">
              {daySelected.format("dddd, MMMM DD")}
            </p>
          </div>
          {/* Elements of 1st Modal */}
          {/* Content */}
          <div className="p-5">
            {/* #region Title Text-field */}
            <div className="flex items-center">
              <label
                htmlFor="title"
                className="text-base font-medium text-teal-600 mr-4"
              >
                Title
              </label>
              <div className="px-4">
                <input
                  type="name"
                  aria-label="Enter event title"
                  className="w-[14rem] text-sm font-medium h-14 leading-none text-gray-800 p-3 border border-teal-600 rounded-md"
                />
              </div>
            </div>
            {/* #endregion */}

            {/* #region Pick Time Object */}
            <div className="flex items-center mt-6">
              <label
                htmlFor="title"
                className="text-base font-medium text-teal-600 mr-6"
              >
                Time
              </label>
              <MyTimePicker />
            </div>
            {/* #endregion */}

            {/* #region Venue Text-field */}
            <div className="flex items-center mt-8">
              <label
                className="text-base font-medium text-teal-600"
                style={{ whiteSpace: "nowrap" }}
              >
                Venue
              </label>
              <input
                type="name"
                aria-label="Enter event venue"
                className="w-full text-sm font-medium h-14 leading-none text-gray-800 p-3 rounded-md border border-teal-600 ml-6"
              />
            </div>
            {/* #endregion */}

            {/* #region Description Text-field */}
            <div className="sm:col-span-2 mt-[2.7rem]">
              <label
                htmlFor="description"
                className="text-base font-medium text-teal-600"
              >
                Description
              </label>
              <div className="mt-2.5 relative">
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  placeholder=""
                  required
                  className="block w-full px-4 py-4 text-sm text-black placeholder-gray-500 transition-all duration-200 bg-white border border-teal-600 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                  rows="4"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            {/* #endregion */}
          </div>
          {/* Footer */}
          <footer className="flex justify-end border-t p-3 mt-5">
            <button
              type="submit"
              onClick={handleNext1Click}
              className="bg-[#01663E] hover:bg-black px-6 py-2 rounded text-white w-full ml-12 mr-12 mt-4 mb-4"
            >
              Next
            </button>
          </footer>
          {/* #endregion */}
        </form>
      )}

      {/* Second Modal */}
      {showSecondaryModal && (
        // 2nd Modal Form
        <form className="bg-white rounded-lg shadow-2xl w-2/5 z-20">
          <header className="bg-[gray-100] rounded-md px-4 py-2 flex justify-between items-center">
            <div>
              {selectedEvent && (
                <span
                  onClick={() => {
                    dispatchCalEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    setShowEventModal(false);
                  }}
                  className="material-icons-outlined text-gray-400 cursor-pointer"
                >
                  delete
                </span>
              )}
            </div>
            <button onClick={() => setShowEventModal(false)}>
              <X
                size={28}
                className="text-gray-600 mx-2 cursor-pointer rounded-md hover:border-[#007f66]"
              />
            </button>
          </header>
          <div className="flex items-center justify-center">
            <p className="font-medium text-teal-500 bg-green-50 rounded-full text-center text-xl w-72 h-8">
              {daySelected.format("dddd, MMMM DD")}
            </p>
          </div>
          {/* Elements of 2nd Modal */}
          {/* Content */}
          <div className="p-5">
            {/* #region Address 1 Text-field */}
            <div className="flex items-center mt-8">
              <label
                className="text-base font-medium text-teal-600"
                style={{ whiteSpace: "nowrap" }}
              >
                Address 1
              </label>
              <input
                type="name"
                aria-label="Enter event address 1"
                className="w-full text-sm font-medium h-14 leading-none text-gray-800 p-3 border-[1px] rounded-md border-teal-600 ml-6"
              />
            </div>
            {/* #endregion */}

            {/* #region Address 2 Text-field */}
            <div className="flex items-center mt-8">
              <label
                className="text-base font-medium text-teal-600"
                style={{ whiteSpace: "nowrap" }}
              >
                Address 2
              </label>
              <input
                type="name"
                aria-label="Enter event address 2"
                className="w-full text-sm font-medium h-14 leading-none text-gray-800 p-3 border-[1px] rounded-md border-teal-600 ml-6"
              />
            </div>
            {/* #endregion */}

            {/* #region City Text-field */}
            <div className="flex items-center mt-8">
              <label
                className="text-base font-medium text-teal-600"
                style={{ whiteSpace: "nowrap" }}
              >
                City
              </label>
              <input
                type="name"
                aria-label="Enter event city"
                className="w-full text-sm font-medium h-14 leading-none text-gray-800 p-3 border-[1px] rounded-md border-teal-600 ml-6"
              />
            </div>
            {/* #endregion */}

            {/* #region Postal Code Number-field */}
            <div className="flex items-center mt-8">
              <label
                className="text-base font-medium text-teal-600"
                style={{ whiteSpace: "nowrap" }}
              >
                Postal Code
              </label>
              <input
                type="number"
                aria-label="Enter event city"
                className="w-full text-sm font-medium h-14 leading-none text-gray-800 p-3 border-[1px] rounded-md border-teal-600 ml-6"
              />
            </div>
            {/* #endregion */}

            {/* #region Provinces Select Dropdown-field */}
            <div className="flex items-center mt-8">
              <label
                className="text-base font-medium text-teal-600 mr-2"
                style={{ whiteSpace: "nowrap" }}
              >
                Province
              </label>
              <div className="ml-6 w-full">
                <DropdownButton />
              </div>
            </div>
            {/* #endregion */}
          </div>
          {/* #endregion */}

          {/* Footer */}
          <footer className="flex justify-end border-t p-3 mt-5">
            <button
              type="button"
              onClick={handlePrevious1Click} // Previous
              className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded text-gray-600 w-full ml-12 mt-4 mb-4"
            >
              Previous
            </button>
            <button
              type="submit"
              onClick={handleNext2Click} // Next
              className="bg-[#01663E] hover:bg-black px-6 py-2 rounded text-white w-full ml-12 mr-12 mt-4 mb-4"
            >
              Next
            </button>
          </footer>
          {/* #endregion */}
        </form>
      )}

      {/* Third Modal */}
      {showThirdModal && (
        // 3rd Modal Form
        <form className="bg-white rounded-lg shadow-2xl w-2/5 z-20">
          <header className="bg-[gray-100] rounded-md px-4 py-2 flex justify-between items-center">
            <div>
              {selectedEvent && (
                <span
                  onClick={() => {
                    dispatchCalEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    setShowEventModal(false);
                  }}
                  className="material-icons-outlined text-gray-400 cursor-pointer"
                >
                  delete
                </span>
              )}
            </div>
            <button onClick={() => setShowEventModal(false)}>
              <X
                size={28}
                className="text-gray-600 mx-2 cursor-pointer rounded-md hover:border-[#007f66]"
              />
            </button>
          </header>
          <div className="flex items-center justify-center">
            <p className="font-medium text-teal-500 bg-green-50 rounded-full text-center text-xl w-72 h-8">
              {daySelected.format("dddd, MMMM DD")}
            </p>
          </div>
          {/* Elements of 3rd Modal */}
          {/* Content */}
          <div className="p-5">
            {/* #region Potential Capacity Text-field */}
            <div className="flex items-center mt-8">
              <label
                className="text-base font-medium text-teal-600"
                style={{ whiteSpace: "nowrap" }}
              >
                Potential capacity
              </label>
              <input
                type="number"
                aria-label="Enter event city"
                className="w-full text-sm font-medium h-14 leading-none text-gray-800 p-3 border-[1px] rounded-md border-teal-600 ml-6"
              />
            </div>
            {/* #endregion */}

            {/* #region Upload invite list file */}
            <div class="col-span-2 items-center justify-center w-full mt-5">
              <label
                htmlFor="description"
                className="text-base font-medium text-teal-600"
              >
                Invite List
              </label>

              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-52 mt-2 mb-[3rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload size={24} color="#6B7280" />
                  <p class="mb-2 mt-4 text-sm text-gray-500">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>

            {/* #endregion */}

            {/* #region Select type of event */}
            <div className="flex items-center mt-5">
              <ul className="items-center w-full text-sm font-medium text-teal-600 bg-white border border-teal-600 rounded-lg sm:flex">
                <li className="w-full border-b border-teal-600 sm:border-b-0 sm:border-r">
                  <div className="flex items-center pl-3 mr-4">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      className="w-4 h-4 text-[#01663E] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-500"
                    >
                      Provincial
                    </label>
                  </div>
                </li>

                <li className="w-full border-b border-teal-600 sm:border-b-0 sm:border-r">
                  <div className="flex items-center pl-3 mr-4">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      className="w-4 h-4 text-[#01663E] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-500"
                    >
                      International
                    </label>
                  </div>
                </li>

                <li className="w-full">
                  <div className="flex items-center pl-3 mr-4">
                    <input
                      id="horizontal-list-radio-international"
                      type="radio"
                      value=""
                      name="list-radio"
                      className="w-4 h-4 text-[#01663E] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="horizontal-list-radio-international"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-500"
                    >
                      Other
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            {/* #endregion */}

            {/* Event label - Not to be used*/}
            {/* <div className="flex items-center mt-5 border border-gray-200 rounded-lg p-3">
              <p className="text-sm font-medium text-gray-500 mr-20">
                Select event label colour
              </p>
              <div className="flex gap-x-4">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`bg-${lblClass}-500 w-8 h-8 rounded-md flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <AiFillStar
                        size={48}
                        className="text-white mx-2 cursor-pointer rounded-md"
                      />
                    )}
                  </span>
                ))}
              </div>
            </div> */}
            {/* #endregion */}
          </div>
          {/* #endregion */}

          {/* Footer */}
          <footer className="flex justify-end border-t p-3 mt-5">
            <button
              type="button"
              onClick={handlePrevious2Click} // Previous Button function
              className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded text-gray-600 w-full ml-12 mt-4 mb-4"
            >
              Previous
            </button>
            <button
              type="submit"
              onClick={handleSubmit} // Submit Request Button function -- to be altered
              className="bg-[#01663E] hover:bg-black px-6 py-2 rounded text-white w-full ml-12 mr-12 mt-4 mb-4"
            >
              Request
            </button>
          </footer>
          {/* #endregion */}
        </form>
      )}
    </div>
  );
}
