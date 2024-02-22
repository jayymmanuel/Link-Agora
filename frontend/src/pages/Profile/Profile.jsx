import React from "react";
import { AiFillStar } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";

function Profile() {
  return (
    <div>
      <div className="w-full p-10">
        <div className="md:flex items-center border-b pb-6 ml-24 border-gray-700">
          <div className="flex items-center md:mt-0 mt-4">
            <div className="w-8 h-8 bg-[#01663E] rounded flex items-center justify-center">
              <AiFillStar className="w-5 h-5 text-white" />
            </div>
            <p className="text-base ml-3 font-medium leading-4 text-gray-800">
              Edit Profile Photo
            </p>
          </div>
        </div>

        <div class="col-span-full">
          <div class="mt-10 ml-24 flex items-center gap-x-3">
            <img
              className="h-14 w-14 rounded-full border-2 border-[#01663E]"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
              alt=""
            />
            <button
              type="button"
              class="rounded-md bg-[#01663E] px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-black"
            >
              Change
            </button>
          </div>
        </div>

        <div className="md:flex items-center border-b mt-16 pb-6 ml-24 border-gray-700">
          <div className="flex items-center md:mt-0 mt-4">
            <div className="w-8 h-8 bg-[#01663E] rounded flex items-center justify-center">
              <AiFillStar className="w-5 h-5 text-white" />
            </div>
            <p className="text-base ml-3 font-medium leading-4 text-gray-800">
              Edit Profile Information
            </p>
          </div>
        </div>
        <h1
          tabIndex={0}
          role="heading"
          aria-label="profile information"
          className="focus:outline-none text-3xl font-bold text-gray-800 mt-12 ml-24"
        >
          Profile info
        </h1>
        <p
          role="contentinfo"
          className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4 ml-24"
        >
          Fill in the data for profile. It will take a couple of minutes. <br />
          You only need a passport
        </p>
        <h2
          role="heading"
          aria-label="enter Personal data"
          className="text-xl font-semibold leading-7 text-gray-800 mt-10 ml-24"
        >
          Personal data
        </h2>
        <p className="text-sm font-light leading-none text-gray-600 mt-0.5 ml-24">
          Your details and place of birth
        </p>
        <div className="mt-8 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-gray-800 ml-24">
              First name
            </label>
            <input
              type="name"
              tabIndex={0}
              aria-label="Enter first name"
              className="w-64 bg-[#f4fcf4] text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 ml-24"
              defaultValue="Henry"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-gray-800 ml-24">
              Last name
            </label>
            <input
              type="name"
              tabIndex={0}
              aria-label="Enter last name"
              className="w-64 bg-[#f4fcf4] text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 ml-24"
              defaultValue="Smith"
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-gray-800 ml-24">
              Email Address
            </label>
            <input
              type="email"
              tabIndex={0}
              aria-label="Enter email Address"
              className="w-64 bg-[#f4fcf4] text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 ml-24"
              defaultValue="smith.henry@gmail.com"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-gray-800 ml-24">
              Phone number
            </label>
            <input
              type="number"
              tabIndex={0}
              aria-label="Enter phone number"
              className="w-64 bg-[#f4fcf4] text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 ml-24"
              defaultValue="+81 839274"
            />
          </div>
        </div>
        <div className="mt-12 md:flex items-center">
          <div className="flex flex-col">
            <label className="mb-3 text-sm leading-none text-gray-800 ml-24">
              Date of birth
            </label>
            <input
              type
              tabIndex={0}
              aria-label="Enter date of birth"
              className="w-64 bg-[#f4fcf4] text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 ml-24"
              defaultValue="28.03.1997"
            />
          </div>
          <div className="flex flex-col md:ml-12 md:mt-0 mt-8">
            <label className="mb-3 text-sm leading-none text-gray-800 ml-24">
              Place of birth
            </label>
            <input
              type="name"
              tabIndex={0}
              aria-label="Enter place of birth"
              className="w-64 bg-[#f4fcf4] text-sm font-medium leading-none text-gray-800 p-3 border rounded border-gray-200 ml-24"
              defaultValue="San Diego, CA, USA"
            />
          </div>
        </div>

        <button
          role="button"
          aria-label="Next step"
          className="flex items-center justify-center py-4 px-7 focus:outline-none bg-[#01663E] rounded border-gray-400 mt-7 md:mt-14 hover:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 ml-24"
        >
          <span className="text-sm font-medium text-center text-white capitalize">
            Update details
          </span>
          <HiArrowNarrowRight className="w-5 h-5 ml-4 text-white" />
        </button>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n          .checkbox:checked + .check-icon {\n              display: flex;\n          }\n      ",
        }}
      />
    </div>
  );
}

export default Profile;
