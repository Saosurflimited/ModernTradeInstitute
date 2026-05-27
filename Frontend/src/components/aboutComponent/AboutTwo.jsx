import React from "react";

const AboutTwo = () => {
  return (
    <section className="py-16 px-4 lg:px-14 bg-white">
      <div className="lg:max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT SIDE */}
        <div>
          <h2 className="text-3xl font-bold">
            Who We Are
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            <span className="font-semibold text-black">
              Modern Trade Institute (MTI)
            </span>{" "}
            is a professional skills development institution committed to
            empowering individuals with practical, industry-relevant training
            that drives personal growth, employability, and entrepreneurship.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We focus on bridging the gap between education and real-world
            industry demands by delivering hands-on training across technical,
            creative, and digital fields. Our programs are designed to build
            competence, confidence, and career readiness.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            At MTI, we believe in transforming passion into skill and skill into
            opportunity — equipping learners with the tools they need to thrive
            in today’s competitive global economy.
          </p>
        </div>

        {/* IMAGE SIDE */}
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
          className="rounded-xl shadow-lg"
          alt="Modern Trade Institute training environment"
        />

      </div>
    </section>
  );
};

export default AboutTwo;