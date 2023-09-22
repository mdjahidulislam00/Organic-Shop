import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../App";
import { FaPlusCircle } from "react-icons/fa";



const CartCard = (props) => {
  const[CurrentLogInUser, setCurrentLogInUser] = useContext(currentUser)
  const navigate = useNavigate();
  const totalItems = props.cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = props.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  

  const handleConfirmOrder = () => {
    // Convert the Orders array into an object with a key
    const ordersObject = { orders: props.cart, email: CurrentLogInUser.email};
  
    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ordersObject) // Send the object with the key "orders"
    })
    .then(() => {
      navigate('placeOrder');
      localStorage.clear();
    })
    .catch((error) => {
      console.error(error);
      // Handle the error on the frontend, e.g., show an error message to the user.
    });
  }
  
  return (
    <div className="bg-slate-300 my-5 rounded-md p-2">
      <div className="cardbody">
        <div className=" flex items-center justify-center ">
          <button  className="p-2 bg-purple-500 text-white rounded flex flex-row items-center hover:bg-purple-400 "> <span className="text-xl mr-2"><FaPlusCircle/> </span> Add Delivery Address</button>  
        </div>
        
        <div className="cartSection">
          <div className="carttop">
            <div className="mt-3 px-2 grid gap-y-4 grid-cols-2">
              {/* Count Items */}
              <div className="text-lg ">Total Items </div>
              <div className="text-lg text-right font-semibold">{totalItems}</div>
              {/* Count Items */}
              <div className="text-lg ">SubTotal </div>
              <div className="text-lg text-right font-semibold">${subtotal}</div>
              {/* Count Items */}
              <div className="text-lg ">Total </div>
              <div className="text-lg text-right font-semibold">${subtotal}</div>
            </div>
          </div>
          <div className="cartButton mt-4 mb-1 mx-2">
            <button onClick={()=>handleConfirmOrder()} className="w-full rounded-md bg-purple-500 text-white text-lg py-3 hover:bg-purple-600 delay-150">Confirm Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
