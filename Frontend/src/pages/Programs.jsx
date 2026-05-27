import React from "react";
import ProgramOne from "../components/programsComponent/ProgramOne";
import ProgramTwo from "../components/programsComponent/ProgramTwo";
import ProgramThree from "../components/programsComponent/ProgramThree";
import ProgramFour from "../components/programsComponent/ProgramFour";
import ProgramFive from "../components/programsComponent/ProgramFive";

const Programs = () => {
  return (
    <main>
      <section>
        <ProgramOne />
      </section>

      <section>
        <ProgramTwo />
      </section>

      <section>
        <ProgramThree />
      </section>

      <section>
        <ProgramFour />
      </section>

      <section>
        <ProgramFive />
      </section>
    </main>
  );
};

export default Programs;
