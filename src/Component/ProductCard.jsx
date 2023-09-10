import 'react';

const ProductCard = (props) => {
    const{name, imageUrl, description, price} = props.product;
  return (
    <div className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-lg duration-200">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-32 md:h-48 object-cover object-center"
      />
      <div className="px-4 py-1 text-center">
        <h2 className="text-gray-900 font-bold text-lg mb-1">{name}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        <span className="text-rose-500 text-lg font-medium">${price}</span>
        <div className="mt-2 text-center lg:pb-2">
          <button className="ml-2 bg-blue-500 text-sm hover:bg-blue-700 text-white  py-1 md:py-2  px-3  rounded">
            Add to Cart
          </button>
          <button className="ml-2 mt-1 bg-purple-500 text-sm hover:bg-purple-700 text-white py-1 md:py-2 px-3 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
