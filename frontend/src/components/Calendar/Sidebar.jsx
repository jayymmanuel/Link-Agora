import React from "react";
import Labels from "./Labels";
import SmallCalendar from "./SmallCalendar";

export default function Sidebar() {
  return (
    <aside className="border border-[#d7d9dd] p-5 w-64 mr-4 mt-3 rounded-lg bg-[#ffffff]">
      <SmallCalendar />
      <Labels />
    </aside>
  );
}