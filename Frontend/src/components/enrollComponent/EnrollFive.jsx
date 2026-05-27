import React from "react";

const EnrollFive = () => {
  return (
    <main>
      <section className="py-14 px-4 lg:px-14 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* REQUIREMENTS */}
          <div className="bg-red-600 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-gray-50">Admission Requirements</h2>

            <ul className="space-y-3 text-gray-50">
              <li>✔ Basic English knowledge</li>
              <li>✔ Smartphone or laptop</li>
              <li>✔ Passion to learn</li>
            </ul>
          </div>

          {/* APPLICATION PROCESS */}
          <div className="bg-black text-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Application Process</h2>

            <ul className="space-y-3">
              <li>1. Submit application</li>
              <li>2. Our team contacts you</li>
              <li>3. Complete registration</li>
              <li>4. Start classes</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EnrollFive;
