import React from "react";
import bgVideo from "../../../public/176897-856259092_medium.mp4";

const ProgramOne = () => {
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
          Explore Our <span className="text-red-500">Programs</span>
        </h1>

        <p className="mt-6 text-gray-200 text-lg md:text-xl">
          Discover industry-focused training programs designed to equip you with
          real-world skills for employment and entrepreneurship.
        </p>

        <div className="mt-8">
          <a
            href="#programs"
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            {" "}
            View Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramOne;
