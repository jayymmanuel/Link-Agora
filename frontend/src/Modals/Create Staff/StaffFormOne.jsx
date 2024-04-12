// Importing the React library, which is required for creating and working with React components.
import React from "react";

// Importing the useState hook from the React library.
// - The useState hook allows functional components to manage state.
import { useState } from "react";



// Importing React Icon(s)
import { PiIdentificationBadge } from "react-icons/pi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";


const StaffFormOne = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [expYears, setExpYears] = useState("");


  const handleFirstNameChange = (event) => {
    setFirstName((event.target.value));
  };

  const handleSurnameChange = (event) => {
    setSurname((event.target.value));
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber((event.target.value));
  };

  const handleEmailChange = (event) => {
    setEmail((event.target.value));
  };

  const handleDobChange = (event) => {
    setDob((event.target.value));
  };

  const handleExpYearsChange = (event) => {
    setExpYears((event.target.value));
  };

  const jsxStaffFormOne = (
    <div>
      <div className="mt-10">


        {/* Staff First Name */}
        <div class="flex items-center mb-4">
          <div className="w-[16rem]">
            <label
              for="website-admin"
              class="text-sm font-medium text-white mr-2"
            >
              First Name
            </label>
          </div>

          <div class="flex w-full">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
              <PiIdentificationBadge size={20} color="gray" />
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
              placeholder="Enter first name"

            />
          </div>
        </div>
        {/* //---- endof ----// */}

        {/* Staff Surname */}
        <div class="flex items-center mb-4">
          <div className="w-[16rem]">
            <label
              for="website-admin"
              class="text-sm font-medium text-white mr-2"
            >
              Last Name
            </label>
          </div>

          <div class="flex w-full">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
              <PiIdentificationBadge size={20} color="gray" />
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
              placeholder="Enter surname"

            />
          </div>
        </div>
        {/* //---- endof ----// */}

        {/* Staff Phone Number */}
        <div class="flex items-center mb-4">
          <div className="w-[16rem]">
            <label
              for="website-admin"
              class="text-sm font-medium text-white mr-2"
            >
              Phone Number
            </label>
          </div>

          <div class="flex w-full">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
              <FiPhone size={20} color="gray" />
            </span>
            <input
              type="number"
              id="website-admin"
              class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
              placeholder="000 000 0000"

            />
          </div>
        </div>
        {/* //---- endof ----// */}

        {/* Staff Email */}
        <div class="flex items-center mb-4">
          <div className="w-[16rem]">
            <label
              for="website-admin"
              class="text-sm font-medium text-white mr-2"
            >
              Email Address
            </label>
          </div>

          <div class="flex w-full">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
              <MdOutlineAlternateEmail size={20} color="gray" />
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
              placeholder="Enter email address"

            />
          </div>
        </div>
        {/* //---- endof ----// */}

        {/* Staff dob */}
        <div class="flex items-center mb-4">
          <div className="w-[16rem]">
            <label
              for="website-admin"
              class="text-sm font-medium text-white mr-2"
            >
              Date of Birth
            </label>
          </div>

          <div class="flex w-full">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
              <MdDateRange size={20} color="gray" />
            </span>
            <input
              type="text"
              id="website-admin"
              class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
              placeholder="dd/mm/yyyy"

            />
          </div>
        </div>
        {/* //---- endof ----// */}

        {/* Staff exp years */}
        <div class="flex items-center mb-4">
          <div className="w-[16rem]">
            <label
              for="website-admin"
              class="text-sm font-medium text-white mr-2"
            >
              Years of Experience
            </label>
          </div>

          <div class="flex w-full">
            <span class="inline-flex items-center px-3 text-sm text-gray-900 border border-r-0 border-zinc-600 rounded-l-md">
              <FaBusinessTime size={20} color="gray" />
            </span>
            <input
              type="number"
              id="website-admin"
              class="rounded-none rounded-r-lg border border-zinc-600 text-white bg-zinc-700 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full h-[3.7rem] text-sm p-2.5"
              placeholder="Enter years of experience"

            />
          </div>
        </div>
        {/* //---- endof ----// */}
      </div>
    </div>
  );

  return {
    firstName,
    surname,
    phoneNumber,
    email,
    dob,
    expYears,
    jsxStaffFormOne,
  };
};

export default StaffFormOne;
