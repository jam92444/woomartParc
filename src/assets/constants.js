import cables from "./icons/cables.svg";
import cases from "./icons/cases.svg";
import magsafe from "./icons/magsafe.svg";
import charger from "./icons/charger.svg";
import powerbanks from "./icons/power-banks.svg";
import straps from "./icons/straps.svg";
import { FaHeart } from "react-icons/fa";
import { IoIosGitCompare } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import slider1 from "./images/accessories-slide-1.jpg";
import slider2 from "./images/accessories-slide-2.jpg";
import slider3 from "./images/accessories-slide-3.jpg";
import categoryImage01 from "./images/wood-accessories-category-1.jpg.webp";
import categoryImage02 from "./images/wood-accessories-category-2.jpg.webp";
import categoryImage03 from "./images/wood-accessories-category-3.jpg.webp";
import categoryImage04 from "./images/wood-accessories-category-4.jpg.webp";
import categoryImage05 from "./images/wood-accessories-category-5.jpg.webp";
import categoryImage06 from "./images/wood-accessories-category-6.jpg.webp";
import greenCase from "./images/blue-case-back.jpg.webp";
import iphoneXRCase from "./images/w-accessories-product-iphone-xr-10-1.jpg.webp";

export const CategoryIcons = [
  {
    icon: cases,
    category: "Cases",
  },
  {
    icon: straps,
    category: "Straps",
  },
  {
    icon: powerbanks,
    category: "Power Bank",
  },
  {
    icon: cables,
    category: "cables",
  },
  {
    icon: magsafe,
    category: "Magsafe",
  },
  {
    icon: charger,
    category: "Charger",
  },
];

export const menuItem = [
  {
    title: "Demos",
    path: "/demos",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "Privacy Policy",
    path: "/privary-policy",
  },
  {
    title: "Shipping",
    path: "/orders",
  },
  {
    title: "Track Orders",
    path: "/orders",
  },
  {
    title: "FAQs",
    path: "/faqs",
  },
  {
    icon: <FaHeart />,
    title: "Wishlist",
    path: "/wishlist",
  },
  {
    icon: <IoIosGitCompare />,
    path: "/compare",
    title: "Compare",
  },
  {
    icon: <GoPerson />,
    path: "/login",
    title: "Login / Register",
  },
];

export const CarouselData = [
  {
    title: "Charge Your Phone Safely!",
    imageUrl: slider1,
    para: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    title: "For Everything and Everyone",
    imageUrl: slider2,
    para: "Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy.",
  },
  {
    title: "Featured Accessories",
    imageUrl: slider3,
    para: "Even if your less into design and more into content strategy you may find some redeeming value with, wait for it, dummy copy.",
  },
];

const serviceData = [
  {
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/accessories-infobox-1.svg",
    title: "Fast Delivary",
    desc: "Chances are there wasn’t collaboration and checkpoints, there wasn’t a process.",
  },
  {
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/accessories-infobox-2.svg",
    title: "Best Quality",
    desc: "It’s content strategy gone awry right from the start. Forswearing the use of Lorem Ipsum.",
  },
  {
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/accessories-infobox-3.svg",
    title: "Free Return",
    desc: "True enough, but that’s not all that it takes to get things back on track out there for a text.",
  },
];

