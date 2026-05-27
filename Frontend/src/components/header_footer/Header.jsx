import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import MiniHeaderScroll from "./MiniHeaderScroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-50">
      {/* Main Header */}
      <div className="w-full mx-auto px-4 py-4 lg:px-14 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/" className="text-2xl font-bold text-black">
            MTi <span className="text-red-600">- Modern Trade Institute</span>
          </Link>
          <p className="text-sm text-gray-500 hidden sm:block">
            Building the future with modernized traditional tools
          </p>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-medium text-black">
          <li>
            <Link to="/" className="hover:text-red-600 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-red-600 transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-red-600 transition">
              Contact
            </Link>
          </li>

          <li>
            <Link to="/programs" className="hover:text-red-600 transition">
              Programs
            </Link>
          </li>
        </ul>

        {/*  */}
        <ul className="flex items-center gap-4 ">
          <li className="flex items-center gap-2">
            <div className="h-[2px] w-3 bg-red-600 hidden md:block"></div>

            <Link
              to="/signin"
              className="hover:text-red-600 transition hidden md:block leading-none"
            >
              Sign In
            </Link>
          </li>

          {/* CTA */}
          <Link
            to="/enroll"
            className="hidden md:block bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-black transition"
          >
            Enroll Now
          </Link>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          <Link to="/" onClick={closeMenu} className="block hover:text-red-600">
            Home
          </Link>

          <Link
            to="/programs"
            onClick={closeMenu}
            className="block hover:text-red-600"
          >
            Programs
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className="block hover:text-red-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="block hover:text-red-600"
          >
            Contact
          </Link>

          <div className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <div className="h-[2px] w-3 bg-red-600 "></div>

              <Link
                to="/signin"
                className="hover:text-red-600 transition md:hidden block leading-none"
              >
                Sign In
              </Link>
            </li>

            <Link
              to="/enroll"
              onClick={closeMenu}
              className="block w-full text-center bg-red-600 text-white py-2 rounded-lg hover:bg-black transition"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}

      {/* Tagline Strip */}
      <div>
        <MiniHeaderScroll />
      </div>
    </header>
  );
};

export default Header;
