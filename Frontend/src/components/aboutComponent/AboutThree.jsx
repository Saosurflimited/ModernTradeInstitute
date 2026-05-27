import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const AboutThree = () => {
  return (
    <section className="py-16 px-4 lg:px-14 bg-gray-50">
      <div className="lg:max-w-7xl mx-auto grid md:grid-cols-2 gap-6">

        {/* MISSION */}
        <div className="bg-white p-6 rounded-xl shadow">
          <FaBullseye className="text-red-600 text-3xl" />

          <h3 className="text-xl font-semibold mt-3">
            Our Mission
          </h3>

          <p className="text-gray-600 mt-2">
            To equip individuals with practical, hands-on skills that bridge
            the gap between education and industry, enabling them to secure
            meaningful employment and build sustainable careers.
          </p>
        </div>

        {/* VISION */}
        <div className="bg-white p-6 rounded-xl shadow">
          <FaEye className="text-red-600 text-3xl" />

          <h3 className="text-xl font-semibold mt-3">
            Our Vision
          </h3>

          <p className="text-gray-600 mt-2">
            To be a globally recognized center of excellence in vocational and
            digital skills training, empowering individuals to thrive in a
            rapidly evolving world of work.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutThree;