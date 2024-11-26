import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/constants";
export const ShopContext = createContext();
const AppContext = (props) => {
  const currency = "$";
  const products = assets.products;
  const [user,setUser] = useState([]);
  const delivaryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [loginOpen, setLoginOpen] = useState(false);
  const navigate = useNavigate();

  const value = {
    products,
    currency,
    navigate,
    delivaryFee,
    user,setUser,
    search,
    setSearch,
    loginOpen, setLoginOpen,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default AppContext;
