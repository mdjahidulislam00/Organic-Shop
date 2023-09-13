import "react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { ImSpinner3 } from "react-icons/im";

const Shop = () => {
  const [allProducts, setAllProducts] = useState(null)
  console.log(allProducts)

  useEffect(()=>{
    const fetchData = async () =>{
      const res = await fetch('http://localhost:5000/getProducts');
      const data = await res.json();
      setAllProducts(data)
    }
    fetchData();
  }, [ ]);
  return (
    <div className="container mx-auto my-3">
      <h3 className="text-xl lg:text-3xl p-4 lg:p-7 font-bold"> <u>Electronic:</u> </h3>
      <div className="mx-auto grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 lg:pb-5 border-b-4 border-purple-500">
        { allProducts ? 
         allProducts.map((items) => <ProductCard key={items.id} items={items} /> ): <div className="flex  items-center justify-center text-5xl font-black text-purple-600  py-5"><ImSpinner3 /></div>
        }
      </div>
    </div> 
  );
};

export default Shop;
