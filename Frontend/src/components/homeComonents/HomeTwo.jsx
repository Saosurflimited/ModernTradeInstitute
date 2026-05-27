import React from "react";

const HomeTwo = () => {
  const programs = [
    "Technical & Industrial Skills",
    "Creative & Design Skills",
    "Digital & Technology Skills",
    "Business & Entrepreneurship",
    "Personal Development",
    "Languages & Communication"
  ];

  return (
    <section className="py-16 px-4 lg:px-14  bg-white">
      <div className=" mx-auto text-center">
        
        <h2 className="text-gray-600 mt-3 max-w-2xl font-bold mx-auto text-sm md:text-base">
          Our Training Programs
        </h2>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Industry-focused training designed to prepare you for real-world success.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {programs.map((program, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="font-semibold text-lg">{program}</h3>
              <p className="text-sm text-gray-500 mt-2">
                Hands-on practical training with real projects.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTwo;