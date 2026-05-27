import React from "react";
import ContactOne from "../components/contactComponents/ContactOne";
import ContactThree from "../components/contactComponents/ContactThree";
import ContactFour from "../components/contactComponents/ContactFour";
import ContactTwo from "../components/contactComponents/ContactTwo";
import ContactFive from "../components/contactComponents/ContactFive";
import ContactSix from "../components/contactComponents/ContactSix";

const Contact = () => {
  return (
    <main>
      <section>
        <section>
          <ContactOne />
        </section>

        <section>
          <ContactTwo />
        </section>

        <section>
          <ContactThree />
        </section>

        <section>
          <ContactFour />
        </section>

        <section>
          <ContactFive />
        </section>

        <section>
          <ContactSix />
        </section>
      </section>
    </main>
  );
};

export default Contact;
