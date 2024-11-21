import React from 'react';
import { FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'; 

const Contact = () => {
  return (
    <div className="py-16 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto text-center space-y-6">

        <h1 className="text-3xl sm:text-5xl font-extrabold text-primary ">
          Himanshu Bicycles Hub
        </h1>
        
        <div className="mt-12 space-y-8">
          <div className="text-gray-700 dark:text-gray-300">
            <h2 className="text-3xl font-semibold">Get In Touch</h2>
            <p className="mt-4 text-lg">We're here to help! Reach out to us for any queries, feedback, or support.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            <div className="flex items-center justify-center gap-4 text-center">
              <i className="text-3xl">📍</i>
              <div className="text-gray-700 dark:text-gray-300">
                <h3 className="font-bold">Our Address</h3>
                <p>
                  <a 
                    href="https://maps.app.goo.gl/kJUjZSpQ6JEzVZSf9" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary font-semibold hover:underline"
                  >
                    Sohna Rd, U.I.T., <br /> Bhiwadi, Rajasthan - 301019
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-center">
              <i className="text-3xl">📞</i>
              <div className="text-gray-700 dark:text-gray-300">
                <h3 className="font-bold">Contact Number</h3>
                <p>
                  <a 
                    href="tel:+919149254358" 
                    className="text-primary font-semibold hover:underline"
                  >
                    +91 9149254358
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-center">
              <i className="text-3xl">✉️</i>
              <div className="text-gray-700 dark:text-gray-300">
                <h3 className="font-bold">Email Us</h3>
                <p>
                  <a 
                    href="mailto:himanshubicycleshub1212@gmail.com" 
                    className="text-primary font-semibold hover:underline"
                  >
                    himanshubicycleshub1212@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-8">
            <h2 className="text-3xl font-semibold text-primary dark:text-white">Follow Us</h2>
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.instagram.com/himanshu_bicycles_hub" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-4xl text-primary hover:text-secondary transition duration-300" />
              </a>
              <a 
                href="https://www.youtube.com/@Himanshu_Bicycles_Hub" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-4xl text-primary hover:text-secondary transition duration-300" />
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-primary dark:text-white">Contact Us</h2>
            <form className="mt-8 max-w-2xl mx-auto space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  className="w-full px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                ></textarea>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-primary text-white py-3 px-8 rounded-full transition duration-300 ease-in-out hover:bg-secondary focus:outline-none shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
