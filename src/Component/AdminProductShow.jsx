import "react";
import { useEffect, useState } from "react";

const AdminProductShow = () => {
  const [allAdminProducts, setAdminProducts] = useState();
  const {id, name} = allAdminProducts;
  console.log(name)
  //get all Product fetch
  useEffect(()=>{
    const fetchData = async () =>{
      const res = await fetch('http://localhost:5000/getAllProducts');
      const data = await res.json();
      setAdminProducts(data)
    }
    fetchData();
  }, [ ]);

   //handel Delete items
   const handelDeleteItem = (event,id) => {
    console.log(event.target.parentNode)
    // //Data Send to server using Express js
    fetch(`http://localhost:5000/deleteProductById/${id}`, {
      method: 'DELETE',
    })
    .then(res => 
        {res ? event.target.parentNode.parentNode.className='hidden' : console.log(res)}  
      )
    .catch(err => console.log(err))
  };

    //  //handel Edit items
    //  const handelEditItem = (id) => {
    //   // //Data Send to server using Express js
    //   fetch(`http://localhost:5000/deleteProductById/${id}`, {
    //     method: '' ,
    //   })
    //   .then(res => 
    //        console.log(res)  
    //     )
    //   .catch(err => console.log(err))
    // };
 return (
      <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
      <h2 className="text-3xl font-semibold mb-4">Total-  {allAdminProducts && allAdminProducts.length}</h2>
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
            { allAdminProducts &&
             allAdminProducts.map((allProduct) => (
              <tr key={allProduct.id}>
                <td className="border px-4 py-2">{allProduct.category}</td>
                <td className="border px-4 py-2">{allProduct.name}</td>
                <td className="border px-4 py-2">${allProduct.price}</td>
                <td className="border px-4 py-2">{allProduct.stock}</td>
                <td className="border px-4 py-2">
                  <button onClick={() => handelEditItem(event,allProduct.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-1">
                    Edit
                  </button>
                  <button onClick={() => handelDeleteItem(event,allProduct.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-1">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductShow;
