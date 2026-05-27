import React from "react";
import Marquee from "react-fast-marquee";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { allItems } from "../../json/skillsJson";

const MiniHeaderScroll = () => {
  return (
    <div className="relative w-full bg-black text-white border-b border-white/10 overflow-hidden">

      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex items-center gap-3 py-2 px-2 lg:px-14">

        {/* Left arrow */}
        <IoIosArrowBack size={16} className="text-white/40 shrink-0" />

        {/* Marquee */}
        <Marquee speed={45} pauseOnHover gradient={false}>
          <div className="flex items-center gap-5">
            {allItems.map((item, index) => (
              <span
                key={index}
                className="text-xs md:text-sm text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {item}
              </span>
            ))}
          </div>
        </Marquee>

        {/* Right arrow */}
        <IoIosArrowForward size={16} className="text-white/40 shrink-0" />

      </div>
    </div>
  );
};

export default MiniHeaderScroll;