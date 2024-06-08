import React from "react";

const StoreCard = () => {
  return (
    <>
      <h1 className="text-orange-500 font-extrabold text-4xl  mt-10 text-center">
        Easy Ways to Toingg
      </h1>
      <div className="bg-gradient-to-r from-orange-100 to-orange-200 py-8 rounded-xl shadow-lg mx-4 sm:mx-8 mb-10 mt-5">
        <h2 className="text-black font-bold text-lg ml-4 sm:ml-10">
          Explore TOINGG in
        </h2>
        <h3 className="text-orange-500 font-extrabold text-lg ml-4 sm:ml-10">
          GPT store
        </h3>
        <ul className="text-black text-sm list-disc list-inside ml-4 sm:ml-10">
          <li>Interactive Communication: Engage in single or batch calls using TOINGG GPT.</li>
          <li>Advanced Features: Leverage GPT for real-time sentiment analysis during calls.</li>
          <li>Data Export: Conveniently export call logs to CSV.</li>
          <li>Enhanced Usability: Tailored for users familiar with CSV functionalities.</li>
        </ul>
        <button
          type="button"
          className="flex justify-center items-center px-4 py-2 bg-orange-500 text-white rounded-lg ml-20 mt-8 mb-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
      Explore More
        </button>
      </div>
    </>
  );
};

export default StoreCard;
