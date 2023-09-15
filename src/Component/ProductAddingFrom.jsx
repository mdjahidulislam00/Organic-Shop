import axios from "axios";
import { useEffect, useState } from "react";

const ProductAddingFrom = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    companyName: "",
    price: "",
    quantity: "",
    picture: "",
  });
  console.log(formData)
    // //handel Image upload to imgbb and get a live link
    // const handleImageUpload = (e) => {
    //   const imageData = new FormData();
    //   imageData.set('key', '19b0d55a64e603890c58aee7a1a4c2c8');
    //   imageData.append('image', e.target.files[0]);
  
    //   axios.post('https://api.imgbb.com/1/upload', imageData)
    //   .then(function (response) {
    //     // setFormData({...formData, picture: response.data.data.display_url});
    //     console.log(response.data.data.display_url)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  
    // }
  //handel InputChange
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };
  //handel From
  const handleSubmit = (e) => {
    //Data Send to server using Express js
    fetch('http://localhost:5000/addProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(result =>{
      console.log(result)
    })

    e.preventDefault(); 
  };
  return (
    <div className="max-w-md lg:container  mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-3xl font-semibold mb-4 text-center">
        Product Information
      </h2>
      <form
        onSubmit={handleSubmit}
        className="lg:grid lg:grid-cols-3  lg:gap-10"
      >
        <div className="mb-4">
          <label
            htmlFor="Category"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Category
          </label>
          <select
            onChange={handleInputChange}
            value={formData.category}
            name="category"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          >
            <option value="Electronic">Electronic</option>
            <option value="Vehicle">Vehicle</option>
            <option value="Pets and animals">Pets and animals</option>
            <option value="Sports">Sports</option>
            <option value="Mens Fashion">Mens Fashion</option>
            <option value="Girls Fashion">Girls Fashion</option>
            <option value="Agricultural Product">Agricultural Product</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="companyName"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Price
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="picture"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Upload Product Picture
          </label>
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/*"
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="text-center lg:col-span-3">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 text-white lg:text-xl font-semibold py-2 px-8 rounded"
          >
            Add to Shop
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductAddingFrom;
