import React from "react";
import {
  FaTiktok,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { info } from "../../json/inforJson";

const ContactTwo = () => {
  return (
    <section id="contact-two" className="py-16  bg-white scroll-mt-24">
      <div className="w-full px-4 lg:px-14 mx-auto flex flex-col">

        {/* INFO CARDS */}
        <div className="flex flex-col md:flex-row gap-6 text-center">
          {info.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.link}
                className="flex-1 p-6 border rounded-xl shadow-sm hover:shadow-md hover:bg-red-50 hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="text-red-600 text-3xl mb-3 flex justify-center">
                  <Icon />
                </div>

                <h3 className="font-semibold text-lg">{item.title}</h3>

                <p className="text-gray-600 mt-2">{item.detail}</p>
              </a>
            );
          })}
        </div>

        {/* SOCIAL MEDIA SECTION */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mt-2">
            Stay updated with MTI news and updates
          </p>

          <div className="flex justify-center gap-6 mt-6 text-2xl">
            <a
              href="https://www.tiktok.com/@moderntrade._institute"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaTiktok />
            </a>

            <a
              href="https://www.instagram.com/moderntrade._institute?igsh=dHR1dnJoZWlpbnhi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/MInstitute23698"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTwo;