import React from "react";
import Title from "./Title";
import assets from "../assets/constants";

const Service = () => {
  const service = assets.serviceData;
  return (
    <div>
      <div className="mt-4 text-center mb-4">
        <Title
          text1={"There are some redeeming factors"}
          text2={"We Provide High Quality Goods"}
          text3={
            "A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't"
          }
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full px-4">
        {service.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 w-3/4 md:w:1/3"
          >
            <img src={item.imageUrl} alt="" />
            <p className="font-medium text-sm md:text-xl text-gray-900">
              {item.title}
            </p>
            <p className="font-normal text-center w-3/4 text-xs md:text-sm text-gray-500">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
