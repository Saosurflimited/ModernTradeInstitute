import React from "react";
import { experiences } from "../../json/experienceJson";

const LearnMoreTwo = () => {
  return (
    <section className="py-20 px-4 lg:px-14 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <p className="text-red-600 font-semibold uppercase tracking-wider">
            The MTI Experience
          </p>
          <h2 className="text-gray-600 mt-3 max-w-2xl font-bold mx-auto text-sm md:text-base">
            Learn. Build. Grow.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">

          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-100 rounded-3xl p-8
                shadow-sm hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300 ease-in-out flex flex-col"
              >

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-red-50 text-red-600 text-2xl group-hover:scale-110 transition">
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mt-6 text-gray-900">
                  {item.title}
                </h3>

                {/* Text */}
                <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default LearnMoreTwo;