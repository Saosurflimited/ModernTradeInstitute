import React from "react";

const AboutSix = () => {
  return (
    <>
      <section id="sellTTwoFather" className="lg:mt-[15vh] pb-14 pt-14 bg-black">
        <div id="sellTTwoSon" className="px-4 lg:px-14">
          <aside id="fther">
            <div id="Son" className="relative">

              {/* HEADER */}
              <div
                id="text-div-sell"
                className="flex flex-col gap-3 leading-7 md:leading-8 lg:leading-[35px] text-center mb-16 sm:mb-20 text-white"
              >
                <h1 className="text-2xl sm:text-3xl lg:text-[35px] text-brightTeal font-semibold font-serif tracking-widest">
                  LEADERSHIP & TEAM
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-[16px] tracking-wide font-serif text-navyBlue max-w-3xl mx-auto">
                  Meet the leadership and dedicated professionals driving MTI forward with excellence in skill development and training.
                </p>
              </div>

              {/* CONTENT */}
              <div
                id="form-img-div"
                className="relative flex flex-col items-center gap-6 lg:flex-row lg:gap-0"
              >

                {/* LEFT CARD → FOUNDER */}
                <div
                  id="FormDivSell"
                  className="relative z-30 flex flex-col w-full gap- p-4 sm:p-6 bg-white shadow-lg lg:max-w-md lg:p-5"
                >
                  <div className="flex flex-col items-center justify-center gap-1 mb-4 sm:mb-5">
                    <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[30px] font-serif font-semibold text-brightTeal">
                      FOUNDER / CEO
                    </h1>

                    <hr className="w-14 sm:w-[60px] border-brightTeal lg:border-2 border-4 border-dashed rounded-full" />
                  </div>

                  {/* FOUNDER IMAGE */}
                  <img
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=80"
                    alt="MTI Founder"
                    className="w-full h-[300px] sm:h-[380px] md:h-[430px] object-cover rounded shadow-md"
                  />

                  <p className="text-center text-navyBlue text-sm sm:text-base mt-3">
                    Leading MTI with a vision to empower individuals through practical and industry-driven skills training.
                  </p>
                </div>

                {/* RIGHT SIDE → TEAM IMAGE */}
                <div
                  id="formDivImgSel"
                  className="w-full lg:w-[60vw] lg:absolute right-0 shadow shadow-gray-100 mt-6 lg:mt-0 border-[1px] border-white"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
                    alt="MTI Team"
                    className="w-full h-[350px] sm:h-[500px] md:h-[650px] lg:h-[80vh] object-cover"
                  />

                  <div className="before:block before:bg-navyBlue before:inset-0 before:z-10 before:content-[''] before:absolute before:bg-opacity-50"></div>
                </div>

              </div>

            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default AboutSix;