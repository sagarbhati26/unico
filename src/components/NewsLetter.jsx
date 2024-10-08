import React from "react";

const NewsLetter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <p className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-all duration-300 mb-6">
        Subscribe and get 20% off
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <input
          type="email"
          placeholder="Enter Your Email"
          className="w-full sm:w-auto px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 transition-all duration-300"
          required
        />
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-all duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
