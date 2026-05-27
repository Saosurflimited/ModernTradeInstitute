import React from "react";
import { FaInstagram, FaTiktok, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ScrollToTopBtn from "../miniComonent/ScrollToTopBtn";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const skillAreas = [
    "Technical & Industrial Skills",
    "Creative & Design Skills",
    "Digital & Technology Skills",
    "Business & Entrepreneurship",
    "Personal Development (Soft Skills)",
    "Languages & Communication",
  ];

  return (
    <footer className="bg-black text-gray-300 lg:mt-0 mt-0">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            MTi <span className="text-red-600">- Modern Trade Institute</span>
          </h2>
          <p className="text-sm">
            A premier craft center empowering individuals with practical skills
            for real-world success.
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.tiktok.com/@moderntrade._institute"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.instagram.com/moderntrade._institute?igsh=dHR1dnJoZWlpbnhi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/MInstitute23698"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://wa.me/message/LIEKSISGK7W7K1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-red-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Admissions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-600">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-white font-semibold mb-3">Our Programs</h3>
          <ul className="space-y-2 text-sm">
            {skillAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">Lagos, Nigeria</p>
          <p className="text-sm">
            <a href="mailto:info@mti.com" className="hover:text-red-600">
              info@mti.com
            </a>
          </p>
          <p className="text-sm">
            <a href="tel:+234XXXXXXXXXX" className="hover:text-red-600">
              +234 XXX XXX XXXX
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm">
        <span className="text-gray-400">
          © {new Date().getFullYear()} MTI - Modern Trade Institute.
        </span>
        <span className="text-red-600"> All rights reserved.</span>
      </div>

      <ScrollToTopBtn />
    </footer>
  );
};

export default Footer;
