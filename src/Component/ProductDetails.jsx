import "react";
import { AiFillStar } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ProductDetails = () => {
  return (
    <div className="mx-auto bg-gray-200 py-5">
      <div className=" m-5">
        <img
          className="rounded-lg"
          src="https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681_1280.jpg"
          alt="product Image"
        />
      </div>
      <div className="mx-5 ">
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
        <div className="price flex justify-between items-center mt-6   ">
          <div className="text-2xl font-bold  text-red-500 ">$640</div>
          <div className="bg-purple-500 flex space-x-2 items-center">
            <div className="bg-purple-400 p-2 rounded hover:bg-purple-700">
              {" "}
              <FaMinus />
            </div>
            <div className="rounded px-1 text-xl font-bold text-white">1</div>
            <div className="bg-purple-400 p-2 rounded hover:bg-purple-700">
              {" "}
              <FaPlus />{" "}
            </div>
          </div>
          <div className="text-2xl font-bold  text-red-500">$640</div>
        </div>
        <div className="flex justify-around  mt-6">
          <button className="bg-blue-500 text-xl hover:bg-blue-700 text-white  py-2 px-7 rounded">
            Add to Cart
          </button>
          <button className="bg-purple-500 text-xl hover:bg-purple-700 text-white py-2 px-7 rounded">
            Buy Now
          </button>
        </div>
        <div className="productDetails mt-8">
          <div className="text-xl font-bold text-center py-3 bg-gray-400">
            Iphone 15 pro max
          </div>
          <div className="decription mt-5">
            <p className="text-justify px-2">
              Superior sound quality. With DSP intelligent noise reduction
              technology, the item can deliver high-quality music and an
              enjoyable listening experience for compatible devices. Bluetooth
              V4.1. Easy to pair with your smartphones, tablets, and other
              Bluetooth-enabled devices. This Bluetooth wireless headset can
              connect two mobile phones at the same time. It means you can well
              give consideration to your life and work. Strong Wireless Signal.
              You can enjoy skip-free music at a 10-meter working distance.
              Ultra-long battery life. The Bluetooth headphone supports up to
              2-3 hours of talking or playing music with a 60mAh polymer Li-ion
              battery for off full charge. It also can tell you the caller's
              number automatically when calling. Make your life more convenient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
