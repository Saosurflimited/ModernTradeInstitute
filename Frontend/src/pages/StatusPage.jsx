import React, { useState } from "react";

const StatusPage = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();

    const fakeDB = {
      "john@gmail.com": {
        name: "John Doe",
        status: "Approved",
        message: "Welcome to MTI! Your admission is confirmed.",
      },
      "mary@gmail.com": {
        name: "Mary James",
        status: "Pending",
        message: "Your application is under review.",
      },
    };

    setResult(
      fakeDB[input] || {
        name: "Not Found",
        status: "Not Found",
        message: "No application found for this email.",
      },
    );
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700 border-green-300";
      case "Pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "Rejected":
        return "bg-red-100 text-red-700 border-red-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <main className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl overflow-hidden">
        {/* HEADER */}
        <div className="bg-black text-white text-center py-6 px-4">
          <h1 className="text-2xl font-bold">Application Status</h1>
          <p className="text-sm text-gray-300 mt-1">
            Enter your email to check your MTI application
          </p>
        </div>

        {/* FORM */}
        <div className="p-6 sm:p-8">
          <form onSubmit={handleCheck} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email address"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-500"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 active:scale-[0.99] transition"
            >
              Check Status
            </button>
          </form>

          {/* RESULT CARD */}
          {result && (
            <div className="mt-6 border rounded-xl p-5 bg-gray-50 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-800">
                {result.name}
              </h2>

              <div
                className={`inline-block mt-2 px-3 py-1 text-sm rounded-full border ${getStatusStyle(
                  result.status,
                )}`}
              >
                {result.status}
              </div>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {result.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default StatusPage;
