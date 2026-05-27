import React from "react";

const ContactFour = () => {
  return (
    <section id="" className="py-14 px-4 bg-white">
      <div className="lg:max-w-7xl lg:px-6 mx-auto text-center  ">
        <div className="text-center mb-12 flex flex-col justify-center items-center">
          <p className="text-gray-600">
            We are located in Lagos, Nigeria. Come visit us for inquiries and
            admissions.
          </p>
          <hr className="border-gray-300 border-dashed mt-2 lg:w-[44%] text-center " />
        </div>

        <div className="w-full h-96 rounded-xl overflow-hidden shadow">
          <iframe
            title="MTI Location"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactFour;
