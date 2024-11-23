import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/ProductPage";

const App = () => {
  return (
    <div>
      <Navbar className="z-50" />
      <div className="z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage/>} />
          <Route path="/category/:category/products/:id" element={<ProductPage />} />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
