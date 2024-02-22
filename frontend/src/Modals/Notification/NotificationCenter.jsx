import React from "react";
import NotificationItem from "./NotificationItem";
import { CalendarClock } from 'lucide-react';
import { CalendarCheck2 } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { X } from 'lucide-react';
import { XCircle } from 'lucide-react';

const NotificationCenter = ({ onClose }) => {
  return (
    <div className="fixed top-15 left-0 w-full h-5/6 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="relative lg:w-2/5 sm:w-3/5 w-11/12 bg-gray-100 rounded-xl mx-auto border p-10 shadow-sm">
        <div className="inline-flex items-center justify-between w-full">
          <h3 className="font-bold text-xl sm:text-2xl text-gray-800">
            Notifications
          </h3>
          <button
            className="inline-flex text-xs sm:text-sm bg-[#01663E] px-2 sm:px-3 py-2  items-center rounded-lg font-medium  border focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-[#8A2623] text-white hover:text-white"
            onClick={onClose}
          >
            <X size={18} className="mr-2" />
            Close
          </button>
        </div>

        <div className="overflow-y-auto max-h-[500px]"> {/* Added max height and overflow for scrolling */}
          <p className="mt-8 font-medium text-gray-500 text-sm sm:text-base">
            Today
          </p>
          <NotificationItem
            icon={<CalendarClock size={24} className="text-gray-600" />}
            title="Requested Event"
            time="2 min ago"
            message="Jasmine Ming • Requested an event booked for 28/09/2023"
          />

          <NotificationItem
            icon={<CalendarCheck2 size={24} className="text-gray-600" />}
            title="Event Approved"
            time="47 min ago"
            message="Nathan Ake • Approved an event booked for 28/09/2023"
          />

          <NotificationItem
            icon={<AlertTriangle size={24} className="text-gray-600" />}
            title="Event Flagged"
            time="12:09"
            message="John Stone • Flagged an event to be reviewed"
          />

          {/* You can add more notification items here */}
          <p className="mt-8 font-medium text-gray-500 text-sm sm:text-base">
            Yesterday
          </p>

          <NotificationItem
            icon={<CalendarCheck2 size={24} className="text-gray-600" />}
            title="Event Approved"
            time="1 day ago"
            message="Raheem Sterling • Approved an event booked for 28/09/2023"
          />

          <NotificationItem
            icon={<AlertTriangle size={24} className="text-gray-600" />}
            title="Event Flagged"
            time="1 day ago"
            message="Joachim Anderson • Flagged an event to be reviewed"
          />

          {/* End of Notifications Section */}
        </div>

        <div class="flex items-center mt-8">
          <hr class="h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50 flex-grow" />
          <p class="mr-4 ml-4 text-gray-400 font-light">You're all caught up</p>
          <hr class="h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50 flex-grow" />
        </div>

        <button
          className="inline-flex text-sm bg-white justify-center px-4 py-2 mt-8 w-full text-red-500 items-center rounded font-medium shadow border focus:outline-none transform active:scale-75 transition-transform duration-700 hover:bg-red-500 hover:text-white hover:-translate-y-1 hover:scale-110 dark:hover:bg-white dark:text-gray-800 dark:hover:text-gray-800"
          onClick={onClose}
        >
          <XCircle size={16} className="mr-5"/>
          Clear all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationCenter;
