import React from "react";
import finSharkLogo from "./finSharkLogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

// Define the props interface (currently unused, but set up for potential future use)
interface Props {}

// Functional component for the navigation bar
const Navbar = (props: Props) => {
  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex container to align items horizontally */}
      <div className="flex items-center justify-between">
        {/* Left section: Logo and navigation links */}
        <div className="flex items-center space-x-20">
          {/* Logo that links to the homepage */}
          <Link to="/">
            <img src={finSharkLogo} alt="FinShark Logo" />
          </Link>

          {/* Navigation links, visible on large screens (hidden on smaller screens) */}
          <div className="hidden font-bold lg:flex">
            <Link to="/search" className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>

        {/* Right section: Login and Signup buttons, hidden on small screens */}
        <div className="hidden lg:flex items-center space-x-6 text-back">
          <div className="hover:text-darkBlue">Login</div>
          <a
            href=""
            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
