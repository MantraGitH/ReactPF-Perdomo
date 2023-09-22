import React from "react";
import { Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <CartProvider>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
