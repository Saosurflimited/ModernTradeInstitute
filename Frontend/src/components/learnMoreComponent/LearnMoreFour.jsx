import React from "react";
import { transformations } from "../../json/transformations";

const LearnMoreFour = () => {
  return (
    <section className="py-16 px-4 lg:px-14 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-red-600 uppercase tracking-widest font-semibold text-sm">
            Student Transformation
          </p>

          <h2 className="text-gray-600 mt-3 max-w-2xl font-bold mx-auto text-sm md:text-base lg:text-xl">
            What Students Become
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            MTI doesn’t just teach skills — it transforms learners into
            professionals, entrepreneurs, and globally competitive talents.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {transformations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-gray-200 p-8 rounded-3xl text-center
                hover:bg-red-600 hover:text-white hover:shadow-xl
                hover:-translate-y-1 transition-all duration-300"
              >
                {/* ICON */}
                <div className="text-3xl text-red-600 group-hover:text-white flex justify-center mb-4 transition">
                  <Icon />
                </div>

                {/* TEXT */}
                <h3 className="text-lg font-semibold">
                  {item.text}
                </h3>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default LearnMoreFour;