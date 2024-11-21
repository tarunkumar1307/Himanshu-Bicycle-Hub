import React, { useState } from 'react';
import Slider from "react-slick";

const FeedbackSection = () => {
  const [feedbackList, setFeedbackList] = useState([
    { id: 1, name: 'John Doe', feedback: 'Great website! Very user-friendly.' },
    { id: 2, name: 'Jane Smith', feedback: 'I love the design. Keep it up!' },
    { id: 3, name: 'Alice Brown', feedback: 'The product quality is amazing!' },
    { id: 4, name: 'Michael Green', feedback: 'Superb customer service. Highly recommended!' },
    { id: 5, name: 'Sophia Johnson', feedback: 'Fantastic design and easy to navigate.' },
  ]);

  const [newFeedback, setNewFeedback] = useState({ name: '', feedback: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFeedback.name.trim() && newFeedback.feedback.trim()) {
      const feedbackWithId = {
        id: feedbackList.length + 1,
        ...newFeedback,
      };
      setFeedbackList((prev) => [...prev, feedbackWithId]);
      setNewFeedback({ name: '', feedback: '' });
    }
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set interval time in milliseconds
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false, // Prevent pausing on hover
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-12 px-6">
      <div className="container mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          Feedback Section
        </h1>

        {/* Feedback Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={newFeedback.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-5 py-3 border rounded-lg text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                Your Feedback
              </label>
              <textarea
                name="feedback"
                value={newFeedback.feedback}
                onChange={handleInputChange}
                placeholder="Share your feedback"
                rows="4"
                className="w-full px-5 py-3 border rounded-lg text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-lg hover:scale-105 transform transition duration-300"
            >
              Submit Feedback
            </button>
          </form>
        </div>

        {/* Feedback Slider */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-300 mb-6 text-center">
            User Feedback
          </h2>
          {feedbackList.length > 0 ? (
            <div className="flex justify-center">
              <Slider {...sliderSettings} className="w-full max-w-4xl">
                {feedbackList.map((feedback) => (
                  <div key={feedback.id} className="p-4">
                    <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg">
                      <h3 className="text-2xl font-bold text-primary mb-3">
                        {feedback.name}
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        {feedback.feedback}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400">
              No feedback submitted yet.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
