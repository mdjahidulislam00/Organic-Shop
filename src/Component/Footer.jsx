import 'react';
import { FaFacebook, FaSquareInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h3 className="text-2xl font-semibold">Organic-Shop</h3>
          <p className="mt-2">Your Smile Our Satisfaction</p>
        </div>
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Shop</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="#" className="hover:text-gray-400"><FaFacebook /> </a>
          <a href="#" className="hover:text-gray-400"> <FaSquareInstagram /> </a>
          <a href="#" className="hover:text-gray-400"><FaTwitter /> </a>
          <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
        </div>
        <div className="mt-4 lg:mt-0">
          <div className="text-center lg:text-right">
            <p>&copy; {new Date().getFullYear()} Organic-Shop. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
