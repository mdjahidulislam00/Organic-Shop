import "react";
import { FaPlusCircle} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import AdminProductShow from "../Component/AdminProductShow";
import ProductAddingFrom from "../Component/ProductAddingFrom";
import { useState } from "react";

const AdminPage = () => {
  const[showInfo, setShowInfo] = useState()
  return (
    <div className=" sticky top-20 z-30">
      <nav className="bg-purple-600 p-4">
        <div className="container mx-auto flex items-center">
          <ul className="flex space-x-4 items-center">
            <li onClick={() => setShowInfo(false)} className="flex items-center border rounded-md p-1 hover:bg-purple-300">
              <a href="#" className="text-white text-sm mr-2">
                Manage Products{" "}
              </a>
              <span className="text-white text-xl">
                <FaGear />
              </span>
            </li>
            <li onClick={() => setShowInfo(true)} className='flex items-center border rounded-md p-1 hover:bg-purple-300'>
              <a href="#" className="text-white text-sm mr-2">
                AddProduct{" "}
              </a>
              <span className="text-white text-xl">
                <FaPlusCircle />
              </span>
            </li>
          </ul>
        </div>
      </nav>
      {
        showInfo ?<ProductAddingFrom /> : <AdminProductShow /> 
      }
      
    </div>
  );
};

export default AdminPage;
