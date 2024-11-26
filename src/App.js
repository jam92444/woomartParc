import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./Pages/Cart";
import CategoryPage from "./Pages/CategoryPage";
import ProductPage from "./Pages/ProductPage";
import { ToastContainer } from "react-toastify";
import CheckOut from "./Pages/CheckOut";
import Payment from "./Pages/Payment";
import OrderCompleted from "./Pages/OrderCompleted";
import Login from "./Pages/Login";

const App = () => {
  return (
    <div>
        <Navbar className="z-50" />
        <div className="z-10">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route
              path="/category/:category/products/:id"
              element={<ProductPage />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<OrderCompleted />} />
          </Routes>
        </div>
        <Footer />
    </div>
  );
};

export default App;
