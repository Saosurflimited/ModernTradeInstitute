import React from "react";
import EnrollOne from "../components/enrollComponent/EnrollOne";
import EnrollTwo from "../components/enrollComponent/EnrollTwo";
import EnrollThree from "../components/enrollComponent/EnrollThree";
import EnrollFour from "../components/enrollComponent/EnrollFour";
import EnrollFive from "../components/enrollComponent/EnrollFive";

const Enroll = () => {
  return (
    <main className="w-full">
      <section>
        <EnrollOne />
      </section>

      <section>
        <EnrollTwo />
      </section>

      <section>
        <EnrollFive />
      </section>

      <section>
        <EnrollFour />
      </section>

      <section>
        <EnrollThree />
      </section>
    </main>
  );
};

export default Enroll;
