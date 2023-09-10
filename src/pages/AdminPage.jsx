import "react";
import { FaPlusCircle} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import AdminProductShow from "../Component/AdminProductShow";
import ProductAddingFrom from "../Component/ProductAddingFrom";

const AdminPage = () => {
  return (
    <div className="">
      <nav className="bg-purple-600 p-4">
        <div className="container mx-auto flex justify-center items-center">
          <ul className="flex space-x-4 items-center">
            <li className="flex items-center border rounded-md p-1 hover:bg-purple-300">
              <a href="#" className="text-white text-sm mr-2">
                AddProduct{" "}
              </a>
              <span className="text-white text-xl">
                <FaPlusCircle />
              </span>
            </li>
            <li className="flex items-center border rounded-md p-1 hover:bg-purple-300">
              <a href="#" className="text-white text-sm mr-2">
                Manage{" "}
              </a>
              <span className="text-white text-xl">
                <FaGear />
              </span>
            </li>
          </ul>
        </div>
      </nav>
      <ProductAddingFrom />
      <AdminProductShow />
    </div>
  );
};

export default AdminPage;
