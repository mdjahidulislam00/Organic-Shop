import "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const ProductCheckOutCard = () => {
  return (
    <div className="">
      <h3 className="text-2xl bg-gray-300 text-purple-700 font-bold text-center py-3">
        Your Cart Product List
      </h3>
      <div className="container mx-3 my-4 flex space-x-4">
        <div className="basis-3/12">
          <img className="rounded-lg"
            src="https://cdn.pixabay.com/photo/2018/01/16/10/18/headphones-3085681_1280.jpg"
            alt=""
          />
        </div>
        <div className="basis-7/12 flex flex-col">
          <div className="text-lg font-bold ">I phone 15 Pro Max</div>
          <div className="flex space-x-4 mt-1">
            <div className="text-lg font-bold text-red-600 ">$640</div>
            <div className="">
              <div className="bg-purple-500 flex space-x-2 items-center rounded-md">
                <div className="bg-purple-400 p-1 rounded hover:bg-purple-700">
                  {" "}
                  <FaMinus />
                </div>
                <div className="rounded px-1 text-md font-bold text-white">
                  1
                </div>
                <div className="bg-purple-400 p-1 rounded hover:bg-purple-700">
                  {" "}
                  <FaPlus />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-2/12 flex items-center">
            <div className=" text-2xl font-bold text-red-600">
                <RxCross1 />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCheckOutCard;
