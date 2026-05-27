import React from "react";

const AboutFive = () => {
  const stats = [
    { label: "Students", value: "1,200+" },
    { label: "Courses", value: "10+" },
    { label: "Success Rate", value: "95%" },
    { label: "Experience", value: "5+" },
  ];

  return (
    <section className="py-16 px-4 lg:px-14 sm:px-6 bg-gray-50">

      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-center">

        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-red-600">
              {s.value}
            </h3>

            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              {s.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default AboutFive;