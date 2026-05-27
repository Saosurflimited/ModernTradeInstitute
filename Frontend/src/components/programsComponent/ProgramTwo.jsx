import React from "react";
import { programs } from "../../json/skillsJson";
import { FaArrowRight } from "react-icons/fa";

const ProgramTwo = () => {
  return (
    <section id="programs" className="pb-20 pt-10 px-4 lg:px-14 bg-white">
      <div className="mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Discover structured learning paths designed to prepare you for
            real-world careers and entrepreneurship.
          </p>
        </div>

        {/* SCROLL CARDS */}
        <div className="flex gap-6 overflow-x-auto pb-4 custom-scroll">
          {programs.map((item, i) => (
            <div
              key={i}
              className="min-w-[280px] bg-gradient-to-b from-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* ICON DOT */}
              <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center mb-4 group-hover:bg-red-600 transition">
                <FaArrowRight className="text-red-600 group-hover:text-white text-sm" />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-red-600 transition">
                {item}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 mt-2 leading-relaxed group-hover:text-gray-700">
                Industry-focused practical training designed for real-world
                career growth.
              </p>

              {/* FOOTER */}
              <div className="mt-5 text-xs text-gray-400 group-hover:text-red-500">
                View details →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramTwo;
