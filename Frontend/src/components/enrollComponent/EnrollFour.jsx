import React from "react";
import { skillCategories } from "../../json/skillsJson";

const EnrollFour = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <section
        id="form"
        className="py-10 sm:py-12 md:py-14 px-4 sm:px-6 lg:px-14 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
          {/* TWO COLUMN LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT SIDE - TEXT */}
            <div className="bg-black text-white p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Start Your Journey Today
              </h2>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                Join our program and gain real-world skills that prepare you for
                success. Learn from experts, build projects, and grow your
                career with hands-on training tailored for you.
              </p>

              <ul className="mt-6 space-y-3 text-sm sm:text-base opacity-90">
                <li>✔ Practical hands-on learning</li>
                <li>✔ Expert mentorship</li>
                <li>✔ Career-ready skills</li>
              </ul>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="p-6 sm:p-8 md:p-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center lg:text-left">
                Enrollment Form
              </h3>

              <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* FIRST NAME */}
                <div className="sm:col-span-1">
                  <label className="block mb-1 text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* LAST NAME */}
                <div className="sm:col-span-1">
                  <label className="block mb-1 text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* EMAIL */}
                <div className="sm:col-span-2">
                  <label className="block mb-1 text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* PHONE */}
                <div className="sm:col-span-2">
                  <label className="block mb-1 text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {/* PROGRAM */}
                <div className="sm:col-span-2">
                  <label className="block mb-1 text-sm font-medium">
                    Select Program
                  </label>

                  <select className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500">
                    <option value="">Select Program</option>

                    {Object.entries(skillCategories).map(
                      ([category, courses]) => (
                        <optgroup key={category} label={category}>
                          {courses.map((course, i) => (
                            <option key={i} value={course}>
                              {course}
                            </option>
                          ))}
                        </optgroup>
                      ),
                    )}
                  </select>
                </div>

                {/* BUTTON */}
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 active:scale-[0.99] transition"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EnrollFour;
