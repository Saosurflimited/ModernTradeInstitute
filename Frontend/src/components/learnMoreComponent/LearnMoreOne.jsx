import React from "react";
import bgVideo from "../../assets/videos/202134-917314709_medium.mp4";
import { Link } from "react-router-dom";

const LearnMoreOne = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-start overflow-hidden">
      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl px-4 lg:px-14 text-start">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Learn More About <span className="text-red-500">MTI Experience</span>
        </h1>

        <p className="mt-6 text-gray-200 text-lg md:text-xl leading-relaxed">
          Discover how MTI transforms learners through hands-on training,
          real-world projects, mentorship, and career-focused skill development.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/programs"
            className="bg-red-600 text-white px-8 py-3 rounded-lg font-medium
                       shadow-md hover:bg-red-700 hover:shadow-lg
                       transition-all duration-300"
          >
            Explore Programs
          </Link>

          <Link
            to="/enroll"
            className="border border-white text-white px-8 py-3 rounded-lg font-medium
                       hover:bg-white hover:text-black
                       shadow-md hover:shadow-lg
                       transition-all duration-300"
          >
            Enroll Today
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearnMoreOne;
