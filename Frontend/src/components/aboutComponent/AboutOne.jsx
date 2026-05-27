import React from "react";
import bgVideo from "../../assets/videos/268230_medium.mp4";
import { Link } from "react-router-dom";

const AboutOne = () => {
  return (
    <main>
      <section className="relative h-[70vh] flex items-center justify-start text-start overflow-hidden  ">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 lg:px-14 text-start">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            About <span className="text-red-500">MTI</span>
          </h1>

          <p className="mt-6 text-gray-200 text-lg md:text-xl">
            Modern Trade Institute (MTI) empowers individuals with practical,
            real-world skills across technical, creative, and digital fields.
          </p>

          <p className="mt-4 text-gray-300 text-base md:text-lg">
            We are committed to building future-ready professionals through
            industry-relevant training designed for personal and career success.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link to={"/programs"} className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutOne;
