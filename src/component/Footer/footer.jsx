import React from 'react';
import FooterLogo from "../../assets/logo.png";
import {
  FaInstagram,
  FaYoutube,
  FaLocationArrow,
  FaMobileAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "About Us",
    link: "/About",
  },
  {
    title: "Feedback",
    link: "/feedbackpage",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-gradient-to-r from-gray-700 to-gray-950 pt-12">
      <div className="container">
        <div
          // data-aos="zoom-in"
          className="grid md:grid-cols-3 pb-16 pt-5 gap-10"
        >
          {/* Company details */}
          <div className="py-6 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-primary">
              <img src={FooterLogo} alt="Logo" className="max-w-[80px]" />
              Himanshu Bicycles Hub
            </h1>
            <p className="text-gray-300">
              My two favorite things in life are libraries and bicycles. They both move people forward without wasting anything.
            </p>
          </div>

          {/* Footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:pl-10">
            <div>
              <h1 className="sm:text-2xl text-lg font-bold mb-4">Important Links</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200" target='_self'
                    key={link.title}
                  >
                    <Link to={link.link} onClick={() => window.scrollTo(0, 0)}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social links and contact information */}
          <div className="md:pl-[70px]">
            <div className="flex items-center gap-6 mt-6">
              <a
                href="https://www.instagram.com/himanshu_bicycles_hub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-3xl hover:text-primary hover:translate-x-1  transition duration-300" />
              </a>
              <a
                href="https://www.youtube.com/@Himanshu_Bicycles_Hub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-3xl hover:text-primary hover:translate-x-1  transition duration-300" />
              </a>
            </div>
            <div className="mt-8">
              <div className="flex items-center gap-4 mb-6">
                <FaLocationArrow className="text-xl text-primary" />
                <a
                  href="https://maps.app.goo.gl/kJUjZSpQ6JEzVZSf9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 font-semibold hover:underline"
                >
                  Sohna Rd, U.I.T., <br /> Bhiwadi, Rajasthan - 301019
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaMobileAlt className="text-xl text-primary" />
                <a
                  href="tel:+919149254358"
                  className=" font-semibold hover:underline"
                >
                  +91 9149254358
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Footer;
