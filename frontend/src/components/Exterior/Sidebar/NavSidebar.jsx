import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import useWindowSize from "../../useWindowSize";
import { HiMenuAlt3 } from "react-icons/hi";
import { LayoutDashboard, CalendarDays, Settings, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../assets/link-agora-logo.png";
import "./NavSidebar.css"; // Import your CSS file

const NavSidebar = () => {
  const windowSize = useWindowSize();
  const location = useLocation(); // Get the current location

  const menus = [
    { name: "Dashboard", link: "/", icon: LayoutDashboard },
    { name: "Schedule", link: "/schedule", icon: CalendarDays },
    { name: "Setting", link: "/settings", icon: Settings },
  ];

  const [open, setOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0); // Track the selected menu index

  useEffect(() => {
    // Update the 'open' state when window size changes
    if (windowSize.width < 1200) {
      setOpen(false);
    }
  }, [windowSize.width]);


  return (
    <div
      className={`bg-[#0e0e0e] ${
        open ? "w-80 h-screen" : "w-16 h-screen"
      } duration-500 text-gray-100 px-4`}
      style={{ position: "sticky", top: 0, zIndex: 50 }}
    >
      {/* Logo */}
      <div className="flex justify-center items-center mt-4">
        <div className={`transition-all ${open ? "w-40 h-28" : "w-0"}`}>
          <img src={logo} className="h-full" alt="Logo" />
        </div>
      </div>

      {/* Menu Icon at Top Right */}
      <div className="absolute top-0 right-0 mt-4 mr-4">
        {windowSize.width && windowSize.width >= 1200 && (
          open ? (
            // Menu Icon when closed
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          ) : (
            // Menu icon when opened
            <Menu
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )
        )}
      </div>

      {/* White line separator above the menu items */}
      <div
        className={`h-0.5 w-full bg-white mt-6 ${open ? "block" : "hidden"}`}
      />

      {/* Sidebar Menu Items */}
      <div className="mt-16 flex flex-col gap-8 relative">
        {menus?.map((menu, i) => (
          <Link
            to={menu?.link}
            key={i}
            onClick={() => setOpen(false)} // Close the sidebar on menu item click
            className={`group flex items-center text-sm -mr-[0.25rem] gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md ${
              (location.pathname === '/' ||
              location.pathname === '/upcomingevents' ||
              location.pathname === '/activitylog' ||
               location.pathname === '/viewmyinvitations' ||
               location.pathname === '/viewmyevents') &&
              menu.link === '/'
                ? "bg-[#01663E]"
                : location.pathname === menu.link
                ? "bg-[#01663E]"
                : ""
            } ${menu?.margin && i !== 0 ? "mt-0" : ""}`}
          >
            <div>{React.createElement(menu?.icon, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `${i + 3}00ms`,
              }}
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu?.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-[#0e0e0e] font-semibold whitespace-pre text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {menu?.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavSidebar;
