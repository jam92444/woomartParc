import React from "react";
import Title from "./Title";
import assets from "../assets/constants";
import { GoCommentDiscussion, GoShareAndroid } from "react-icons/go";

const BlogCard = () => {
  const blogData = assets.blogData;
  return (
    <div className="mt-5 px-4">
      <div className="mt-5">
        <Title
          text1={"Our new article best news"}
          text2={"Interesting About Gadgets"}
          text3={
            "Whenever draft copy comes up in a meeting confused questions about"
          }
        />
      </div>
      <div className="flex overflow-y-scroll gap-4 cursor-pointer  mt-4 flex-col md:flex-row justify-around items-center">
        {blogData.map((item, index) => (
          <div key={index} className="relative w-[280px] border border-gray-200 rounded-lg shadow-sm hover:shadow-lg ">
            <div className=" relative w-full  overflow-hidden rounded-t-lg">
              <img
                src={item.imageUrl}
                className="w-full hover:scale-110 transition-all"
                alt=""
              />
              <div className="absolute top-4 left-4 flex flex-col items-center px-2 py-1 w-30 rounded-lg bg-white text-black">
                <p className="text-lg md:text-2xl font-medium ">22</p>
                <p className="text-sm">APR</p>
              </div>
            </div>
            <div className="absolute bottom-[120px] text-center left-1/3 bg-blue-600 p-1 rounded-md text-white font-semibold">
              <p>{item.top}</p>
            </div>
            <div className="bg-white p-6 border-b-2 rounded-b-lg flex flex-col items-center justify-center gap-2 ">
              <p className="text-lg font-medium text-center">
                {item.title}
              </p>
              <div className="text-gray-500 text-sm bg-white flex items-center">
                <img
                  src="https://woodmart.xtemos.com/wp-content/uploads/2018/10/avatar-home.jpg.webp"
                  className="w-4 h-4 rounded-full mr-2"
                  alt=""
                />
                <p className="pr-4">Megamarket</p>
                <GoCommentDiscussion className="mr-2 text-md" />
                <GoShareAndroid className="text-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
