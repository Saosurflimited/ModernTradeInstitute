import { Link } from "react-router-dom";

const ContactSix = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        We’re Here to Help You Succeed
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        Reach out anytime — we respond quickly and guide you through enrollment,
        training, and choosing the right program for your goals.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/programs"
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          View Programs
        </Link>

        <a
          href="#contact-two"
          className="border border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-black hover:text-white transition"
        >
          Contact Us
        </a>
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Fast response • Beginner-friendly support • Career guidance included
      </p>
    </section>
  );
};

export default ContactSix;
