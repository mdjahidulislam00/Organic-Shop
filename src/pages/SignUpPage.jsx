import { useContext, useEffect, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {initializeApp} from 'firebase/app';
import firebaseConfig from "../Component/FireBaseConfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { currentUser } from "../App";
import { useLocation, useNavigate } from "react-router-dom";
import { stringify } from "postcss";


const app = initializeApp(firebaseConfig);
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

const SignUpPage = () => {
  const [CurrentLogInUser, setCurrentLogInUser] = useContext(currentUser);
  const [newUser, setNewUser] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    isSignIn: false,
  });
  const [validationError, setValidationError] = useState({})
  const [firebaseError, setFirebaseError] = useState()
  const navigate = useNavigate();
  const location = useLocation();
  const {from} = location.state || {from: {pathname: '/' }}

  //Handel Input
  const handelInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  //Handel Submit
  const handelSubmit =(e) =>{
    setValidationError(Validation(userInfo));
   
    if(newUser && userInfo.name && userInfo.email && userInfo.password ){
        const auth = getAuth (app);
        createUserWithEmailAndPassword (auth, userInfo.email, userInfo.password)
        .then( res => {
            const user = res.user;
            setCurrentLogInUser(user)
            navigate(from)
        })
        .catch((error) => {
            const errorMessage = error.message;
            setFirebaseError(errorMessage);
        });
        
    }
    if(!newUser && userInfo.email && userInfo.password){
        const auth = getAuth();
        signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((res) => {
            const user = res.user;
            const userEmail = user.email;
            setCurrentLogInUser(user)
            localStorage.setItem('currentLogInUserEmail', userEmail )
            navigate(from)
        })
        .catch((error) => {
            const errorMessage = error.message;
            setFirebaseError(errorMessage);
      
    });  
    }
    e.preventDefault();
}

//log in with Google
const handelGoogleSignIn = () => {
  const auth = getAuth(app);
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setCurrentLogInUser(user)
      navigate(from)
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

}

// log in with Facebook
const handleFacebookLogIn =()=>{
  const auth = getAuth(app);
signInWithPopup(auth, facebookProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    setCurrentLogInUser(user);
    navigate(from)
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}

useEffect(() => {
    if(Object.keys(validationError).length === 0){
        userInfo.isSignIn = true;
    }
},[validationError])

//from Validation
const Validation = (userInfo) =>{
    const userError = {};
    const email_pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if(newUser &&  userInfo.name === ''){
        userError.name ='name is required!';
    }
    if(userInfo.email === ''){
        userError.email ='email is required!'; 
    }
    else if(!email_pattern.test(userInfo.email)){
        userError.email ='email is not a valid!';
    }
    if(userInfo.password === ''){
        userError.password ='password is required!';
    }
    else if(userInfo.password.length < 6){
        userError.password = 'password must be 6 digits';
    }
    else if(userInfo.password.length > 10){
        userError.password = 'password should not more than 10 digits';
    }
    return userError;
}
  return (
    <div className="">
      <div className="logInCard container mx-auto flex flex-row justify-center">
        <div className="cardBody w-80 lg:w-96 my-12 lg:py-5 rounded-lg bg-gray-100">
          <div className="cardTitle text-center ">
            <div className="text-3xl font-bold py-4 text-purple-600">
              {newUser ? "Create Account" : "Log In"}
            </div>
          </div>
          <div className="mt-8">
            <form onSubmit={handelSubmit} className="cardContent flex flex-col space-y-2 items-center">
              {newUser && (
                <input
                  onChange={handelInput}
                  className="w-56 lg:w-60 lg:h-10 rounded-lg  px-2 shadow-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none text-sm lg:text-md text-gray-400"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={userInfo.name}
                  id="name"
                />
              )}
              <span className="text-sm font-light text-red-500">{validationError.name}</span>
              <input
                onChange={handelInput}
                className="w-56 lg:w-60 lg:h-10 rounded-lg  px-2 shadow-lg focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none text-sm lg:text-md text-gray-400"
                placeholder="Email"
                type="email"
                name="email"
                value={userInfo.email}
                id="email"
              />
              <span className="text-sm font-light text-red-500">{validationError.email}</span>
              <input
                onChange={handelInput}
                className="w-56 lg:w-60 lg:h-10 rounded-lg  px-2 shadow-lg  focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none text-sm lg:text-md text-gray-400 "
                placeholder="Password"
                type="password"
                name="password"
                value={userInfo.password}
                id="password"
              />
              <span className="text-sm font-light text-red-500">{validationError.password}</span>
              <span className="text-sm font-bold text-red-500">{firebaseError}</span>
              <input
                className="w-56 lg:w-60 lg:h-10 bg-purple-500 text-white rounded-lg px-5 shadow-lg mt-5 text-md lg:text-lg font-semibold cursor-pointer hover:bg-purple-400"
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
              <div onClick={handelGoogleSignIn} className="text-3xl border-[2px] border-white p-1 text-red-600 font-bold rounded-full cursor-pointer hover:scale-110">
                <FaGoogle />
              </div>
              <div onClick={handleFacebookLogIn} className="text-3xl border-[2px] border-white p-1 text-blue-600 font-bold rounded-full cursor-pointer hover:scale-110">
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
