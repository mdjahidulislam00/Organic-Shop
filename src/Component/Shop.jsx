import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import spinner from "../assets/images/rainbow-spinner-loading.gif";
import useCart from "./CartCRUDHandeling";

const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  const { cart, handleAddToCart } = useCart();

  // Read all Data from server
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/getProducts");
      const data = await res.json();
      setAllProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="my-10 z-20">
      <div className="container mx-auto grid px-5 md:px-0 grid-cols-2 gap-y-5 gap-x-1 md:grid-cols-3 lg:grid-cols-4 lg:pb-5 border-b-4 border-purple-500">
        {allProducts.length > 0 ? (
          allProducts.map((items) => (
            <ProductCard
              key={items._id}
              items={items}
              AddProductToCart={handleAddToCart}
            />
          ))
        ) : (
          <div className="flex justify-end">
            <img className="lg:w-96 lg:h-96" src={spinner} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
