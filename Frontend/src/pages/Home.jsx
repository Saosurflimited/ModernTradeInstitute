import React from "react";

import HomeTwo from "../components/homeComonents/HomeTwo";
import HomeThree from "../components/homeComonents/HomeThree";
import HomeFour from "../components/homeComonents/HomeFour";
import HomeFive from "../components/homeComonents/HomeFive";
import HomeSix from "../components/homeComonents/HomeSix";
import HomeOne from "../components/homeComonents/HomeOne";

const Home = () => {
  return (
    <main>
      <section>
        <section className="homeOne">
          <HomeOne />
        </section>

        <section className="homeTwo">
          <HomeTwo />
        </section>

        <section className="homeThree">
          <HomeThree />
        </section>

        <section className="homeFour">
          <HomeFour />
        </section>

        <section className="homeFive">
          <HomeFive />
        </section>

        <section className="homeSix">
          <HomeSix />
        </section>
      </section>
    </main>
  );
};

export default Home;
