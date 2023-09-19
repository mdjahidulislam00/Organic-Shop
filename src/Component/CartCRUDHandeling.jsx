import { useState } from "react";

const useCart = () => {
  // Initialize cart from localStorage or an empty array if no data is available
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleAddToCart = (productDetails) => {
    if (productDetails) {
      const existingItem = cart.find(
        (cartItem) => cartItem._id === productDetails._id
      );
  
      if (existingItem) {
        // If the item is already in the cart, update its quantity
        const updatedCart = cart.map((cartItem) =>
          cartItem._id === productDetails._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        setCart(updatedCart);
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        setCart((prevCart) => [...prevCart, { ...productDetails, quantity: 1 }]);
      }
  
      // Save the updated cart to local storage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  
  //getCart
  const handleGetCart = () => {
    // Retrieve the cart data from local storage and return it
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  };


  //remove by id
  const handleRemoveCart = (productId, cart, setCart) => {
    // Find the index of the product to remove
    const indexToRemove = cart.findIndex((item) => item._id === productId);
  
    if (indexToRemove !== -1) {
      // Remove the product from the cart
      const updatedCart = [...cart];
      updatedCart.splice(indexToRemove, 1);
  
      // Update the cart state with the updated cart
      setCart(updatedCart);
  
      // Update the cart in local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };
  

  return { cart, handleAddToCart, handleGetCart, handleRemoveCart };

};

export default useCart;
