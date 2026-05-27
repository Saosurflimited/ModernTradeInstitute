import React from "react";
import bgVideo from "../../assets/videos/3145-166335957_medium.mp4";

const ContactOne = () => {
  const handleScrollToContact = () => {
    const section = document.getElementById("contact-two");

    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[70vh] flex items-center justify-start text-start overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 lg:px-14 text-start ">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Get in Touch With MTI
        </h1>

        <p className="mt-6 text-gray-200 text-lg md:text-xl">
          Have questions about our programs, admissions, or training?
          <br className="hidden md:block" />
          We’re here to help you start your skill journey.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            onClick={handleScrollToContact}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactOne;
