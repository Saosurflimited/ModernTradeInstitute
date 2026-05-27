import React from "react";
import { FaHammer, FaCut, FaBolt, FaPaintBrush, FaCode, FaBullhorn, FaLanguage } from "react-icons/fa";

const HomeFour = () => {
  const skills = [
    {
      name: "Carpentry",
      description: "Learn furniture making, woodwork, and construction skills.",
      icon: <FaHammer />,
    },
    {
      name: "Fashion Design",
      description: "Design and create modern clothing and fashion pieces.",
      icon: <FaCut />,
    },
    {
      name: "Welding",
      description: "Master metal joining, fabrication, and industrial welding.",
      icon: <FaBolt />,
    },
    {
      name: "Electrical Installation",
      description: "Gain practical electrical wiring and installation skills.",
      icon: <FaBolt />,
    },
    {
      name: "UI/UX Design",
      description: "Design modern and user-friendly digital experiences.",
      icon: <FaCode />,
    },
    {
      name: "Digital Marketing",
      description: "Learn online branding, ads, and social media growth.",
      icon: <FaBullhorn />,
    },
    {
      name: "German Language",
      description: "Develop communication skills in German for global use.",
      icon: <FaLanguage />,
    },
    {
      name: "French Language",
      description: "Speak and understand French for international opportunities.",
      icon: <FaLanguage />,
    },
    {
      name: "Chinese Language",
      description: "Learn Mandarin for business and global communication.",
      icon: <FaLanguage />,
    },
  ];

  return (
    <section className="py-24 px-4 lg:px-14 bg-white">
      <div className=" mx-auto">

        <h2 className="text-gray-600 mt-3 max-w-2xl font-bold mx-auto text-sm md:text-base text-center">
          Featured Skills
        </h2>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore industry-relevant skills designed to prepare you for jobs, entrepreneurship, and global opportunities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-200 bg-white hover:bg-red-600 hover:text-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-2xl text-red-600 group-hover:text-white mb-4">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>

              <p className="text-sm mt-2 text-gray-500 group-hover:text-white/90">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFour;