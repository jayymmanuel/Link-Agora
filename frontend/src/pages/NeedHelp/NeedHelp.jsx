import React from "react";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const NeedHelp = () => {
  return (
    <div>
      <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Contact us
            </h2>
            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div class="max-w-5xl mx-auto mt-12 sm:mt-16">
          <div class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
              <div class="overflow-hidden bg-white rounded-xl">
                <div class="flex flex-col items-center p-6">
                  <FiPhone className="w-10 h-10 text-gray-300" />

                  <p class="mt-6 text-lg font-medium text-gray-900">
                  +27 (21) 427-9103
                  </p>
 
                </div>
              </div>

              <div class="overflow-hidden bg-white rounded-xl">
                <div class="flex flex-col items-center p-6">
                  <FiMail className="w-10 h-10 text-gray-300" />

                  <p class="mt-6 text-lg font-medium text-gray-900">
                    bmfhelp@example.com
                  </p>

                </div>
              </div>

              <div class="overflow-hidden bg-white rounded-xl">
                <div class="flex flex-col items-center p-6">
                  <HiOutlineLocationMarker className="w-10 h-10 text-gray-300" />

                  <p class="mt-6 text-lg font-medium text-gray-900">
                  33 Martin Hammerschlag Way, Foreshore, Cape Town, 8001
                  </p>

                </div>
              </div>
            </div>

            <div class="mt-6 overflow-hidden bg-white rounded-xl">
              <div class="px-6 py-12 sm:p-12">
                <h3 class="text-3xl font-semibold text-center text-gray-900">
                  Send us a message
                </h3>

                <form action="#" method="POST" class="mt-14">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Your name{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Email address{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="email"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Phone number{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="tel"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Company name{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                        />
                      </div>
                    </div>

                    <div class="sm:col-span-2">
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Message{" "}
                      </label>
                      <div class="mt-2.5 relative">
                        <textarea
                          name=""
                          id=""
                          placeholder=""
                          class="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                   
          <div className="py-4 flex items-center">
            <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
              <input
                type="checkbox"
                tabIndex={0}
                aria-label="I agree with the terms of service"
                defaultChecked
                className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
              />
              <div className="check-icon hidden bg-blue-500 text-white rounded-sm">
                <svg
                  className="icon icon-tabler icon-tabler-check"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
            <p className="text-sm leading-none ml-2">
              I agree with the{" "}
              <span className="text-[#01663E]">terms of service</span>
            </p>
          </div>
      

                    <div class="sm:col-span-2">
                      <button
                        type="submit"
                        class="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-[#01663E] border border-transparent rounded-md focus:outline-none hover:bg-black focus:bg-blue-700"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeedHelp;
