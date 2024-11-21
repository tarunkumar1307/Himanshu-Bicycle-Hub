import React from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import FireFox1 from '../../assets/FireFox/mountananeo275D.jpg';
import FireFox4 from '../../assets/FireFox/mountana29D.jpg';
import Suncross1 from '../../assets/Suncross/BIKE.jpg';
import Hero1 from '../../assets/Hero/Blunt.jpg';
import Reliegh1 from '../../assets/Reliegh/700ccaleum.jpg';

const productData = [
  { 
    id: 1, 
    title: "Mountananeo 27.5 D", 
    img: FireFox1,
    price: 12500, 
    rating: 4.6, 
    color: "Blue-Gray", 
    description: "High quality mountain bike with durable frame and smooth gear shifts." 
  },
  { 
    id: 2, 
    title: "Mountananeo 27.5 D", 
    img: FireFox1,
    price: 12500, 
    rating: 4.6, 
    color: "Blue-Gray", 
    description: "High quality mountain bike with durable frame and smooth gear shifts." 
  },
  { 
    id: 3, 
    title: "Mountananeo 27.5 D", 
    img: FireFox1,
    price: 12500, 
    rating: 4.6, 
    color: "Blue-Gray", 
    description: "High quality mountain bike with durable frame and smooth gear shifts." 
  },
  { 
    id: 4, 
    title: "Mountananeo 27.5 D", 
    img: FireFox1,
    price: 12500, 
    rating: 4.6, 
    color: "Blue-Gray", 
    description: "High quality mountain bike with durable frame and smooth gear shifts." 
  },
  { 
    id: 5, 
    title: "Mountananeo 27.5 D", 
    img: FireFox1,
    price: 12500, 
    rating: 4.6, 
    color: "Blue-Gray", 
    description: "High quality mountain bike with durable frame and smooth gear shifts." 
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-gray-700 dark:text-gray-300">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 dark:text-gray-100 flex justify-center items-center">
      <div className="container mx-auto mt-8 mb-8 md:mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={product.img} alt={product.title} className="w-full h-auto rounded-lg shadow-md" />
            <div className="grid grid-cols-4 gap-2 mt-4">
              <img src={FireFox1} alt="Thumbnail 1" className="h-24 w-24 rounded-md cursor-pointer" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{product.title}</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">{product.color}</p>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="text-lg font-semibold">{product.rating}</span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-4">₹{product.price}</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-4">{product.description}</p>

            <button className="mt-6 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:scale-105 transition-transform">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
