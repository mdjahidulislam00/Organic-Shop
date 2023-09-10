import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const [newUser, setNewUser] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    isSignIn: false,
  });

  // const [validationError, setValidationError] = useState({})
  // const navigate = useNavigate();
  // const location = useLocation();
  // const {from} = location.state || {from: {pathname: ''}}
  //handelInput from signIn from
  const handelInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-100% h-auto bg-cover">
      <div className="logInCard container mx-auto flex flex-row justify-center">
        <div className="cardBody w-80 my-12 rounded-lg bg-gray-100">
          <div className="cardTitle text-center ">
            <div className="text-3xl font-bold py-4 text-purple-600">
              {newUser ? "Create Account" : "Log In"}
            </div>
          </div>
          <div className="mt-8">
            <form className="cardContent flex flex-col space-y-2 items-center">
              {newUser && (
                <input
                  onChange={handelInput}
                  className="w-56 rounded-lg py-2 px-5 shadow-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none text-sm text-gray-400"
                  placeholder="Name"
                  type="text"
                  name="name"
                  id="name"
                />
              )}
              <span className="text-sm font-light text-red-500"></span>
              <input
                onChange={handelInput}
                className="w-56 rounded-lg py-2 px-5 shadow-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none text-sm text-gray-400"
                placeholder="Email"
                type="email"
                name="email"
                id="email"
              />
              <span className="text-sm font-light text-red-500"></span>
              <input
                onChange={handelInput}
                className="w-56 rounded-lg py-2 px-5 shadow-lg  focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none text-sm text-gray-400 "
                placeholder="Password"
                type="password"
                name="password"
                id="password"
              />
              <span className="text-sm font-light text-red-500"></span>
              <input
                className="w-56 bg-purple-500 text-white rounded-lg py-2 px-5 shadow-lg mt-5 text-md font-semibold cursor-pointer hover:bg-purple-400"
                type="submit"
                value={newUser ? "Create Account" : "Log In"}
              />
            </form>
          </div>
          <div className="flex-col text-center text-gray-400 mt-2 p-3">
              <span
                onClick={() => setNewUser(!newUser)}
                > {newUser? 'Already Have Account' : 'Create New Account'} <span className="ml-1 text-purple-400 font-semibold text-md  p-1 cursor-pointer hover:text-purple-400"> {newUser ? " Log In" : 'Sign up'}</span> 
              </span>
          </div>
          <div className="mx-auto text-center mt-4">
            <span className="text-md font-semibold text-gray-500">
                 Or <br /> Continue with
            </span>
            <div className=" flex space-x-3 justify-center mt-2">
              <div className="text-3xl border-[2px] border-purple-600 p-1 text-red-600 font-bold rounded-full cursor-pointer hover:scale-110">
                <FaGoogle />
              </div>
              <div className="text-3xl border-[2px] border-purple-600 p-1 text-blue-600 font-bold rounded-full cursor-pointer hover:scale-110">
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
