import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaSmile } from 'react-icons/fa';
import img1 from '../../assets/Feedback/Screenshot 2024-11-21 210009.png';
import img2 from '../../assets/Feedback/Screenshot 2024-11-21 210022.png';
import img3 from '../../assets/Feedback/Screenshot 2024-11-21 210045.png';
import img4 from '../../assets/Feedback/Screenshot 2024-11-21 210059.png';
import img5 from '../../assets/Feedback/Screenshot 2024-11-21 210211.png';
import img6 from '../../assets/Feedback/Screenshot 2024-11-21 210222.png';

const feedbackData = [
  { id: 1, message: 'Great experience! Highly recommended.', name: 'Naveen' },
  { id: 2, message: 'Amazing customer service and quality!', name: 'Jai Kaushik' },
  { id: 3, message: 'Very satisfied with the products.', name: 'Abhishek Dayma' },
];

const happyCustomers = [
  { id: 1, name: 'Aryan', img: img1 },
  { id: 2, name: 'Divender', img: img2 },
  { id: 3, name: 'Harender, Ajay', img: img3 },
  { id: 4, name: 'Aayushi', img: img4 },
  { id: 5, name: 'Vishal', img: img5 },
  { id: 6, name: 'Khushi, Riddhi', img: img6 },
];

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    message: '',
  });
  const [feedbackList, setFeedbackList] = useState([...feedbackData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.name && feedback.message) {
      setFeedbackList([{ id: feedbackList.length + 1, ...feedback }, ...feedbackList]);
      setFeedback({ name: '', message: '' });
      alert('Feedback submitted!');
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-950 p-6">
      <h1 className='text-center text-5xl font-extrabold text-primary'>Feedback</h1> <br />
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">What Our Customers Say</h2>
        <Slider {...sliderSettings} className="mx-auto max-w-lg">
          {feedbackList.map((item) => (
            <div key={item.id} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
              <p className="text-gray-700 dark:text-gray-300 italic">"{item.message}"</p>
              <p className="text-right font-semibold text-gray-800 dark:text-gray-100">- {item.name}</p>
            </div>
          ))}
        </Slider>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">Happy Customers</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {happyCustomers.map((customer) => (
            <div key={customer.id} className="text-center">
              <img
                src={customer.img}
                alt={customer.name}
                className="w-28 h-28 rounded-full mx-auto mb-2"
              />
              <p className="text-lg font-medium text-gray-800 dark:text-gray-100">{customer.name}</p>
              <FaSmile className="text-yellow-500 mx-auto mt-1" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-lg mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">Leave Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={feedback.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-gray-200"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">Feedback</label>
            <textarea
              name="message"
              value={feedback.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-gray-200"
              placeholder="Your Feedback"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full text-white py-2 rounded-md transition duration-300 bg-gradient-to-r from-primary to-secondary"
          >
            Submit Feedback
          </button>
        </form>
      </section>
    </div>
  );
};

export default FeedbackPage;
