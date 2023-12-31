import {useState } from "react";
import AdminNavBar from "./AdminNavBar";

const ProductAddingFrom = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    companyName: "",
    price: "" ,
    stock: "",
    picture: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

console.log(formData)
  //handel InputChange
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };


  //handel From
  const handleSubmit = (e) => {
    e.preventDefault(); 

    //Data Send to server using Express js
    fetch('http://localhost:5000/addProduct', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })
    .then((result) => {
      console.log(result)
      if (result) {
        setSuccessMessage("Product added successfully.");
        setFormData({
          category: "",
          name: "",
          companyName: "",
          price: "",
          stock: "",
          picture: "",
        });
      } else {
        setSuccessMessage("Failed to add product.");
      }
    })
    .catch((err) => {
      console.log(err);
    });
  };
  return (
    <>
    <AdminNavBar />
    <div className="max-w-md lg:container  mx-auto bg-white m-10 p-10 border-2 border-gray-200 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Product Adding From 
      </h2>
      {successMessage && (
          <div className="text-4xl my-8 text-green-600 text-center">{successMessage}</div>
      )}
      <form
        onSubmit={handleSubmit}
        method="post"
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
            type="number"
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
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium mb-2"
          >
            Description
          </label>
          <input
            type="text"
            id="Description"
            name="Description"
            value={formData.Description}
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
    </>
  );
};

export default ProductAddingFrom;
