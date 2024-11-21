import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/Scroll/scroll';
import Navbar from './component/Navbar/navbar';
import LoginPage from './component/Login/login';
import SignUp from './component/Login/signup';
import Slide from './component/Slide/slide';
import Product from './component/Product/product';
import Banner from './component/Banner/banner';
import Subscribe from './component/Subscribe/subscribe';
import FeedbackSection from './component/Feedback/feedback';
import FeedbackPage from './component/Feedback/feedbackpage';
import Footer from './component/Footer/footer';
import AOS from 'aos';
import "aos/dist/aos.css";
import Contact from './component/Contact/contact';  
import About from './component/About/about';  
import Cart from './component/Cart/cart';
import ProductDetails from './component/ProductDetails/productdetails';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
              <Slide />
              <Product />
              <Banner />
              <FeedbackSection />
              <Subscribe />
            </div>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/feedback" element={<FeedbackSection />} />
        <Route path="/feedbackpage" element={<FeedbackPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
