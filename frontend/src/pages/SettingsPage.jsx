import React, { useState } from "react"; // Import useState from React

import { RiNotification3Fill } from "react-icons/ri";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsAwardFill } from "react-icons/bs";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

function SettingsPage() {
  return (
    <div>
      <div className="w-full p-10">
        <div className="md:flex items-center border-b pb-6 ml-24 border-gray-700">
          <div className="flex items-center md:mt-0 mt-4">
            <div className="w-8 h-8 bg-[#01663E] rounded flex items-center justify-center">
              <BsAwardFill className="w-5 h-5 text-white" />
            </div>
            <p className="text-base ml-3 font-medium leading-4 text-gray-800">
              General
            </p>
          </div>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="text-sm font-semibold leading-7 text-[#8A2623] ml-32 hover:text-[#01663E]"
          >
            Reset to default
          </a>
        </div>

        <div class="flex ml-24 mt-4">
          <div class="flex items-center h-5">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
          <div class="ml-2 text-sm">
            <label for="helper-checkbox" class="font-medium text-gray-900">
              Event Sharing
            </label>
            <p
              id="helper-checkbox-text"
              class="text-xs font-normal text-gray-500"
            >
              Allow others to share your events on social media
            </p>
          </div>
        </div>

        <div class="flex ml-24 mt-6">
          <div class="flex items-center h-5">
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
          </div>
          <div class="ml-2 text-sm">
            <label for="helper-checkbox" class="font-medium text-gray-900">
              Account Visibility
            </label>
            <p
              id="helper-checkbox-text"
              class="text-xs font-normal text-gray-500"
            >
              Allow others to find your account when creating invite lists.
            </p>
          </div>
        </div>

        <div className="md:flex items-center border-b mt-16 pb-6 ml-24 border-gray-700">
          <div className="flex items-center md:mt-0 mt-4">
            <div className="w-8 h-8 bg-[#01663E] rounded flex items-center justify-center">
              <RiNotification3Fill className="w-5 h-5 text-white" />
            </div>
            <p className="text-base ml-3 font-medium leading-4 text-gray-800">
              Notification Settings
            </p>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="text-sm font-semibold leading-7 text-[#8A2623] ml-32 hover:text-[#01663E]"
          >
            Reset to default
          </a>
        </div>

        <div className="flex ml-24 mt-4">
          <div class="ml-2 text-sm mr-10">
            <label for="toggle-1" class="font-medium text-gray-900">
              Push Notifications
            </label>
            <p
              id="helper-checkbox-text"
              class="text-xs font-normal text-gray-500"
            >
              Allow or disallow notifications that appear on your device's
              screen.
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex ml-24 mt-6">
          <div class="ml-2 text-sm mr-10">
            <label for="toggle-2" class="font-medium text-gray-900">
              Email Notifications
            </label>
            <p
              id="helper-checkbox-text"
              class="text-xs font-normal text-gray-500"
            >
              Allow or disallow notifications and announcements to be sent to
              your email address.
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex ml-24 mt-6">
          <div class="ml-2 text-sm mr-10">
            <label for="toggle-3" class="font-medium text-gray-900">
              Notification Sounds
            </label>
            <p
              id="helper-checkbox-text"
              class="text-xs font-normal text-gray-500"
            >
              Allow or disallow notifications sounds
            </p>
          </div>
          <Switch defaultChecked />
        </div>
        <div className="flex ml-24 mt-6">
          <div class="ml-2 text-sm mr-10">
            <label for="toggle-4" class="font-medium text-gray-900">
              Event Reminders
            </label>
            <p
              id="helper-checkbox-text"
              class="text-xs font-normal text-gray-500"
            >
              Receive event reminders
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex ml-24">
          <button
            role="button"
            aria-label="Next step"
            className="flex items-center w-full justify-center py-4 px-7 focus:outline-none bg-[#01663E] rounded border-gray-400 mt-4 md:mt-10 hover:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
          >
            <span className="text-sm font-medium text-center text-white capitalize">
              Update details
            </span>
            <HiArrowNarrowRight className="w-5 h-5 ml-4 text-white" />
          </button>
        </div>
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

export default SettingsPage;
