import { useContext, useEffect, useState } from "react";
import { currentUser } from "../App";

const PlaceOrderPage = () => {
  const [CurrentLogInUser, setCurrentLogInUser] = useContext(currentUser);
  const userEmail = CurrentLogInUser.email;

  const [userOrder, setUserOrder] = useState({});
  console.log(userOrder)
  const order = userOrder.orders || []; // Initialize order as an empty array
  console.log(order)
  const totalItems = order.reduce((total, item) => total + item.quantity, 0);
  const subtotal = order.reduce((total, item) => total + item.price * item.quantity, 0);
  const Email = userOrder.email;
  const orderId = userOrder._id; // Retrieve the order ID

  useEffect(() => {
    fetch(`http://localhost:5000/getProductByEmail/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setUserOrder(data))
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [userEmail]);

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto  rounded py-16">
        {orderId ? (
          <div className="bg-white rounded-lg border p-3 m-5 flex space-x-5 justify-around text-xl">
            <div className="basis-7/12 grid  grid-cols-2 border-4 rounded-lg p-1">
              <h2 className="font-semibold p-2 bg-slate-300 ">Order Id</h2>
              <h2 className="font-semibold p-2 bg-slate-300 ">: {orderId}</h2>
              <h2 className="font-semibold p-2 bg-slate-200 ">Total Order </h2>
              <h2 className="font-semibold p-2 bg-slate-200 ">: {totalItems}</h2>
              <h2 className="font-semibold p-2 bg-slate-300 ">Total Price </h2>
              <h2 className="font-semibold p-2 bg-slate-300 ">: ${subtotal}</h2>
              <h2 className="font-semibold p-2 bg-slate-200 ">Delivery Charge </h2>
              <h2 className="font-semibold p-2 bg-slate-200 ">: $15</h2>
              <h2 className="font-semibold p-2 bg-slate-300 ">Sub-Total </h2>
              <h2 className="font-semibold p-2 bg-slate-300 text-rose-500">: ${subtotal + 15}</h2>
            </div>
            <div className="basis-5/12 border-4 p-1 rounded-lg">
              <div className=" bg-gray-300 p-3 grid grid-cols-2 text-xl font-semibold ">
                <h2>UserName</h2>
                <h2>: {CurrentLogInUser.displayName}</h2>
                <h2>User Number</h2>
                <h2>: 01303744200</h2>
                <h2>userEmail</h2>
                <h2>: {Email}</h2>
              </div>
              <div className="flex flex-col">
                  <h2 className="text-xl font-semibold text-center bg-gray-200 py-3">Delivery Address:</h2>
                  <address className="p-4 bg-gray-100">
                    house#08, road#18, block C, Mirpur 10, Dhake Bangladesh
                  </address>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-3xl font-semibold p-10 text-center">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default PlaceOrderPage;
