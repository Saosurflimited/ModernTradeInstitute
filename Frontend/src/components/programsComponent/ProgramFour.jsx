import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProgramFour = () => {
  const items = [
    {
      title: "Hands-on Training",
      desc: "Learn by doing real projects, not just theory.",
    },
    {
      title: "Industry Relevant",
      desc: "Skills aligned with real job market demands.",
    },
    {
      title: "Career Support",
      desc: "We guide you from learning to employment and growth.",
    },
  ];

  return (
    <section className="pb-20 pt-14 px-4 lg:px-14 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* HEADER */}
        <h2 className="text-gray-600 mt-3 max-w-2xl font-bold mx-auto text-sm md:text-base">
          Why Our Programs Stand Out ?
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          We focus on practical learning, industry alignment, and long-term
          career success.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {items.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-100 rounded-2xl p-7 text-left shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* ICON */}
              <div className="flex items-center gap-2 text-red-600 mb-4">
                <FaCheckCircle className="text-lg" />
                <span className="text-sm font-medium">MTI Advantage</span>
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {item.desc}
              </p>

              {/* SMALL ACCENT LINE */}
              <div className="mt-5 h-[2px] w-12 bg-red-600 rounded-full opacity-70"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramFour;
