import "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin2Fill } from "react-icons/ri";

const AdminProductShow = () => {
  return (
    <div className="container mx-auto p-4">
        <h3 className="text-3xl font-semibold py-5 text-center">Manage Your Products</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-gray-700 font-bold">ID</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-gray-700 font-bold">Name</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-gray-700 font-bold">Company</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-gray-700 font-bold">Price</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-gray-700 font-bold">Quantity</th>
              <th className="px-4 py-2 bg-gray-200 border border-gray-300 text-gray-700 font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border border-gray-300">1</td>
              <td className="px-4 py-2 border border-gray-300">Redmi Note 12</td>
              <td className="px-4 py-2 border border-gray-300">Xiomi</td>
              <td className="px-4 py-2 border border-gray-300">20</td>
              <td className="px-4 py-2 border border-gray-300">30</td>
              <td className="px-3 py-2 flex items-center justify-center ">
              <button className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-1 px-2 rounded flex items-center mr-3">
                   <span>Edit</span>
                   <span className="text-xl ml-2"> <FaEdit /> </span>
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-semibold py-1 px-2 rounded flex  items-center">
                   <span>Delete</span>
                   <span className="text-xl ml-2"> <RiDeleteBin2Fill /> </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductShow;
