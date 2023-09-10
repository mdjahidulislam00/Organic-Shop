import { useState } from 'react'

const ProductAddingFrom = () => {
    const [formData, setFormData] = useState({
        name: '',
        companyName: '',
        price: '',
        quantity: '',
        picture: '',
      });
    //handel InputChange
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    //handel From
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission or validation here
        console.log('Form Data:', formData);
      };
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
    <h2 className="text-3xl font-semibold mb-4 text-center">Product Information</h2>
    <form onSubmit={handleSubmit}>
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
      <div className="text-center">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-8 rounded"
            >
              Add to Shop
            </button>
          </div>
        </form>
      </div>
  )
}

export default ProductAddingFrom