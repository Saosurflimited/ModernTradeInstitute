import React from "react";
import { skillCategories } from "../../json/skillsJson";

const ProgramThree = () => {
  return (
    <section className="py-16 px-4 lg:px-14 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-gray-600 mt-3 max-w-2xl font-bold mx-auto text-sm md:text-base">
          Faculties & Courses
        </h2>

        <p className="text-gray-600 mt-3">
          Explore all departments and available skill tracks.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 text-left">
          {Object.entries(skillCategories).map(([dept, courses], i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">

              <h3 className="font-semibold text-lg mb-3 text-red-600">
                {dept}
              </h3>

              <ul className="text-sm text-gray-600 space-y-2">
                {courses.slice(0, 5).map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>

              <p className="text-xs text-gray-400 mt-3">
                + more courses available
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramThree;