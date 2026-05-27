import React from "react";
import { Link } from "react-router-dom";

const HomeSix = () => {
  return (
    <section className="py-20 px-4 lg:px-14 bg-white text-gray-900 text-center">
      <div className=" mx-auto">
        <h2 className="text-gray-600 mt-3 max-w-2xl font-bold mx-auto text-sm md:text-base">
          Start Your Skill Journey Today
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Join MTI and gain practical skills that prepare you for real-world
          opportunities.
        </p>

        <div className="mt-8">
          <Link
            to="/enroll"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-red-700 hover:shadow-lg transition-all duration-300"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSix;
