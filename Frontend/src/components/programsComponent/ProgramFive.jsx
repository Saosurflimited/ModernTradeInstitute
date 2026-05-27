import React from "react";

const ProgramFive = () => {
  return (
    <section className="py-20 px-4 lg:px-14 bg-red-600 text-white text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Ready to Start Learning?
      </h2>

      <p className="mt-4 text-white/80 max-w-2xl mx-auto">
        Join MTI today and begin your journey into practical skills and career
        growth.
      </p>

      <a
        href="/enroll"
        className="inline-block mt-6 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        {" "}
        Enroll Now
      </a>
    </section>
  );
};

export default ProgramFive;
