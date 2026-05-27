import React from "react";
import { FaTools, FaChalkboardTeacher, FaLaptop, FaBriefcase } from "react-icons/fa";

const HomeThree = () => {
  const features = [
    {
      title: "Hands-on Practical Training",
      description:
        "Learn by doing with real-world projects that build your confidence and technical skills.",
      icon: <FaTools />,
    },
    {
      title: "Experienced Instructors",
      description:
        "Get trained by industry professionals who bring real experience into the classroom.",
      icon: <FaChalkboardTeacher />,
    },
    {
      title: "Modern Equipment & Tools",
      description:
        "Work with up-to-date tools and technology used in today’s industries.",
      icon: <FaLaptop />,
    },
    {
      title: "Career & Business Support",
      description:
        "We guide you beyond training with mentorship, job support, and business growth advice.",
      icon: <FaBriefcase />,
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-14 bg-gray-50">
      <div className=" mx-auto text-center">
        <h2 className="text-gray-600 mt-3 max-w-2xl font-bold mx-auto text-sm md:text-base">
          Why Choose MTI?
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          We focus on practical skills, industry relevance, and long-term success for every student.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-left"
            >
              <div className="text-red-600 text-3xl mb-4">
                {item.icon}
              </div>

              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeThree;