import { createContext, useReducer, useContext } from "react";
const cartContext = createContext();

function cartReducer(cart, action) {
  if (action.type === "ADD_ITEM") {
    return [...cart, action.payload];
  }
  if (action.type === "INC_QTY") {
    return cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }
  if (action.type === "DEC_QTY") {
    return cart.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
  }
  if (action.type === "REMOVE_ITEM") {
    return cart.filter((item) => item.id !== action.payload.id);
  }
}
const initialState = [];

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (newItem) => {
    dispatch({ type: "ADD_ITEM", payload: newItem });
  };

  const handleIncBtn = (id) => {
    dispatch({ type: "INC_QTY", payload: { id: id } });
  };
  const handleDecBtn = (id) => {
    dispatch({ type: "DEC_QTY", payload: { id: id } });
  };
  const handleRemoveBtn = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };
  return (
    <cartContext.Provider
      value={{ cart, addToCart, handleIncBtn, handleDecBtn, handleRemoveBtn }}
    >
      {children}
    </cartContext.Provider>
  );
}

export const useCart = () => useContext(cartContext);

export default CartProvider;
