import "react";

const CartCard = () => {
  return (
    <div className="bg-slate-300 my-5 rounded-md p-2">
      <div className="cardbody">
        <div className="bg-slate-200 rounded-lg p-3 border-b-2 text-lg font-semibold">
          Delivery Address:
          <pre className="text-md font-medium mt-2">
            Md.Jahidul Islam <br />
            01303744200
            <address>
              House#8,Road#23,Mirpur10 <br />
              Dhaka Bangladesh
            </address>
          </pre>
        </div>
        <div className="cartSection">
          <div className="carttop">
            <div className="mt-3 px-2 grid gap-y-4 grid-cols-2">
              {/* Count Items */}
              <div className="text-lg ">Total Items </div>
              <div className="text-lg text-right font-semibold">01</div>
              {/* Count Items */}
              <div className="text-lg ">SubTotal </div>
              <div className="text-lg text-right font-semibold">$640</div>
              {/* Count Items */}
              <div className="text-lg ">Total </div>
              <div className="text-lg text-right font-semibold">$640</div>
            </div>
          </div>
          <div className="cartButton mt-4 mb-1 mx-2">
            <button className="w-full rounded-md bg-purple-500 text-white text-lg py-3 hover:bg-purple-600 delay-150">Confirm Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
