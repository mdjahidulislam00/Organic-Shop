import "react";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const {id} = useParams();
  console.log(id)
  const [productDetails, setProductDetails] = useState();

  // Find product using id
  useEffect(() => {
    fetch(`http://localhost:5000/getProductById/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, [id]);

  return (
    <div className=" bg-slate-100 border rounded-lg m-4">
      {productDetails ? (
        <div className="container mx-auto">
          <div className=" main-Section lg:flex">
            <div className="flex items-center justify-center m-5 lg:basis-5/12">
              <img
                className="rounded-lg shadow-lg lg:w-96 lg:h- m-4"
                src={productDetails.img}
                alt="product Image"
              />
            </div>
            <div className="lg:basis-6/12 p-5">
              <div className="name flex-col justify-center">
                <div className="text-xl lg:text-2xl font-bold text-purple-600">
                  {productDetails.name}
                </div>
                <div className="flex items-center mt-2">
                  <div className="text-yellow-500 flex text-lg">
                    {
                      productDetails.ratings == 1 && <AiFillStar /> || productDetails.ratings == 2 && <span className="flex"><AiFillStar /><AiFillStar /> </span>
                      || productDetails.ratings == 3 && <span className="flex"><AiFillStar /><AiFillStar /><AiFillStar /></span>
                      || productDetails.ratings == 4 && <span className="flex"><AiFillStar /><AiFillStar /><AiFillStar /> <AiFillStar /></span>
                      || productDetails.ratings == 5 && <span className="flex"><AiFillStar /><AiFillStar /><AiFillStar /> <AiFillStar /> <AiFillStar /></span>

                    }
                  </div>
                  <div className="text-sm pt-2 text-gray-500">({productDetails.ratingsCount})</div>
                </div>
              </div>
              <div className=" mt-8 w-96 ">
                <h3 className="text-xl font-semibold text-center lg:text-left my-3 border-b-4 border-purple-400">
                  Specifications:
                </h3>
                <div className="grid grid-cols-2 text-center lg:text-left  gap-2">
                  {/* Category */}
                  <div className=" text-xl font-bold py-2">Category :</div>
                  <div className="text-gray-800 text-lg font-semibold py-2">
                    {productDetails.category}
                  </div>
                  {/* Seller */}
                  <div className=" text-xl font-bold py-2">Seller :</div>
                  <div className="text-gray-800 text-lg font-semibold py-2">
                    {productDetails.seller}
                  </div>
                  {/* Stock */}
                  <div className=" text-xl font-bold py-2">Stoke :</div>
                  <div className="text-gray-800 text-lg font-semibold py-2">
                    {productDetails.stock}
                  </div>
                  {/* Shipping */}
                  <div className=" text-xl font-bold py-2">Shipping cost :</div>
                  <div className="text-gray-800 text-lg font-semibold py-2">
                    {productDetails.shipping}
                  </div>
                </div>
                <div className="flex justify-around mt-6 lg:mt-12 ">
                  <button className="bg-blue-500 text-xl hover:bg-blue-700 text-white  py-2 px-7 lg:px-12 rounded">
                    Add to Cart
                  </button>
                  <button className="bg-purple-500 text-xl hover:bg-purple-700 text-white py-2 px-7 lg:px-12 rounded">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="decription">
            <div className="bg-white rounded-md m-10 p-5">
              <span className="text-2xl font-bold pb-5">Description</span>
              <p className="text-justify text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, laboriosam? Totam sit, maiores porro culpa harum facere
                animi tempore asperiores ex aspernatur fugit possimus quisquam
                velit repudiandae accusamus nemo, sequi modi laborum mollitia
                dolore vel necessitatibus expedita illum? Optio, natus?
                Accusantium odit reprehenderit culpa mollitia ducimus rem fugit
                maiores ut.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex items-center justify-center py-10 text-7xl text-purple-800">
          {" "}
          <FaSpinner />{" "}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
