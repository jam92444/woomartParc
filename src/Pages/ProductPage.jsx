import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import assets from "../assets/constants";
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import Reviews from "../components/Reviews";
import RelatedProducts from "../components/RelatedProducts";
import { ShopContext } from "../context/AppContext";

const ProductPage = () => {
  const { category, id } = useParams();
  const { cartItems, setCartItems } = useContext(ShopContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const maxQuantity = 10;
  const increment = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const products = assets.products;
  useEffect(() => {
    const foundProduct = products.find((item) => item.id === Number(id));

    if (foundProduct) {
      setFilterProduct(foundProduct);
    } else {
      setFilterProduct(null);
    }
  }, [id, products]);

  if (filterProduct === null) {
    return (
      <div className="px-8 py-6">
        <p>Product not found</p>
      </div>
    );
  }
  const handleAddToCart = () => {
    const cartItem = {
      productId: filterProduct.id,
      name: filterProduct.productName,
      quantity: quantity,
      price: filterProduct.price ? filterProduct.price : filterProduct.Price,
    };
    setCartItems(cartItem);
    console.log('product added to cart');
    console.log(cartItems);
    

  };

  return (
    <div className="px-8 py-6">
      <div className="flex  items-center gap-2 text-gray-400 text-xs sm:text-md">
        <p>{`Home / ${category ? category : filterProduct.category} / `}</p>{" "}
        <span className="text-gray-800 font-semibold">
          {" "}
          {`${filterProduct.productName}`}
        </span>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start justify-between mb-4 sm:mb-8">
        <div className="w-full sm:w-3/6 flex items-center justify-center overflow-hidden">
          <img
            className="w-2/3 hover:scale-125 transition-all"
            src={filterProduct.imageUrl}
            alt=""
          />
        </div>
        <div className="w-full sm:w-3/6 mt-10 flex flex-col gap-2 sm:gap-5 items-start bg-white">
          <p className="text-lg sm:text-3xl font-medium text-gray-800">
            {filterProduct.productName}
          </p>
          <div className="flex items-center gap-4">
            {/* price  */}
            <p className="text-blue-600 text-lg sm:text-3xl font-semibold ">
              ${filterProduct.price ? filterProduct.price : filterProduct.Price}
            </p>
            <p className="flex items-end gap-1 text-sm md:text-xl text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p className="text-gray-400 text-xs sm:text-sm">
                (1 customer review)
              </p>
            </p>
          </div>
          {/* color */}
          <div className="flex items-center font-medium gap-4 text-gray-900">
            <p className="text-sm sm:text-lg">Color:</p>{" "}
            <img
              className="w-10  border rounded-md border-gray-300
            "
              src={filterProduct.imageUrl}
              alt=""
            />
          </div>
          {/* stock  */}
          <p className="flex items-center text-sm  sm:text-md font-semibold">
            <TiTick className="text-blue-600 text-xl sm:text-2xl " />
            &nbsp;163 in stock
          </p>
          {/* add to cart and buy now button  */}
          <div className="flex w-full  items-center justify-between gap-3 sm:gap-4 ">
            <div className="cursor-pointer flex items-center justify-center  border rounded-lg  ">
              <button
                onClick={decrement}
                className=" hover:text-red-600 w-4 sm:w-7 text-2xl flex items-center justify-center font-normal md:font-medium"
                disabled={quantity === 1}
              >
                -
              </button>
              <p className="border border-gray-300 border-t-0 border-b-0 px-3 sm:px-4 py-1 sm:py-2">
                {quantity}
              </p>
              <button
                onClick={increment}
                className=" hover:text-red-600 w-4 sm:w-7 text-lg sm:text-2xl flex items-center justify-center font-normal md:font-medium"
                disabled={quantity === maxQuantity}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className=" w-full px-4 sm:px-10 py-3 text-xs sm:text-sm  rounded-lg font-medium text-white bg-blue-700 border-2 hover:border-blue-600 hover:bg-white hover:text-blue-600"
            >
              ADD TO CART
            </button>
            <button className="w-full px-4 sm:px-10 py-3 text-sm rounded-lg font-semibold text-white border-2 hover:border-black hover:bg-white hover:text-black bg-black">
              BUY NOW
            </button>
          </div>
          <hr />
          <div>
            <p className="font-semibold text-sm mb-2">
              Guaranteed Safe Checkout
            </p>
            <img
              src="https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/guaranteed-safe-checkout-bordered.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-5 mb-5 px-8 flex flex-col-reverse items-center justify-between gap-4 md:gap-8 sm:flex-row ">
        <div className="flex gap-2 md:flex-row w-full">
          <img
            className="w-1/2 rounded-xl"
            src="https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/accessories-single-product-6.jpg.webp"
            alt=""
          />
          <img
            className="w-1/2 rounded-xl"
            src="https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/accessories-single-product-5.jpg.webp"
            alt=""
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <h1 className="font-bold text-lg sm:text-2xl">Features</h1>
          <p className="text-gray-500 text-xs sm:text-sm mb-4">
            Using dummy content or fake information in the Web design process
            can result in products with unrealistic assumptions and potentially
            serious design flaws. A seemingly elegant design can quickly begin
            to bloat with unexpected content or break under the weight of actual
            activity. Fake data can ensure a nice looking layout but it doesn’t
            reflect what a living, breathing application must endure.
          </p>
          <div>
            <div className="grid grid-cols-3 gap-3 text-gray-700 text-xs sm:text-[14px] items-center justify-between">
              <p className="flex items-center gap-2">
                <img
                  className="w-5 sm:w-7"
                  src="https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/ecology.svg"
                  alt=""
                />
                Ecology
              </p>
              <p className="flex items-center gap-2">
                <img
                  className="w-5 sm:w-7"
                  src="https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/creativity.svg"
                  alt=""
                />
                Creativity
              </p>
              <p className="flex items-center gap-2">
                <img
                  className="w-5 sm:w-7"
                  src="https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/materials.svg"
                  alt=""
                />
                Materials
              </p>
              <p className="flex items-center gap-2">
                <img
                  className="w-5 sm:w-7"
                  src="https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/chargers.svg"
                  alt=""
                />
                Chargers
              </p>
              <p className="flex items-center gap-2">
                <img
                  className="w-5 sm:w-7"
                  src="https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/mag-safe.svg"
                  alt=""
                />
                MagSafe
              </p>
              <p className="flex items-center gap-2">
                <img
                  className="w-5 sm:w-7"
                  src="https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/power-cables.svg"
                  alt=""
                />
                Power & Cables
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <Reviews />
      <hr />
      <RelatedProducts category1={filterProduct.category} />
    </div>
  );
};

export default ProductPage;
