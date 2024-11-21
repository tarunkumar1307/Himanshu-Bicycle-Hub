import React from 'react'
import { Link } from 'react-router-dom';
import FireFox1 from '../../assets/FireFox/mountananeo275D.jpg';
import FireFox4 from '../../assets/FireFox/mountana29D.jpg';
import Suncross1 from '../../assets/Suncross/BIKE.jpg';
import Hero1 from '../../assets/Hero/Blunt.jpg';
import Reliegh1 from '../../assets/Reliegh/700ccaleum.jpg';

import { FaStar } from 'react-icons/fa6';

const ProductData = [
  {
    id: 1,
    img: FireFox1,
    title: 'Mountananeo 27.5 D',
    rating: 4.6,
    color: "Blue-Gray",
    aosDelay: 100,
  },
  {
    id: 2,
    img: Suncross1,
    title: "ROUTE 3.0 700C S/S (Rigid Fork)",
    rating: 4.3,
    color: "Black",
    aosDelay: 200,
  },
  {
    id: 3,
    img: Hero1,
    title: "Hero Blunt",
    rating: 4.2,
    color: "Blue, Red",
    aosDelay: 300,
  },
  {
    id: 4,
    img: FireFox4,
    title: "Firefox Mountana 29 D",
    rating: 4.8,
    color: "Gray",
    aosDelay: 400,
  },
  {
    id: 5,
    img: Reliegh1,
    title: "RC900 Caleum 700c",
    rating: 4.6,
    color: "Black",
    aosDelay: 500,
  },
];

const Product = () => {
  return (
    <div className='mt-14 mb-12 '>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-xl text-primary'> Top Selling Products </p>
          <h1 data-aos="fade-up" className='text-4xl font-bold'> Products </h1>
        </div>
        {/* body section */}
        <div>
          <div
            className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'
          >
            {/* card section */}
            {ProductData.map((data) => {
              return (
                <Link to={`/product/${data.id}`} onClick={() => window.scrollTo(0, 0)} key={data.id}>
                  <div data-aos="fade-up" data-aos-delay={data.aosDelay} className="space-y-3">
                    <img src={data.img} alt={data.title} className="h-[200px] w-[200px] rounded-md" />
                    <div>
                      <h3 className="font-semibold">{data.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{data.color}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* view all button */}
          <div className='flex justify-center'>
            <button className='text-center mt-10 cursor-pointer bg-gradient-to-r from-primary to-secondary  rounded-full text-white dark:text-gray-950 py-2 px-9 hover:scale-105'>
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product