import 'react';
import { FaFacebook, FaSquareInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-6 px-5">
      <div className="container mx-auto my-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left mb-4 lg:mb-0 basis-4/12">
          <h3 className="text-2xl font-semibold">Organic-Shop</h3>
          <p className="mt-2">Your Smile Our Satisfaction</p>
          <address>
            House#8, Road#18, Block C,
             Section 13
             Mirpur Dhaka Bangladesh
          </address>
        </div>
        <div className="flex lg:flex-col basis-4/12 lg:space-y-2 lg:text-center space-x-6 lg:space-x-0 lg: mt-4 lg:mt-0">
          <h3 className='text-lg text-purple-400'>Quick Link</h3>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Shop</a>
          <a href="#" className="hover:text-gray-400">About us</a>
          <a href="#" className="hover:text-gray-400">Contact us</a>
        </div>
        <div className="flex items-center space-x-6 my-4 lg:mt-0 basis-4/12">
          <h3 className='text-lg font-semibold text-purple-400'>Follow on:</h3>
          <a href="#" className="hover:text-gray-400"><FaFacebook /> </a>
          <a href="#" className="hover:text-gray-400"> <FaSquareInstagram /> </a>
          <a href="#" className="hover:text-gray-400"><FaTwitter /> </a>
          <a href="#" className="hover:text-gray-400"><FaYoutube /></a>
        </div>
      </div>
      <div className="g:mt-0 flex justify-center border-t-2 py-3">
          <div className="text-center lg:text-right">
            <p>&copy; {new Date().getFullYear()} Organic-Shop. All rights reserved.</p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
