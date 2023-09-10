import "react";
import { AiFillStar } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ProductDetails = () => {
  return (
    <div className="mx-auto bg-gray-200 py-5 lg:flex">
      <div className=" m-5 lg:basis-5/12">
        <img
          className="rounded-lg"
          src="https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681_1280.jpg"
          alt="product Image"
        />
      </div>
      <div className="mx-5 lg:mt-10 lg:basis-7/12">
        <div className="name flex justify-between">
          <div className="text-xl font-bold text-purple-600">
            iphone 15 Pro Max
          </div>
          <div className="text-purple-500 flex items-center">
            {" "}
            InStoke <FaLocationDot />
          </div>
        </div>
        <div className="ratting-brand flex justify-between mt-2">
          <div>
            {" "}
            <span className="font-bold">Brand:</span> iphone
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 flex">
              <AiFillStar /> <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            <span>(120)</span>
          </div>
        </div>
        <div className="price flex justify-between items-center mt-6 lg:mt-10  ">
          <div className="text-2xl font-bold  text-red-500 ">$640</div>
          <div className="bg-purple-500 rounded flex space-x-2 items-center">
            <div className="bg-purple-400 p-2 lg:p-3 rounded hover:bg-purple-700">
              {" "}
              <FaMinus />
            </div>
            <div className="rounded px-1 lg:px-2 text-xl font-bold text-white">1</div>
            <div className="bg-purple-400 p-2 lg:p-3 rounded hover:bg-purple-700">
              {" "}
              <FaPlus />{" "}
            </div>
          </div>
          <div className="text-2xl font-bold  text-red-500">$640</div>
        </div>
        <div className="flex justify-around  mt-6 lg:mt-16">
          <button className="bg-blue-500 text-xl hover:bg-blue-700 text-white  py-2 px-7 lg:px-12 rounded">
            Add to Cart
          </button>
          <button className="bg-purple-500 text-xl hover:bg-purple-700 text-white py-2 px-7 lg:px-12 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
