import React from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import { testimonials } from "../../json/dataReview";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-red-600 text-red-600 rounded-full shadow hover:bg-red-600 hover:text-white transition"
  >
    <FaArrowRight />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white border border-red-600 text-red-600 rounded-full shadow hover:bg-red-600 hover:text-white transition"
  >
    <FaArrowLeft />
  </button>
);

const HomeFive = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-16 px-4 lg:px-14 bg-gradient-to-b from-slate-50 to-white">
      <div className="w-full mx-auto text-center">

        <h2 className="text-gray-600 mt-3 max-w-2xl font-bold mx-auto text-sm md:text-base">
          What Our Students Say
        </h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Real stories from students who have transformed their lives through MTI training programs.
        </p>

        {/* Slider */}
        <div className="mt-14 relative">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <div key={index} className="px-4">
                
                <div className="bg-white p-10 md:p-12 rounded-3xl shadow border border-gray-100 hover:shadow transition-all duration-300">

                  {/* Stars */}
                  <div className="flex justify-center gap-1 text-yellow-400 mb-5">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 italic text-lg md:text-xl leading-relaxed">
                    “{item.quote}”
                  </p>

                  {/* Avatar */}
                  <div className="mt-8 flex flex-col items-center">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-red-500"
                    />

                    <div className="mt-4 font-semibold text-gray-900 text-lg">
                      {item.name}
                    </div>

                    <div className="text-sm text-red-600">
                      {item.role}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default HomeFive;