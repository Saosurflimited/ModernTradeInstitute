import React from "react";

const ContactFive = () => {
  const faqs = [
    {
      q: "How long does it take to get a response?",
      a: "We usually respond within 24 hours during working days.",
    },
    {
      q: "Can I visit MTI without an appointment?",
      a: "Yes, but we recommend contacting us first so we can attend to you properly.",
    },
    {
      q: "Do I need prior experience before enrolling?",
      a: "No, our programs are beginner-friendly and practical.",
    },
    {
      q: "Do you offer online training?",
      a: "Yes, we offer both physical and online training depending on the course.",
    },
  ];

  return (
    <section className="pb-14  bg-white">
      <div className=" lg:px-14 px-6 mx-auto ">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col justify-center items-center ">
          <p className="text-gray-600 mt-3">
            Quick answers before you contact us
          </p>
          <hr className="border-gray-300 border-dashed mt-2 lg:w-[21%] text-center " />
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl bg-gray-50 hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-gray-900">{item.q}</h3>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFive;
