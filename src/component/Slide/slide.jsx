import React from 'react'
import AllBrand from '../../assets/Slide/allbrand.jpg';
import Firefox from '../../assets/Slide/firefox.jpeg';
import Giants from '../../assets/Slide/giants.jpg';
import Hero from '../../assets/Slide/hero.jpg';
import Suncross from '../../assets/Slide/suncross.jpg';
import Slider from "react-slick";

const imageList = [
	{
		id: 1,
		img: AllBrand,
		title: "Welcome to, Himanshu Bicycles Hub",
		description: "My two favorite things in life are libraries and bicycles. They both move people forward without wasting anything.",
	},
	{
		id: 2,
		img: Firefox,
		title: "FireFox",
		description: "The brand is appreciated for its focus on quality, durability, and stylish designs. Firefox cycles are often seen as a great option for riders looking for an adventure or everyday commuting solution.",
	},
	{
		id: 3,
		img: Giants,
		title: "Giants",
		description: "Giant is famous for its cutting-edge technology, high-quality construction, and innovation. Their bikes are well-suited for both professional athletes and casual riders, offering exceptional performance, comfort, and durability.",
	},
	{
		id: 4,
		img: Hero,
		title: "Hero",
		description: "The brand offers a diverse range of bicycles, including kids' bikes, hybrid bikes, mountain bikes, and electric bikes. Hero is recognized for providing good value for money, catering to budget-conscious consumers while ensuring solid build quality.",
	},
	{
		id: 5,
		img: Suncross,
		title: "Suncross",
		description: "Suncross offers mountain bikes, road bikes, and hybrid bikes for both beginners and experienced cyclists. They emphasize on comfort and reliability, making their bicycles a popular choice among recreational riders and fitness enthusiasts in India.",
	},
]

const Slide = () => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: "ease-in-out",
		pauseOnHover: false,
		pauseOnFocus: true,
		slidesToShow: 1,
	};

	return (
		<div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
			{/* background pattern */}
			<div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
			{/* slide section */}
			<div className='container pb-8 sm:pb-0'>
				<Slider {...settings}>
					{imageList.map((data) => {
						return (
							<div key={data.id}>
								<div className='grid grid-cols-1 sm:grid-cols-2'>
									{/* text content section */}
									<div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
										<h1 
										data-aos="zoom-out"
										data-aos-duration="500"
										data-aos-once="true"
										className='text-5xl sm:text-6xl lg:text-7xl font-bold text-primary'>
											{data.title}
										</h1>
										<p 
										data-aos="fade-up"
										data-aos-duration="500"
										data-aos-once="100"
										className='text-2xl p-[4px] pr-10'> {data.description} </p>
										<div
										data-aos="zoom-out"
										data-aos-duration="500"
										data-aos-once="3"
										>
											<button
												className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
											>
												Order Now
											</button>
										</div>
									</div>
									{/* image section */}
									<div 
									data-aos="zoom-in"
									data-aos-once="true"
									className='order-1 sm:order-2'>
										<div className='relative z-10'>
											<img src={data.img} alt=""
												className='w-[700px] h-[700px] sm:h-[450px]  
												lg:scale-140 md:scale-90  object-contain mx-auto'
											/>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Slide;