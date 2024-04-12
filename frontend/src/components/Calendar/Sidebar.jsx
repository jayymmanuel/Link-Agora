import React from "react";
import Labels from "./Labels";
import SmallCalendar from "./SmallCalendar";

export default function Sidebar() {
  return (
    <aside className="bg-zinc-700 border border-zinc-600 p-5 w-72 mr-4 mt-3 rounded-lg">
      <SmallCalendar />
      <Labels />
    </aside>
  );
}