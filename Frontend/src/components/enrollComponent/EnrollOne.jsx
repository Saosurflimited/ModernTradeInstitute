import React from "react";
import { Link } from "react-router-dom";

const EnrollOne = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-gray-50 py-14 px-4 lg:px-14">
        <div className="w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Enroll at <span className="text-red-600">MTI</span>
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Start your journey toward practical skills, career growth, and
              financial independence. Choose from industry-focused programs
              designed to make you job-ready.
            </p>

            <div className="mt-6">
              <a
                href="#form"
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition"
              >
                Fill Enrollment Form
              </a>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80"
            alt="students learning"
            className="rounded-xl shadow-lg w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>
      </section>
    </main>
  );
};

export default EnrollOne;
