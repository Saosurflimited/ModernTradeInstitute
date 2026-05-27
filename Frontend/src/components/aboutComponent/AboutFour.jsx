import React from "react";
import { FaUsers, FaAward, FaTools, FaBriefcase } from "react-icons/fa";

const AboutFour = () => {
  const items = [
    { icon: <FaUsers />, title: "Expert Trainers" },
    { icon: <FaAward />, title: "Certified Training" },
    { icon: <FaTools />, title: "Hands-on Learning" },
    { icon: <FaBriefcase />, title: "Career Support" },
  ];

  return (
    <section className="py-16 px-4 lg:px-14 bg-white text-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="p-6 border rounded-xl">
            <div className="text-red-600 text-2xl flex justify-center">
              {item.icon}
            </div>
            <h3 className="mt-3 font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutFour;
