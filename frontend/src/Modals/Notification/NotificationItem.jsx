import React from 'react'


const NotificationItem = ({ icon, title,  time, message }) => {
  return (
    <div className="mt-2 px-6 py-4 bg-white rounded-lg shadow w-full">
    <div className="inline-flex items-center justify-between w-full">
      <div className="inline-flex items-center">
        {/* Notification Type Icon */}
      {/* <TbCalendarQuestion
            size={26}
            className="text-gray-600 cursor-pointer rounded-md hover:bg-[#007f66]"
          /> */}
          {icon}
        {/* Notification Title */}
        <h3 className="font-bold text-base text-gray-800 ml-2">{title}</h3>
      </div>
      {/* Time sent out */}
      <p className="text-xs text-gray-500">
      {time}
      </p>
    </div>
    {/* Notification Message */}
    <p className="mt-1 text-sm text-[#01663E]">
    {message}
    </p>
  </div>
  )
}

export default NotificationItem