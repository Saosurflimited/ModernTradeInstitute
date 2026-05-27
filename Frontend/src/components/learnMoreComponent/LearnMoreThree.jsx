import React from "react";

const LearnMoreThree = () => {
  return (
    <section className="bg-black text-white py-20 px-4 lg:px-14">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <div className="relative group">

          <div className="absolute -inset-1 bg-red-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition"></div>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Training environment"
            className="relative rounded-3xl w-full h-[520px] object-cover shadow-2xl border border-white/10"
          />

        </div>

        {/* CONTENT */}
        <div>

          <p className="text-red-500 uppercase tracking-widest font-semibold text-sm">
            Real Learning Environment
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-5 leading-tight">
            Train With <span className="text-red-500">Modern Tools</span> & Real Projects
          </h2>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            MTI provides an engaging learning environment where students don’t
            just study theory — they
            <span className="text-white font-medium"> practice, build, and create</span> using
            industry-relevant tools.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed">
            Through collaboration, mentorship, and hands-on projects, learners
            develop confidence and job-ready experience that prepares them for
            real-world success.
          </p>

          {/* SMALL HIGHLIGHTS */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">

            <div className="p-4 border border-white/10 rounded-xl bg-white/5">
              <p className="font-semibold text-white">Practical Labs</p>
              <p className="text-sm text-gray-400 mt-1">
                Work with real tools & systems
              </p>
            </div>

            <div className="p-4 border border-white/10 rounded-xl bg-white/5">
              <p className="font-semibold text-white">Real Projects</p>
              <p className="text-sm text-gray-400 mt-1">
                Build portfolio-ready work
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default LearnMoreThree;