const products = [
  {
    id: 1,
    productName: "iPhone 12 Pro Moment Case - Blue",
    brand: "IPhone 12 Pro",
    Price: 149,
    hotSelling: true,
    imageUrl: greenCase,
    category: "cases",
    subCategory: "IPhone 12",
  },
  {
    id: 2,
    productName: "Full Aquarelle iPhone XR",
    brand: "IPhone XR",
    Price: 169,
    hotSelling: false,
    imageUrl: iphoneXRCase,
    category: "cases",
    subCategory: "IPhone 12",
  },
  {
    id: 3,
    productName: "iPhone 12 Pro Moment Case – Olive",
    brand: "IPhone 12",
    Price: 149,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/green-case-back.jpg",
    category: "cases",
    subCategory: "IPhone 12",
  },
  {
    id: 4,
    productName: "Leather Case iPhone 12 Deep Violet",
    brand: "IPhone 12",
    Price: 230,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-12-violet-1.jpg",
    category: "cases",
    subCategory: "IPhone 12",
    popular: true,
  },
  {
    id: 5,
    productName: "Leather Case iPhone 12 Deep Violet",
    brand: "IPhone 12",
    Price: 230,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-12-violet-1.jpg",
    category: "cases",
    subCategory: "IPhone 12",
  },
  {
    id: 5,
    productName: "iPhone 13 Case Luxe – Dusty Pink",
    brand: "IPhone 13",
    Price: 149,
    hotSelling: false,
    imageUrl:
      "https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/09/w-accessories-product-iphone-13-3-1.jpg",
    category: "cases",
    subCategory: "IPhone 13",
  },
  {
    id: 6,
    productName: "iPhone 13 Case Max – Black",
    brand: "IPhone 13",
    Price: 159,
    hotSelling: false,
    imageUrl:
      "https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/09/w-accessories-product-iphone-13-6.jpg",
    category: "cases",
    subCategory: "IPhone 13",
  },
  {
    id: 7,
    productName: "iPhone 13 Case Max – Black",
    brand: "IPhone 13",
    Price: 159,
    hotSelling: false,
    imageUrl:
      "https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/09/w-accessories-product-iphone-13-2.jpg",
    category: "cases",
    subCategory: "IPhone 13",
  },
  {
    id: 8,
    productName: "iPhone 13 Case Max – Black",
    brand: "IPhone 13",
    Price: 159,
    hotSelling: false,
    imageUrl:
      "https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/09/w-accessories-product-iphone-13-2.jpg",
    category: "cases",
    subCategory: "IPhone 13",
  },
  {
    id: 9,
    productName: "Air Skin iPhone 11 Blue",
    brand: "IPhone 11",
    Price: 149,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-11-3.jpg.webp",
    category: "cases",
    subCategory: "IPhone 11",
  },
  {
    id: 10,
    productName: "Aquamarine Marble Design",
    brand: "IPhone 11",
    Price: 320,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/w-accessories-product-9.jpg.webp",
    category: "cases",
    subCategory: "IPhone 11",
  },
  {
    id: 11,
    productName: "Carbon Camera Air Case",
    brand: "IPhone 11",
    Price: 199,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-11-1.jpg.webp",
    category: "cases",
    subCategory: "IPhone 11",
  },
  {
    id: 12,
    productName: "iPhone 11 Pine Green",
    brand: "IPhone 11",
    Price: 180,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-11-2.jpg.webp",
    category: "cases",
    subCategory: "IPhone 11",
  },
  {
    id: 13,
    productName: "Silicone Case iPhone 11",
    brand: "IPhone 11",
    Price: 159,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-11-4.jpg.webp",
    category: "cases",
    subCategory: "IPhone 11",
  },
  {
    id: 14,
    productName: "Soft Case iPhone 11",
    brand: "IPhone 11",
    Price: 189,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-11-5.jpg.webp",
    category: "cases",
    subCategory: "IPhone 11",
  },
  {
    id: 15,
    productName: "Aioria Vintage 11 Pro",
    brand: "IPhone 11 Pro",
    Price: 229,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-11-pro-2.jpg.webp",
    category: "cases",
    subCategory: "IPhone 11 Pro",
  },
  {
    id: 16,
    productName: "Alcantara iPhone 11 Pro",
    brand: "IPhone 11 Pro",
    Price: 269,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-11-pro-5.jpg.webp",
    category: "cases",
    subCategory: "IPhone 11 Pro",
  },
  {
    id: 17,
    productName: "Epik Twist iPhone 11 Pro",
    brand: "IPhone 11 Pro",
    Price: 167,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-11-pro-1.jpg.webp",
    category: "cases",
    subCategory: "IPhone 11 Pro",
    popular: true,
  },
  {
    id: 18,
    productName: "Leather Case iPhone 11 Pro",
    brand: "IPhone 11 Pro",
    Price: 230,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-11-pro-7.jpg.webp",
    category: "cases",
    subCategory: "IPhone 11 Pro",
  },
  {
    id: 19,
    productName: "Silicone Case Product RED",
    brand: "IPhone 11 Pro",
    Price: 158,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/w-accessories-product-3.jpg.webp",
    category: "cases",
    subCategory: "IPhone 11 Pro",
  },
  {
    id: 20,
    productName: "Epik Silicone Case Full – Deep Navy",
    brand: "IPhone 12",
    Price: 99,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-link-1-1.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12",
  },
  {
    id: 21,
    productName: "Epik Silicone Case Full – Lavender",
    brand: "IPhone 12",
    Price: 99,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-link-3-1.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12",
  },
  {
    id: 22,
    productName: "Epik Silicone Case Full – Pine Green",
    brand: "IPhone 12",
    Price: 99,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-link-2-1.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12",
  },
  {
    id: 23,
    productName: "Fire Ring Silicone Case",
    brand: "IPhone 12",
    Price: 349,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/w-accessories-product-7.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12",
  },
  {
    id: 24,
    productName: "Leather Case iPhone 12 Deep Violet",
    brand: "IPhone 12",
    Price: 230,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-iphone-12-violet-1.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12",
  },
  {
    id: 25,
    productName: "Thin Case Stone",
    brand: "IPhone 12",
    Price: 299,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/w-accessories-product-5.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12",
  },
  {
    id: 26,
    productName: "Case iPhone 12 | 12 Pro Virid",
    brand: "IPhone 12 Pro",
    Price: 158,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/w-accessories-product-2.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12 Pro",
  },
  {
    id: 27,
    productName: "Thin Case Stone",
    brand: "iPhone 12 | 12 Pro Spicy Orange",
    Price: 189,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/w-accessories-product-4.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12 Pro",
  },
  {
    id: 28,
    productName: "iPhone 12 Pro Max Silicone – Black/White",
    brand: "IPhone 12 Pro",
    Price: 99,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-12-pro-4.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12 Pro",
  },
  {
    id: 29,
    productName: "iPhone 12 Pro Max Silicone – Blue",
    brand: "IPhone 12 Pro",
    Price: 99,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-12-pro-1.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12 Pro",
  },
  {
    id: 30,
    productName: "iPhone 12 Pro Max Silicone – Coral",
    brand: "IPhone 12 Pro",
    Price: 99,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-12-pro-3.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12 Pro",
  },
  {
    id: 31,
    productName: "iPhone 12 Pro Max Silicone – Fuchsia",
    brand: "IPhone 12 Pro",
    Price: 99,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/08/w-accessories-product-12-pro-2.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12 Pro",
    popular: true,
  },
  {
    id: 32,
    productName: "iPhone 12 Pro Moment Case – Black",
    brand: "IPhone 12 Pro",
    Price: 149,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/dark-case-back.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12 Pro",
  },
  {
    id: 33,
    productName: "iiPhone 12 Pro Moment Case – Blue",
    brand: "IPhone 12 Pro",
    Price: 149,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/blue-case-back.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12 Pro",
  },
  {
    id: 34,
    productName: "iPhone 12 Pro Moment Case – Olive",
    brand: "IPhone 12 Pro",
    Price: 149,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/green-case-back.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12 Pro",
  },
  {
    id: 35,
    productName: "iPhone 12 Pro Moment Case – Yellow",
    brand: "IPhone 12 Pro",
    Price: 99,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/yellow-case-back.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12 Pro",
  },
  {
    id: 36,
    productName: "Thin Case Midnight Blue",
    brand: "IPhone 12 Pro",
    Price: 149,
    hotSelling: false,
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/w-accessories-product-1.jpg.webp",
    category: "cases",
    subCategory: "IPhone 12 Pro",
  },
  {
    id: 37001,
    productName: "Classic Leather Strap",
    brand: "Apple",
    color: "Brown",
    category: "straps",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRT6FJEjM9nMpPuKjhmvyiLVwejOtqGXMotA&s",
    price: 49,
  },
  {
    id: 37002,
    productName: "Sport Band",
    brand: "Apple",
    color: "White",
    category: "straps",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMCw_qsBSVTfVi4re9T56Y_LH5TFGZmvLjg&s",
    price: 29,
  },
  {
    id: 37003,
    productName: "Milanese Loop",
    brand: "Apple",
    color: "Silver",
    category: "straps",
    imageUrl:
      "https://static1.nordic.pictures/31268688-thickbox_default/tech-protect-watch-strap-milaneseband-apple-watch-2-3-4-5-6-se-38-40mm-black.jpg",
    price: 149,
  },
  {
    id: 37004,
    productName: "Solo Loop",
    brand: "Apple",
    color: "Pink",
    category: "straps",
    imageUrl:
      "https://www.cellfather.com/cdn/shop/products/AppleSoloLoopSiliconeStrapforiWatch640mmMidnightBlueLarge_1_1200x1200.jpg?v=1673263215",
    price: 49,
  },
  {
    id: 37005,
    productName: "Leather Link Strap",
    brand: "Apple",
    color: "Black",
    category: "straps",
    imageUrl:
      "https://www.cellfather.com/cdn/shop/products/AppleSoloLoopSiliconeStrapforiWatch640mmMidnightBlueLarge_1_1200x1200.jpg?v=1673263215",
    price: 149,
  },
  {
    id: 37006,
    productName: "Woven Nylon Strap",
    brand: "Apple",
    color: "Blue",
    category: "straps",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdziveThhzZezRp3PtnRCiKwGZYC_H_Xa0g&s",
    price: 49,
  },
  {
    id: 37007,
    productName: "Nylon Sport Loop",
    brand: "Apple",
    color: "Red",
    category: "straps",
    imageUrl:
      "https://ktusu.in/cdn/shop/files/nylon-velcro-sport-loop-watch-band-for-apple-watch-42mm-44mm-45mm-ultra-49mm-abyss-blue-straps-bands-33491788333156.webp?v=1718722220&width=790",
    price: 39,
  },
  {
    id: 37008,
    productName: "Rugged Sport Band",
    brand: "Belkin",
    category: "straps",
    color: "Gray",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEiMGBlBJPzsg_EexkGzP-UISzpyCXjAmfw&s",
    price: 39,
  },
  {
    id: 37009,
    productName: "Silicone Sport Strap",
    brand: "OtterBox",
    color: "Purple",
    category: "straps",
    imageUrl:
      "https://blossomcases.in/cdn/shop/files/IMG-5795.jpg?v=1722235399",
    price: 24,
  },
  {
    id: 37010,
    productName: "Stainless Steel Strap",
    brand: "Nomad",
    color: "Gunmetal",
    category: "straps",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWt5mHC-BTpyAaDfWQUgx5HSigzeZZ3a4qA&s",
    price: 99,
  },
  {
    id: 37011,
    productName: "iPhone Battery Case",
    category: "powerbanks",
    subcategory: "BatteryCase",
    brand: "Apple",
    color: "Black",
    imageUrl:
      "https://5.imimg.com/data5/HS/RU/PZ/SELLER-12721022/1574680892-1523827.jpg",
    price: 129,
    popular: true,
  },
  {
    id: 37012,
    productName: "Mophie Juice Pack Air",
    category: "powerbanks",
    subcategory: "BatteryCase",
    brand: "Mophie",
    color: "Pink",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2y9f0drqbA2Gb0srlzTOxqaH3txxh3O_5EqWiFNdz4BDIOZ--d5j4sHrg1NITXbaS-2I&usqp=CAU",
    price: 99,
  },
  {
    id: 37013,
    productName: "Anker PowerCore 26800",
    category: "powerbanks",
    subcategory: "Powerful",
    brand: "Anker",
    color: "Black",
    imageUrl:
      "https://iconnectqatar.com/image/cache/catalog/Accessories/Anker%20Power%20Bank%20%20-700x847.png",
    price: 99,
  },
  {
    id: 37014,
    productName: "RAVPower 30000mAh",
    category: "powerbanks",
    subcategory: "Powerful",
    brand: "RAVPower",
    color: "Silver",
    popular: true,
    imageUrl:
      "https://www.ravpower.com/cdn/shop/files/RP-PB055.webp?v=1697017382",
    price: 79,
  },
  {
    id: 37015,
    productName: "Anker PowerCore+ 20100 PD",
    category: "powerbanks",
    subcategory: "Powerful",
    brand: "Anker",
    color: "Black",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IKHx5wGOqVUxf3w6X2hJXvIy8GC8eKo0tA&s",
    price: 69,
  },
  {
    id: 37016,
    productName: "Belkin BoostCharge Wireless Power Bank",
    category: "powerbanks",
    subcategory: "Wireless",
    brand: "Belkin",
    color: "White",
    imageUrl: "https://m.media-amazon.com/images/I/61zgTStyUcL.jpg",
    price: 69,
  },
  {
    id: 37017,
    productName: "Anker Wireless Power Bank 10000mAh",
    category: "powerbanks",
    subcategory: "Wireless",
    brand: "Anker",
    color: "Black",
    imageUrl: "https://m.media-amazon.com/images/I/61qAYW0g+kL.jpg",
    price: 39,
  },
  {
    id: 37018,
    productName: "Samsung Wireless Power Bank 10000mAh",
    category: "powerbanks",
    subcategory: "Wireless",
    brand: "Samsung",
    color: "White",
    imageUrl:
      "https://images.samsung.com/is/image/samsung/p6pim/in/eb-u2510xuegin/gallery/in-wireless-battery-pack-10000mah-eb-u2510-eb-u2510xuegin-541527841?$650_519_PNG$",
    price: 49,
    popular: true,
  },
  {
    id: 37019,
    productName: "Mophie Powerstation Wireless XL",
    category: "powerbanks",
    subcategory: "Wireless",
    brand: "Mophie",
    color: "Black",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuyMOSEeGR0l70REigIsa_DCHlnqmyDe0Gcw&s",
    price: 79,
  },
  {
    id: 37020,
    productName: "Zendure SuperTank Pro 26800mAh",
    category: "powerbanks",
    subcategory: "Powerful",
    brand: "Zendure",
    color: "Black",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6FN_Q8KouwuFzckSne0WayzF0FvGuuRkdQg&s",
    price: 149,
    popular: true,
  },
];
const blogData = [
  {
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/accessories-blog-img-2-768x475.jpg.webp",
    top: "DECORATION",
    title: "Exploring Atlanta's modern homes",
  },
  {
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/accessories-blog-img-3-768x475.jpg.webp",
    top: "INSIPIRATION",
    title: "Green interior design inspiration",
  },
  {
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/04/accessories-blog-img-4-768x475.jpg.webp",
    top: "FURNITURE",
    title: "Collar brings back coffee brewing ritual",
  },
  {
    imageUrl:
      "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/01/accessories-blog-img-1-600x371.jpg.webp",
    top: "DESIGN TRENDS",
    title: "Reinterprets the classic bookshelf",
  },
];

const photos = [
  "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-9.jpg.webp",
  "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-2.jpg.webp",
  "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-3.jpg.webp",
  "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-4.jpg.webp",
  "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-5.jpg.webp",
  "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-6.jpg.webp",
  "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-7.jpg.webp",
  "https://woodmart.b-cdn.net/accessories/wp-content/uploads/sites/7/2022/09/accessories-inst-8.jpg.webp",
];

export const assets = {
  photos,
  CarouselData,
  categoryImage01,
  categoryImage02,
  categoryImage03,
  categoryImage04,
  categoryImage05,
  categoryImage06,
  products,
  serviceData,
  blogData,
};

export default assets;
