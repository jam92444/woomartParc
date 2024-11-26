import React from "react";

const Reviews = () => {
  return (
    <div className="w-full mt-8 mb-8 ">
      <h1 className="text-lg md:text-2xl font-medium">Customer Reviews</h1>
      <div className="flex flex-col mt-4 sm:mt-8 gap-8 md:flex-row">
        <div className="w-full">
          <p className="text-xs sm:text-sm font-semibold">1 review</p>
          <div className="mt-4 flex gap-4">
            <img
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full"
              src="https://secure.gravatar.com/avatar/5c21c2c78e4d99d973b7184405f2e70d?s=120&d=mm&r=g"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-xs sm:text-sm text-gray-900 font-semibold">
                  Mr. Mackay{" "}
                  <i className="text-gray-400 font-normal">
                    – September 2, 2022
                  </i>
                </p>
                <p className="text-yellow-400 text-xl pr-4">
                  &#8902; &#8902; &#8902; &#8902; &#8902;
                </p>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 font-normal">
                At worst the discussion is at least working towards the final
                goal of your site where questions about lorem ipsum don’t.
                Summing up, if the copy is diverting attention from the design
                it’s because it’. <br />
                If the copy becomes distracting in the design then you are doing
                something wrong or they are discussing copy changes. It might be
                a bit annoying but you could tell them that that discussion
                would be best suited for another time.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 cursor-pointer">
          <p className="text-xs sm:text-sm font-medium">Add a review</p>
          <p className="text-gray-500 text-xs sm:text-sm">
            Your email address will not be published. Required fields are marked{" "}
            <span className="text-red-400 font-bold">*</span>
          </p>
          <p className="text-xs sm:text-sm font-normal flex items-center gap-2">
            Your rating <span className="text-red-400 font-bold">*</span>:{" "}
            <span className="text-yellow-400 text-xl pr-4">
              &#10030; &#10030; &#10030; &#10030; &#10030;
            </span>
          </p>
          <div className="flex flex-col items-start gap-2">
            <p className="text-xs sm:text-sm font-medium ">
              Your review <span className="text-red-400 font-bold">*</span>{" "}
            </p>
            <textarea
              className="border outline-none w-full rounded-md p-2 text-gray-500 text-xs sm:text-sm "
              cols="30"
              rows="8"
            ></textarea>
            <p className="text-xs sm:text-sm font-medium">
              Name <span className="text-red-400 font-bold">*</span>{" "}
            </p>
            <input
              type="text"
              className="border outline-none w-full rounded-md p-2 text-gray-500 text-xs sm:text-sm "
            />
            <p className="text-xs sm:text-sm ">
              Email <span className="text-red-400 font-bold">*</span>{" "}
            </p>
            <input
              type="email"
              className="border outline-none w-full rounded-md p-2 text-gray-500 text-xs sm:text-sm "
            />
            <p className="flex items-center gap-2 text-sm">
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="check">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </p>
            <button className="px-4 py-2 mt-4 bg-blue-600 rounded-md font-bold text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
