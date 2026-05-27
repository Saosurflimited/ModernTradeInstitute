import React from "react";
import { Link } from "react-router-dom";

const EnrollThree = () => {
  return (
    <main>
      {/* CTA STRIP */}
      <section className="bg-red-600 text-white text-center py-12 px-4 lg:px-14">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Ready to Build Your Future?
        </h2>

        <p className="mt-2 text-white/80">
          Join hundreds of students already learning practical skills at MTI
        </p>

        <a
          href="#form"
          className="inline-block mt-6 bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Apply Now
        </a>
      </section>
    </main>
  );
};

export default EnrollThree;
