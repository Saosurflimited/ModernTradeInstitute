import React, { useEffect, useState } from "react";
import { RiArrowDropUpFill } from "react-icons/ri";

const ScrollToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <div className="fixed bottom-8 lg:right-9 right-6 z-50">
          <button
            onClick={scrollUp}
            className="
              group
              w-12 h-12
              flex items-center justify-center
              rounded-full
              bg-red-600
              text-white
              shadow-lg
              hover:bg-red-700
              hover:shadow-red-300
              hover:scale-110
              transition-all duration-300
              animate-bounce
            "
          >
            <RiArrowDropUpFill className="text-3xl group-hover:-translate-y-0.5 transition" />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTopBtn;