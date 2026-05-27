import React from "react";
import { Link } from "react-router-dom";

const HomeOne = () => {
  return (
    <main>
      <section className="bg-gray-50 py-16 px-4 lg:px-14">
        <div className=" mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Text Content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Welcome to{" "}
              <span className="text-red-600">MTI - Modern Trade Institute</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              We empower individuals with practical, real-world skills across
              technical, creative, and digital fields. Build your future with
              industry-relevant training designed for success.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/programs"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-black transition"
              >
                {" "}
                Explore Programs
              </a>

              <Link
                to={"/learn-more"}
                className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Image / Visual */}
          <div className="flex-1 flex justify-end">
            <img
              src="https://media.istockphoto.com/id/175945029/photo/businessman-pushing-a-gears.jpg?s=612x612&w=0&k=20&c=ckF_hJnnd8JOnor8PzI7UdIBU38HM9NlGNHo4kDlXXw="
              alt="Students learning skills"
              className="rounded-xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      <hr className="text-gray-300 lg:mt-9 mt-14" />
    </main>
  );
};

export default HomeOne;
