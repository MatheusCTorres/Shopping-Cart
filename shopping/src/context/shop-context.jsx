import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export default function ShopContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [showModal, setShowModal] = useState(false)
  const [selectedPic, setSelectedPic] = useState(null)

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newwAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newwAmount }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  const selectPicture = (id) => {
    let picture = PRODUCTS.find((picture) => picture.id === id);

    setSelectedPic(picture);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, selectPicture, selectedPic, closeModal, showModal };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}
