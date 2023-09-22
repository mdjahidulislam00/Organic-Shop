import React from "react";

const PlaceOrderProductCard = ({ order }) => {
  const totalItems = order.orders.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const subtotal = order.orders.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const orderId = order._id;

  return (
    <div className="container mx-auto rounded py-16">
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
            <h2 className="font-semibold p-2 bg-slate-300 text-rose-500">
              : ${subtotal + 15}
            </h2>
          </div>
        </div>
      ) : (
        <p className="text-3xl font-semibold p-10 text-center">Loading...</p>
      )}
    </div>
  );
};

export default PlaceOrderProductCard;
