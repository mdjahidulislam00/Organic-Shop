import  'react'
import CartProductCard from '../Component/CartProductCard'
import CartCard from '../Component/CartCard'
import { useEffect, useState } from 'react'

const CartPage = () => {
  const [cart, setCart] = useState([]);
  
  // Load cart data from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updatedCart);
    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productId) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
  
    setCart(updatedCart);
    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  

  const removeItem = (productId) => {
    const updatedCart = cart.filter((item) => item._id !== productId);
    setCart(updatedCart);
    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div className="bg-slate-200">
        <div className="container mx-auto flex gap-4">
            <div className="basis-8/12">
            {cart &&
            cart.map((cartProduct) => (
              <CartProductCard
                key={cartProduct.id}
                cartProduct={cartProduct}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
              />
            ))}
            </div>
            <div className="basis-4/12">
            <CartCard  cart={cart} />   
            </div>
        </div>
    </div>
  )
}

export default CartPage