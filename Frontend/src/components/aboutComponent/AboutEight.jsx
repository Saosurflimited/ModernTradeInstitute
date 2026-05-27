import React from "react";
import { Link } from "react-router-dom";

const AboutEight = () => {
  return (
    <section className="py-20 px-6 bg-red-600 text-white text-center">
      <h2 className="text-3xl font-bold">Start Your Journey Today</h2>

      <p className="mt-4 text-white/80">
        Join MTI and gain real-world skills for your future.
      </p>

      <Link
        to="/enroll"
        className="inline-block mt-6 bg-white text-red-600 px-8 py-3 rounded-lg font-semibold"
      >
        Enroll Now
      </Link>
    </section>
  );
};

export default AboutEight;