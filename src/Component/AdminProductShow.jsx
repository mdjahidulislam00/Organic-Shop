import "react";
import { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import spinner from '../assets/images/rainbow-spinner-loading.gif'

const AdminProductShow = () => {
  const [allAdminProducts, setAdminProducts] = useState();
  const [updatedProduct, setUpdatedProduct] = useState();

  //get all Product fetch
  useEffect(()=>{
    const fetchData = async () =>{
      const res = await fetch('http://localhost:5000/getAllProducts');
      const data = await res.json();
            setAdminProducts(data)
    }
    fetchData();
  }, []);


  //handel Delete items
   const handelDeleteItem = (event,id) => {
    //Data Send to server using Express js
    fetch(`http://localhost:5000/deleteProductById/${id}`, {
      method: 'DELETE',
    })
    .then(res => 
        { res ?  event.target.parentNode.parentNode.className='hidden' : console.log(res)}
          
      )
    .catch(err => console.log(err))
  };

    //handel Edit items get from server
     const handelEditItem = (event,id) => {
      event.preventDefault();
      fetch(`http://localhost:5000/getProductById/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdatedProduct(data),
      );
    };

    // handel Edited From
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdatedProduct({ ...updatedProduct, [name]: value });
    };

  //send user edited from data send to server
    const handleSubmit = (e) => {
      console.log(updatedProduct)
       fetch(`http://localhost:5000/updatedProductById/${updatedProduct._id}`, {
        method: 'PATCH' ,
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(updatedProduct)
      
      })
      .then(res => 
          console.log(res)
             
        )
      .catch(err => console.log(err))
      
    };
    const handelCancle =(e) =>{
      console.log(e.target.parentNode)
    }
 return (
      <>
      <AdminNavBar />
      <div className="container mx-auto p-4">
        {/* {
          successMessage &&  <div className="text-3xl font-bold text-center text-green-600">{successMessage}</div>
        } */}
      <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
      <h2 className="text-3xl font-semibold mb-4">Total-  {allAdminProducts && allAdminProducts.length}</h2>
      {
        updatedProduct &&
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
              <h2 className="text-2xl font-semibold mb-4">Edit Product</h2>
              <form onSubmit={handleSubmit} method="patch">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={updatedProduct.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-600">
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={updatedProduct.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-600">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={updatedProduct.price}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-600">
                    Stock
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    value={updatedProduct.stock}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
                  />
                </div>
                <div className="flex justify-around space-x-5">
                  <button
                    type="submit"
                    className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 focus:outline-none"
                  >
                    Submit
                  </button>
                  <button
                    onClick = {()=> handelCancle}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                  >
                    Cancle
                  </button>
                </div>
              </form>
            </div>
          </div>
      }
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
            { allAdminProducts ?
             allAdminProducts.map((allProduct) => (
              <tr key={allProduct.id}>
                <td className="border px-4 py-2">{allProduct.category}</td>
                <td className="border px-4 py-2">{allProduct.name}</td>
                <td className="border px-4 py-2">${allProduct.price}</td>
                <td className="border px-4 py-2">{allProduct.stock}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handelEditItem(event,allProduct._id)}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1">
                    Edit
                  </button>
                  <button onClick={() => handelDeleteItem(event,allProduct._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1">
                    Delete
                  </button>
                </td>
              </tr>
             )) : <div className="flex justify-end"> <img className="lg:w-96 lg:h-96" src={spinner} alt="" /> </div>}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default AdminProductShow;
