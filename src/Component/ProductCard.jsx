import "react";
import { AiFillStar } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductCard = ({items, AddProductToCart}) => {
  // eslint-disable-next-line react/prop-types
  const { _id, name, img, price, seller, stock, ratings, ratingsCount } = items;
  return (
    <div className="overflow-hidden border rounded-lg cursor-pointer hover:border hover:border-purple-300 hover:shadow-md hover:shadow-purple-400  duration-300">
      <div className="container mx-auto">
        <Link to={"/productDetails/" + _id}>
          <div className="rounded-lg">
            <img
              className="w-full h-52 lg:h-60  hover:scale-110 duration-300"
              src={img}
              alt={name}
            />
          </div>
        </Link>
        <Link to={"/productDetails/" + _id}>
          <div className="mx-2">
            <div className="w-full h-16 text-center text-lg font-bold py-2">
              {name}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center text-purple-500">
                <ImLocation2 />
                <span className="text-sm">InStock</span>
                <span className="text-gray-500 text-[10px] ml-1 mt-2">
                  ({stock})
                </span>
              </div>
              <div className="flex text-yellow-500 text-[12px]">
                {(ratings == 1 && <AiFillStar />) ||
                  (ratings == 2 && (
                    <span className="flex">
                      <AiFillStar />
                      <AiFillStar />{" "}
                    </span>
                  )) ||
                  (ratings == 3 && (
                    <span className="flex">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </span>
                  )) ||
                  (ratings == 4 && (
                    <span className="flex">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar /> <AiFillStar />
                    </span>
                  )) ||
                  (ratings == 5 && (
                    <span className="flex">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar /> <AiFillStar /> <AiFillStar />
                    </span>
                  ))}
                <span className="text-gray-500 text-[10px] ml-1">
                  ({ratingsCount})
                </span>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="brand">
                <span className="font-semibold">Seller:</span>{" "}
                <span>{seller}</span>
              </div>
              <div className=" text-lg font-semibold text-red-400">
                ${price}
              </div>
            </div>
          </div>{" "}
        </Link>
        <div className="my-1 mx-2">
          <button
            onClick={() =>AddProductToCart(items)}
            className="w-full h-10 rounded-lg bg-purple-500 text-white text-md font-semibold hover:bg-purple-700 duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
