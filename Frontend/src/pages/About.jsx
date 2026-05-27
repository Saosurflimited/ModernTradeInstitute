import React from "react";
import AboutOne from "../components/aboutComponent/AboutOne";
import AboutTwo from "../components/aboutComponent/AboutTwo";
import AboutThree from "../components/aboutComponent/AboutThree";
import AboutFour from "../components/aboutComponent/AboutFour";
import AboutFive from "../components/aboutComponent/AboutFive";
import AboutSix from "../components/aboutComponent/AboutSix";
import AboutSeven from "../components/aboutComponent/AboutSeven";

const About = () => {
  return (
    <main>
      <section>
        <section className="aboutOne">
          <AboutOne />
        </section>

        <section className="aboutTwo">
          <AboutTwo />
        </section>

        <section className="aboutThree">
          <AboutThree />
        </section>

        <section className="aboutFour">
          <AboutFour />
        </section>

        <section className="aboutFive">
          <AboutFive />
        </section>

        <section className="aboutSix">
          <AboutSix />
        </section>

        <section className="aboutSeven">
          <AboutSeven/>
        </section>
      </section>
    </main>
  );
};

export default About;
