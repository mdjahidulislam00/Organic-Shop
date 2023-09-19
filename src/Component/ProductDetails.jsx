import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import useCart from "./CartCRUDHandeling";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const { cart, handleAddToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/getProductById/${id}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data))
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [id]);

  const handleAddProduct = () => {
    handleAddToCart(productDetails)
  }
  return (
    <div className="bg-slate-100 border rounded-lg m-4">
      {productDetails ? (
        <div className="container mx-auto">
          <div className="lg:flex">
            <div className="flex items-center justify-center m-5 lg:w-1/2">
              <img
                className="rounded-lg shadow-lg w-full max-w-lg mx-auto"
                src={productDetails.img}
                alt="product"
              />
            </div>
            <div className="lg:w-1/2 p-5">
              <div className="name">
                <div className="text-xl lg:text-2xl font-bold text-purple-600">
                  {productDetails.name}
                </div>
                <div className="flex items-center mt-2">
                  <div className="text-yellow-500 flex text-lg">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <AiFillStar key={star} />
                    ))}
                  </div>
                  <div className="text-sm pt-2 text-gray-500">
                    ({productDetails.ratingsCount})
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-center lg:text-left my-3 border-b-4 border-purple-400">
                  Specifications:
                </h3>
                <div className="grid grid-cols-2 text-center lg:text-left gap-2">
                  <div className="text-xl font-bold py-2">Category :</div>
                  <div className="text-gray-800 text-lg font-semibold py-2">
                    {productDetails.category}
                  </div>
                  <div className="text-xl font-bold py-2">Seller :</div>
                  <div className="text-gray-800 text-lg font-semibold py-2">
                    {productDetails.seller}
                  </div>
                  <div className="text-xl font-bold py-2">Stock :</div>
                  <div className="text-gray-800 text-lg font-semibold py-2">
                    {productDetails.stock}
                  </div>
                  <div className="text-xl font-bold py-2">Shipping cost :</div>
                  <div className="text-gray-800 text-lg font-semibold py-2">
                    {productDetails.shipping}
                  </div>
                </div>
                <div className="flex justify-start space-x-8 mt-6 lg:mt-12">
                  <button onClick={handleAddProduct} className="bg-blue-500 text-xl text-white py-2 px-7 lg:px-12 rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                  <button className="bg-purple-500 text-xl text-white py-2 px-7 lg:px-12 rounded hover:bg-purple-700">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="decription bg-white rounded-md m-10 p-5">
            <span className="text-2xl font-bold pb-5">Description</span>
            <p className="text-justify text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Assumenda ullam temporibus totam quisquam minus fugit 
               illo? Ipsa, aspernatur neque. Officiis nesciunt cumque
                praesentium exercitationem. Ipsum nulla, eius 
                reprehenderit harum error consectetur vel corporis
                 ea accusamus labore qui enim, consequatur sapiente.
            </p>
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex items-center justify-center py-10 text-7xl text-purple-800">
          <FaSpinner />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
