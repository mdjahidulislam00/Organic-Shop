import "react";
import { useContext } from "react";
import {  FaHome,  FaList,  FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { Link } from "react-router-dom";
import { currentUser } from "../App";
import { getAuth, signOut } from "firebase/auth";
import { FaGear, FaShop } from "react-icons/fa6";
import SearchBar from "./SearchBar";

const Header = () => {
  const [currentLogInUser, setCurrentLogInUser] = useContext(currentUser);
  // const [toggleMenu, setToggleMenu] = useState(true);
  
  const currentLogInUserlocal = localStorage.getItem('currentLogInUserEmail');
  //LogOut Hendler
  const handelSignOutUser = () => {
    localStorage.removeItem('currentLogInUserEmail');
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setCurrentLogInUser("");
      })
      .catch((error) => {
        console.log(error)
        // An error happened.
      });
  };
  return (
    <div className="bg-purple-500 sticky top-0 z-10">
      <nav className="w-full px-3 shadow-md shadow-gray-500">
        <div className="flex items-center justify-between lg:justify-around h-16 lg:h-20">
          {/* <div
            className="flex md:hidden text-gray-300 text-2xl"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {" "}
            {toggleMenu ? <FaBars /> : <RxCross1 />}{" "}
          </div> */}
          <div className="text-white text-2xl lg:text-3xl  font-semibold cursor-pointer">
            {" "}
            <Link to="/home">ORGANIC-SHOP</Link>{" "}
          </div>
          <div className="hidden lg:flex">
            <SearchBar />
          </div>
          <div className="flex items-center space-x-4 md:space-x-3">
            <div className="text-white w-10 h-10 text-2xl flex items-center justify-center cursor-pointer hover:text-gray-300">
              <Link to="/cart">
                {" "}
                <div className="text-2xl"><AiOutlineShoppingCart /></div>
              </Link>
            </div>
            <div className="text-white flex cursor-pointer hover:text-gray-300">
              {!currentLogInUser.email && !currentLogInUserlocal ? (
                <Link to="/signUp">
                  <div className="flex">
                    <span className="text-2xl"><FaUser /></span>
                    <span className="text-lg ml-1 ">LogIn</span>
                  </div>
                </Link>
              ) : (
                <div className="flex space-x-2 items-center">
                  <div className="flex space-x-2">
                    <img
                      className="w-10 h-10 bg-white rounded-full p-[2px]"
                      src={currentLogInUser.photoURL}
                      alt={currentLogInUser.displayName}
                    />
                                      <div className="text-sm flex items-center">
                    <div className="text-sm">{currentLogInUser.displayName}</div>
                  </div>
                  </div>
                    <div className="button">
                    <button
                    onClick={handelSignOutUser}
                    className="h-6 bg-white text-sm text-purple-500 px-1 rounded hover:bg-gray-300 delay-100"
                  >
                    Log Out
                  </button>
                    </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full h-8 lg:h-12 flex bg-slate-200 px-10 rounded-t-lg border-t-2 border-white">
          <div className=" flex space-x-6 items-center">
           <Link to='/home'> <button className="flex space-x-1 items-center text-md lg:text-xl  px-1 hover:text-purple-600 duration-100">
              {" "}
              <span className="text-purple-500 text-lg lg:text-xl">
                {" "}
                <FaHome />{" "}
              </span>{" "}
              <span>Home</span>
            </button></Link>
            <Link to='/shop'>
            <button className="flex space-x-1 items-center text-md lg:text-xl  px-2 hover:text-purple-600 duration-100">
              {" "}
              <span className="text-purple-500 text-lg lg:text-xl">
                {" "}
                <FaShop />{" "}
              </span>{" "}
              <span>Shop</span>
            </button>
            </Link>
            <Link to='/category'>
            <button className="flex space-x-1 items-center text-md lg:text-xl  px-2 hover:text-purple-600 duration-100">
              {" "}
              <span className="text-purple-500 text-lg lg:text-xl">
                {" "}
                <FaList />{" "}
              </span>{" "}
              <span>Category</span>
            </button>
            </Link>
           { currentLogInUser.email || currentLogInUserlocal && 
            
            <Link to='/admin'>
            <button className="flex space-x-1 items-center text-md lg:text-xl  px-2 hover:text-purple-600 duration-100">
              {" "}
              <span className="text-purple-500 text-lg lg:text-xl">
                {" "}
                <FaGear />{" "}
              </span>{" "}
              <span>Product Manager</span>
            </button>
            </Link>
           }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
