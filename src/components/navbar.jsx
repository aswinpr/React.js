import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-sky-950 text-white shadow-md">
      
      <div className="flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
        />

        {/* Right Side */}
        <div className="flex items-center">
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 text-lg">
            <li><a href="#home" className="hover:text-emerald-400">Home</a></li>
            <li><a href="#pricing" className="hover:text-emerald-400">Pricing</a></li>
            <li><a href="#login" className="hover:text-emerald-400">Login</a></li>
          </ul>

          {/* Hamburger button (only on mobile) */}
          <button
            className="md:hidden focus:outline-none text-2xl ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sky-950">
          <ul className="flex flex-col items-end space-y-4 px-6 py-6 text-sm">
            <li>
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={() => setIsOpen(false)}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#login" onClick={() => setIsOpen(false)}>
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
      
    </nav>
  );
};

export default Navbar;