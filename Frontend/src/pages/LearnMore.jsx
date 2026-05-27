import LearnMoreFive from "../components/learnMoreComponent/LearnMoreFive";
import LearnMoreFour from "../components/learnMoreComponent/LearnMoreFour";
import LearnMoreOne from "../components/learnMoreComponent/LearnMoreOne";
import LearnMoreSix from "../components/learnMoreComponent/LearnMoreSix";
import LearnMoreThree from "../components/learnMoreComponent/LearnMoreThree";
import LearnMoreTwo from "../components/learnMoreComponent/LearnMoreTwo";


const LearnMore = () => {
  return (
    <main>

      <section>
        <LearnMoreOne />
      </section>

      <section>
        <LearnMoreTwo />
      </section>

      <section>
        <LearnMoreThree />
      </section>

      <section>
        <LearnMoreFour />
      </section>

      <section>
        <LearnMoreFive />
      </section>

      <section>
        <LearnMoreSix />
      </section>

    </main>
  );
};

export default LearnMore;