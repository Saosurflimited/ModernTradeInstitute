import React from "react";

const ContactThree = () => {
  return (
    <section className="py-20  bg-gray-50">
      <div className="w-full px-4 lg:px-14 mx-auto flex flex-col md:flex-row gap-10 items-center lg:justify-between">
        
        {/* FORM SIDE */}
        <div className="bg-white lg:p-8 p-4 rounded-2xl shadow w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center mb-8">
            Send Us a Message
          </h2>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-500 w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-500 w-full"
              />
            </div>

            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 border rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="bg-red-600 text-white py-3 rounded-lg hover:bg-black transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* IMAGE SIDE */}
        <div className="hidden md:block text-center w-full md:w-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1681487094055-8c1108811325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
            alt="Contact MTI"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />

          {/* TEXT UNDER IMAGE */}
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-gray-900">
              We’re Here to Help You Succeed
            </h3>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              Our team responds quickly to all inquiries. Whether you want to
              enroll, ask questions, or explore programs — we’re ready to guide
              you.
            </p>

            <p className="mt-1 text-red-600 font-medium">
              Expect a response within 24 hours — we’re committed to helping you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactThree;