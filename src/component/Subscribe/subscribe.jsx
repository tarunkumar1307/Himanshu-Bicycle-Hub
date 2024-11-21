import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    // Subscribe.jsx
<div
  data-aos="zoom-in"
  className="text-white bg-gradient-to-r from-primary to-secondary"
>
  <div className="container py-12 px-6 md:px-0 backdrop-blur-sm">
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Heading and Paragraph centered */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-gray-950 text-center mb-4">
        Get Notified About New Products
      </h1>
      <p className="text-center text-gray-200 text-lg mb-8">
        Stay up to date with the latest products, exclusive offers, and promotions.
      </p>

      <div className="relative mb-8">
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-6 py-4 rounded-full focus:outline-none text-gray-900  dark:placeholder-gray-400 placeholder-gray-600 transition duration-200 ease-in-out focus:ring-2 focus:ring-primary"
        />

        {isSubscribed && (
          <p className="text-green-500 text-md mt-3 text-center font-semibold">
            Thank you for subscribing!
          </p>
        )}
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSubscribe}
          className="text-center cursor-pointer rounded-full bg-white dark:bg-gray-800 text-gray-950 dark:text-white py-3 px-8 transform transition duration-300 ease-in-out hover:scale-95 focus:outline-none shadow-md hover:shadow-xl"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default Subscribe;
