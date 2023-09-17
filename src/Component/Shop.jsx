import "react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import spinner from '../assets/images/rainbow-spinner-loading.gif'
import { addToDb, getShoppingCart } from "./SaveAndRetriveDataLocalstorage";

const Shop = () => {
  const [allProducts, setAllProducts] = useState(null)
  const [addToCart, setAddToCart] = useState([]);
  console.log(addToCart)

  useEffect(()=>{
    const fetchData = async () =>{
      const res = await fetch('http://localhost:5000/getProducts');
      const data = await res.json();
      setAllProducts(data)
    }
    fetchData();
  }, [ ]);

  //adding data in Local Database
  const AddProductToCart =(singleProduct)=>{
      const newCartAdd = [...addToCart, singleProduct];
      setAddToCart(newCartAdd);
      addToDb (singleProduct.id)
  }

  // useEffect(()=>{
  //     const saveCartProduct = getShoppingCart();
  //     const saveCartId = Object.keys(saveCartProduct);

  //     const saveCartProducts = saveCartId.map(id =>{
  //     const saveProducts = FakeData.find(pd => pd.id === id);
  //         saveProducts.quantity =  saveCartProduct[id];
  //         return saveProducts;
  //     })
  //         setAddToCart(saveCartProducts);
  // },[])
  return (
    <div className="my-10 z-20">
      <div className="container mx-auto grid px-5 md:px-0 grid-cols-2 gap-y-5 gap-x-1 md:grid-cols-3 lg:grid-cols-4 lg:pb-5 border-b-4 border-purple-500">
        { allProducts ? 
         allProducts.map((items) => <ProductCard key={items.id} items={items} AddProductToCart={AddProductToCart} /> ): <div className="flex justify-end"> <img className="lg:w-96 lg:h-96" src={spinner} alt="" /> </div>
        }
      </div>
    </div> 
  );
};

export default Shop;
