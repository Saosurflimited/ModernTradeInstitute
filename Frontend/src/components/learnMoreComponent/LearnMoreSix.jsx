import React from "react";
import { Link } from "react-router-dom";

const LearnMoreSix = () => {
  return (
    <section className="bg-red-600 py-16 px-4 lg:px-14 text-white text-center">

      <div className="max-w-4xl mx-auto">

        <p className="uppercase tracking-widest text-white/80 font-semibold">
          Skills + Opportunities
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-5">
          Your Future Starts Here
        </h2>

        <p className="mt-6 text-lg text-white/90">
          Gain practical skills, build confidence, and create opportunities
          with MTI training programs.
        </p>

        <div className="mt-10">

          <Link
            to="/enroll"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition"
          >
            Enroll Now
          </Link>

        </div>

      </div>

    </section>
  );
};

export default LearnMoreSix;