import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="p-4 bg-white mb-[30px] border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl lg:text-2xl font-bold">
          APP LOGO
        </Link>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none focus:text-black"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`lg:flex ${isOpen ? "block" : "hidden"} lg:space-x-6`}>
          <Link to="/" className="p-2 text-sm lg:text-md">
            DASHBOARD
          </Link>
          <Link to="/about" className="p-2 text-sm lg:text-md">
            CREATE ADS
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
