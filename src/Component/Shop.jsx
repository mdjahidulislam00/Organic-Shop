import "react";
import ProductCard from "./ProductCard";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Lorem ipsum dolor ",
      price: 29.99,
      imageUrl: "https://cdn.pixabay.com/photo/2017/01/06/17/49/honey-1958464_640.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Nulla vel ",
      price: 19.99,
      imageUrl: "https://cdn.pixabay.com/photo/2021/10/10/21/52/makeup-6698881_640.jpg",
    },
    {
        id: 3,
        name: "Product 2",
        description: "Nulla vel ",
        price: 19.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        name: "Product 2",
        description: "Nulla vel ",
        price: 19.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        name: "Product 2",
        description: "Nulla vel ",
        price: 19.99,
        imageUrl: "https://via.placeholder.com/150",
      },
      {
        id: 6,
        name: "Product 2",
        description: "Nulla vel ",
        price: 19.99,
        imageUrl: "https://via.placeholder.com/150",
      },
    // Add more product objects as needed
  ];
  return (
    <div className="container mx-auto my-3">
      <h3 className="text-xl lg:text-3xl p-4 lg:p-7 font-bold"> <u>Electronic:/</u> </h3>
      <div className="mx-auto grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <h3 className="text-xl lg:text-3xl p-7 font-bold"> <u>Home Apliance:/</u> </h3>
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div> 
  );
};

export default Shop;
