import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import spinner from '../assets/images/rainbow-spinner-loading.gif';

const AdminProductShow = () => {
  const [allAdminProducts, setAdminProducts] = useState([]);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  // Get all Products form server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/getAllProducts');
        if (response.ok) {
          const data = await response.json();
          setAdminProducts(data);
        } else {
          console.error("Failed to fetch products:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [isEditing]);

  //Handel Delete Product by using Id
  const handleDeleteItem = (id) => {
    fetch(`http://localhost:5000/deleteProductById/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setAdminProducts(prevProducts => prevProducts.filter(product => product._id !== id));
      } else {
        console.error("Failed to delete product:", response.statusText);
      }
    })
    .catch(error => {
      console.error("Error deleting product:", error);
    });
  };


  //Handle Edit Product using Id
  const handleEditItem = (id) => {
    fetch(`http://localhost:5000/getProductById/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error("Failed to fetch product for editing:", response.statusText);
      }
    })
    .then(data => {
      setUpdatedProduct(data);
      setIsEditing(true);
    })
    .catch(error => {
      console.error("Error fetching product for editing:", error);
    });
  };

  //handel set Updated value in state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };


  // Handel submitted event when edit done
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/updatedProductById/${updatedProduct._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct)
    })
    .then(response => {
      if (response.ok) {
        setIsEditing(false);
      } else {
        console.error("Failed to update product:", response.statusText);
      }
    })
    .catch(error => {
      console.error("Error updating product:", error);
    });
  };

  //Handel Cancel popupFrom for
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <AdminNavBar />
      <div className="container mx-auto p-4">
        <div className="text-3xl font-semibold mb-4 text-center">Product Management</div>
        <div className="text-2xl font-semibold mb-6 text-center">Total: {allAdminProducts.length} Products</div> 
        {isEditing && updatedProduct && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
              <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
              <form onSubmit={handleSubmit}>
                {/* Form fields for editing */}
                <div className="mb-4">
                  <label htmlFor="name" className="block  py-1 text-md font-medium text-gray-600">
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={updatedProduct.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 mb-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                  <label htmlFor="name" className="block py-1 text-md font-medium text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={updatedProduct.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 mb-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                  <label htmlFor="name" className="block py-1 text-md font-medium text-gray-600">
                    Price
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={updatedProduct.price}
                    onChange={handleChange}
                    className="w-full px-3 py-2 mb-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                  <label htmlFor="name" className="block py-1 text-md font-medium text-gray-600">
                    Stock
                  </label>
                  <input
                    type="text"
                    id="stock"
                    name="stock"
                    value={updatedProduct.stock}
                    onChange={handleChange}
                    className="w-full px-3 py-2  rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>
                {/* Add other form fields for editing here */}
                
                <div className="flex justify-around space-x-5">
                  <button
                    type="submit"
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none"
                  >
                    Submit
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Stock</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                allAdminProducts.map((product) => (
                <tr key={product._id}>
                  <td className="border px-4 py-2">{product.category}</td>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">${product.price}</td>
                  <td className="border px-4 py-2">{product.stock}</td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleEditItem(product._id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteItem(product._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminProductShow;
