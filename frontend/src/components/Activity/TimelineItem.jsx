import React from "react";


export default function TimelineItem({ date, time, icon, user, message }) {
  return (
    <ul
    aria-label="Alternative changelog feed"
    role="feed"
    className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 lg:pl-0 lg:before:left-[8.5rem] lg:after:left-[8.5rem]"
  >

      <li
      role="article"
      className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
    >
      <div>
        <h4 className="hidden text-lg font-medium leading-7 text-slate-500 lg:block lg:w-28 lg:text-right">
          {date}
        </h4>
        <h4 className="hidden text-sm font-medium leading-7 text-slate-500 lg:block lg:w-28 lg:text-right">
          {time}
        </h4>
      </div>

      <div className="flex flex-col flex-1 gap-2">
        {/* Icon with green background */}
        <div className="bg-[#01663E] w-8 h-8 rounded-lg flex items-center justify-center">
          {icon}
        </div>

        <h3 className="text-md font-medium leading-7 text-[#01663E]">
          {user}
        </h3>
        <p className="text-sm text-slate-500">
          {message}
        </p>
      </div>
    </li>  </ul>

  );
}
