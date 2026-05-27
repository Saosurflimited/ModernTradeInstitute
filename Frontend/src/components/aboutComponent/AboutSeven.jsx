import React from "react";
import { Link } from "react-router-dom";

const AboutSeven = () => {
  return (
    <section className="py-20 px-4 sm:px-6 bg-red-600 text-white text-center">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        Start Your Journey Today
      </h2>

      <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
        Join MTI and gain practical, real-world skills that prepare you for
        employment, entrepreneurship, and long-term success.
      </p>

      <Link
        to="/enroll"
        className="inline-block mt-6 bg-white text-red-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Enroll Now
      </Link>

    </section>
  );
};

export default AboutSeven;