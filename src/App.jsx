import React from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import CartProvider from "./Contexts/CartProvider";

function App() {
  return (
    <CartProvider>
      <Header />
      <Products />
    </CartProvider>
  );
}

export default App;
