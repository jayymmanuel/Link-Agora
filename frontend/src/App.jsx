import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from "./components/Exterior/Navbar/NavBar";

// Import the showNavRoutes from the utility file
import { showNavRoutes } from "./routeConfig";

const App = () => {
  const location = useLocation();

    // Example: Determine the user role based on user information (replace with your logic)
    const userRole = "user"; // Replace with actual logic to get user role


  // Check if the current route should show the navbar
  const shouldShowNav = showNavRoutes.includes(location.pathname);

  return (
    <div className="flex bg-zinc-900 w-full">
      <div className="flex flex-col flex-grow">
      {shouldShowNav && userRole === "user" && <Navbar />}
        <div className="flex-grow mb-auto mt-28">
        <AppRoutes/>
        </div>
      </div>
    </div>
  );
};

export default App;
