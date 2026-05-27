import React from "react";
import { programs, skillCategories } from "../../json/skillsJson";

const EnrollTwo = () => {
  return (
    <main>
      {/* FACULTIES (Programs) */}
      <section className="py-16 px-4 lg:px-14 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 max-w-2xl font-bold mx-auto text-sm md:text-base mt-2">
            Choose a Faculty (Program) that matches your passion and career
            goals
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {programs.map((faculty, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl hover:shadow-md transition text-left"
              >
                <h3 className="font-semibold text-lg">{faculty}</h3>

                <p className="text-gray-500 text-sm mt-2">
                  Practical hands-on training with real-world experience.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES STRUCTURE */}
      <section className="py-16 px-4 lg:px-14 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-gray-600 mt-3 max-w-2xl font-bold mx-auto text-sm md:text-base text-center">
            Faculties • Departments • Courses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {Object.entries(skillCategories).map(([department, courses], i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                {/*  Department */}
                <h3 className="font-semibold text-lg mb-4"> {department}</h3>

                {/* Courses */}
                <ul className="text-gray-600 space-y-2 text-sm">
                  {courses.map((course, index) => (
                    <li key={index}>• {course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default EnrollTwo;
