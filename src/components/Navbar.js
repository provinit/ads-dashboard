import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  }
  return (
    <nav className="p-4 bg-white mb-[30px] border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl lg:text-2xl font-bold">
          APP LOGO
        </Link>

        <div className="hidden lg:flex text-sm items-center">
              <Link to="/" className="p-4 text-black" onClick={handleMenuClick}>
                DASHBOARD
              </Link>
              <Link to="/create-ad" className="p-4 text-black" onClick={handleMenuClick}>
                CREATE ADS
              </Link>
            </div>

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

        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-black focus:outline-none"
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
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/" className="p-4 text-black" onClick={handleMenuClick}>
                DASHBOARD
              </Link>
              <Link to="/create-ad" className="p-4 text-black" onClick={handleMenuClick}>
                CREATE ADS
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

