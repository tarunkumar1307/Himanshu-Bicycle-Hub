import React from 'react';
import Owner from '../../assets/Owner.png'

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950 py-16 px-6">
      <div className="container mx-auto text-center space-y-12">

        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary">
          About Himanshu Bicycles Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Your go-to destination for quality bicycles and accessories
        </p>

        <div className="mt-12 space-y-6">
          <h2 className="text-3xl font-semibold text-primary dark:text-white">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            At Himanshu Bicycles Hub, our mission is to provide high-quality bicycles and accessories that make cycling a joy. We strive to offer products that cater to cyclists of all skill levels, from beginners to experienced riders. Our goal is to ensure that every ride is comfortable, safe, and fun.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-3xl font-semibold text-primary dark:text-white">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Founded by Himanshu Vashisth, Himanshu Bicycles Hub started as a small local shop and has now grown to become one of the most trusted names in the cycling community. With years of experience in the industry, we continue to provide expert advice and high-quality products to our valued customers.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <h2 className="text-3xl font-semibold text-primary dark:text-white">
            Our Values
          </h2>
          <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            <li> 🏆 <b> Quality </b>  <br /> We only stock the highest quality bicycles and accessories.</li>
            <li>🤝 <b>Customer Satisfaction</b> <br /> We aim to provide exceptional customer service and support.</li>
            <li>🌍 <b> Sustainability </b><br /> We promote eco-friendly cycling practices and products.</li>
            <li>🚴‍♂️ <b> Passion for Cycling </b><br /> We believe in the power of cycling to transform lives and communities.</li>
          </ul>
        </div>

        <div className="mt-12 space-y-6 items-center justify-center">
          <h2 className="text-3xl font-semibold text-primary dark:text-white">
            Owned by
          </h2>
          <div className="flex justify-center">
            <div className="text-center">
              <img
                src={Owner}
                alt="Himanshu Vashisth"
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
                Himanshu Vashisth
              </h3>
              {/* <p className="text-gray-600 dark:text-gray-400">Founder</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
