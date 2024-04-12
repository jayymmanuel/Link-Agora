// Importing the React library, which is required for creating and working with React components.
import React from "react";

// Importing the useState, useEffect, and useRef hooks from the React library.
// - The useState hook allows functional components to manage state.
// - The useEffect hook is used for performing side effects in functional components, such as data fetching or subscribing to external events.
// - The useRef hook is used to create a mutable ref objects
import { useState, useEffect, useRef } from "react";

// Importing Link and useLocation from the "react-router-dom" library.
// - The Link component is used for navigation within a React application, creating navigational links that update the URL without triggering a full page reload.
// - The useLocation hook is used to access information about the current URL location in the React Router context, enabling components to respond to changes in the URL.
import { Link, useLocation } from "react-router-dom";

// Importing Image Asset(s)
import logo from "../../../assets/logooption1.png";

// Importing React Icon(s)
import { FiShoppingBag } from "react-icons/fi";
import { TbBell } from "react-icons/tb";
import { TbBellRingingFilled } from "react-icons/tb";
import { PiUserRectangleFill } from "react-icons/pi";
import { HiOutlineMenu } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import Reveal from "../../Reveal/Reveal";



const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNestedOpen, setIsNestedOpen] = useState(false);
  const [showMenuItems, setShowMenuItems] = useState(false);
  const [isFavHovered, setIsFavHovered] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNested = () => {
    setIsNestedOpen(!isNestedOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setShowMenuItems(false);
  };

  const toggleMenuItems = () => {
    setShowMenuItems(!showMenuItems);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "border-b-2" : "";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const isUserSignedIn = true;

  return (
    <nav className="bg-navy-blue p-4 px-10 fixed w-full top-0 z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
          {/* Company Logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="Best Hubs Logo" className="w-12 h-auto" />
            </Link>
          </div>

          {/* Nav Menu Items */}
          <div className="hidden lg:flex items-center ml-[12rem] gap-4">
            <div className={`mt-4 pb-4 ${isActive("/")}`}>
              <Link
                className="flex items-center text-white font-medium focus:outline-none mx-2 text-sm md:text-sm lg:text-base xl:text-md"
                to="/"
              >
                Home
              </Link>
            </div>
            <div className={`mt-4 pb-4 ${isActive("/schedule")}`}>
              <Link
                className="flex items-center text-white font-medium focus:outline-none mx-2 text-sm md:text-sm lg:text-base xl:text-md"
                to="/schedule"
                style={{ whiteSpace: "nowrap" }}
              >
                Calendar
              </Link>
            </div>

            <div
              ref={dropdownRef}
              className={`relative inline-block text-left mt-4 pb-4 ${
                isActive("/upcomingevents") ||
                isActive("/event-details") ||
                isActive("/product-detail")
              }`}
            >
              <button
                className="flex items-center text-white font-medium focus:outline-none mx-2 text-sm md:text-sm lg:text-base xl:text-md"
                onClick={toggleDropdown}
              >
                Events
                {isDropdownOpen ? (
                  <MdKeyboardArrowUp className="ml-2" />
                ) : (
                  <MdKeyboardArrowDown className="ml-2" />
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute z-50 p-2 left-0 mt-6 w-[15rem] bg-white rounded-md shadow-2xl">
                  <div className="py-2">
                    <Link
                      to="/shop-flavour"
                      className="block px-4 py-2 text-gray-500 rounded-md hover:bg-gray-200 hover:text-navy-blue"
                      onClick={closeDropdown}
                    >
                      Upcoming Events
                    </Link>
                  </div>
                  <div className="py-2">
                    <Link
                      to="/shop-pipes"
                      className="block px-4 py-2 text-gray-500 rounded-md hover:bg-gray-200 hover:text-navy-blue"
                      onClick={closeDropdown}
                    >
                      Shisha Pipes
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
 
        {/* On Small Screen Button to toggle (small screen) Menu Items */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMenuItems}
        >
          {showMenuItems ? <CgClose size={25} /> : <HiOutlineMenu size={25} />}
        </button>

        {/* (small screen) Menu Items */}
        {showMenuItems && (
          <div className="lg:hidden absolute top-[4.5rem] left-0 w-full bg-navy-blue border-t text-white">
            <Reveal delay={0.6} duration={0.7}>
              <div className="container mx-auto py-2 w-full pr-6 pl-6">
                <a
                  href="my-bikes"
                  className="flex items-center py-2 pl-4 w-full pr-10 mb-4"
                >
                  <span className="ml-4 text-md font-medium">Home</span>
                </a>
                <a
                  href="#"
                  className="flex items-center py-2 pl-4 w-full pr-10 mb-4"
                >
                  <span className="ml-4 text-md font-medium">About Us</span>
                </a>

                <div className="relative mt-6 mb-4 mx-auto text-left px-4">
                  <button
                    onClick={toggleNested}
                    type="button"
                    className="py-3 inline-flex items-center gap-x-2 ml-4 text-md font-medium rounded-lg text-white disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Products
                    {isNestedOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>

                  <div
                    className={`transition-opacity transition-margin duration-300 ${
                      isNestedOpen ? "opacity-100 mt-4" : "opacity-0 hidden"
                    } min-w-[15rem] bg-amazon-green shadow-md rounded-lg p-2 divide-y divide-gray-200 border border-zinc-100 dark:divide-gray-700`}
                  >
                    <div className="py-2 first:pt-0 last:pb-0">
                      <Link to="/dummy">
                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-300 dark:hover:text-white">
                          Shop Shisha Flavour
                        </a>
                      </Link>
                      <Link to="/dummy">
                        <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-300 dark:hover:text-white">
                          Shop Shisha Pipe
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        )}

        {/* User Functions */}
        <div className="hidden lg:flex items-center space-x-6">
        <Link to="/login-register">
              <button className="py-3 px-4 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border bg-light-blue text-gray-100 hover:bg-white  hover:text-navy-blue whitespace-nowrap">
                  Take me to BMF
              </button>
            </Link>

          <Link to="/my-favourites">
            <button
              className="flex items-center font-medium text-white/[.8] hover:text-white sm:my-6"
              onMouseEnter={() => setIsFavHovered(true)}
              onMouseLeave={() => setIsFavHovered(false)}
            >
              {isFavHovered ? <TbBellRingingFilled size={28} /> : <TbBell size={28} />}
            </button>
          </Link>

          <div className="h-6 border-r border-white/[.3]"></div>
          {/* Conditionally render based on user authentication */}
          {isUserSignedIn ? (
            <Link to="/my-account">
              <button className="flex items-center font-medium text-white/[.8] hover:text-white">
                <PiUserRectangleFill size={28} />
              </button>
            </Link>
          ) : (
            <Link to="/login-register">
              <button className="py-3 px-4 inline-flex items-center gap-x-2 text-md font-semibold rounded-lg border bg-light-blue text-gray-100 hover:bg-white  hover:text-amazon-green whitespace-nowrap">
                  Register or Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
