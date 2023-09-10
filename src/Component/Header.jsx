import "react";
import { useState } from "react";
import { FaBars, FaShoppingBag, FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <div className="px-5 bg-purple-500 sticky top-0">
      <nav className="container mx-auto ">
        <div className="flex items-center justify-between lg:justify-around h-16 lg:h-20">
          <div
            className="flex md:hidden text-gray-300 text-2xl"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {" "}
            {toggleMenu ? <FaBars /> : <RxCross1 />}{" "}
          </div>
          <div className="text-gray-200 text-2xl lg:text-3xl  font-semibold cursor-pointer"> <Link to='/home'>Organic-Shop</Link> </div>
          {/* <div className="hidden lg:flex">
            <SearchBar />
          </div> */}
          <div className='hidden md:flex text-white text-lg space-x-6'>
            <Link to='/home'><a href="" className="hover:text-gray-300">Home</a></Link>
            <Link to='/shop'><a href="" className="hover:text-gray-300">Shop</a></Link>
            <Link to='/order'><a href="" className="hover:text-gray-300">Orders</a></Link>
            <Link to='/admin'><a href="" className="hover:text-gray-300">Admin</a></Link>
          </div>
          <div className="flex space-x-4 md:space-x-7">
            <div className="text-white text-2xl flex relative cursor-pointer hover:text-gray-300">
            <Link to='/cart'>  <FaShoppingBag /></Link>
              <span className="text-sm bg-purple-800 rounded-full p-[1px] ml-5 text-gray-300 font-bold absolute ">
                0
              </span>
            </div>
            <span className="text-white text-2xl cursor-pointer hover:text-gray-300"> 
              <Link to='/signUp' ><FaUser /></Link>
            </span>
          </div>
        </div> 
      </nav>
      {/* responsive mobile and tablet Menu */}
      <div className={
            "w-52 sm:w-60 absolute text-white text-center text-lg sm:text-xl bg-purple-600 flex flex-col space-y-3 md:space-y-6 p-5 justify-start  " +
            (toggleMenu ? "hidden" : "block")
          }>
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">Orders</a>
        <a href="">Admin</a>
      </div>
    </div>
  );
};

export default Header;
