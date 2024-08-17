// "use client";

import Image from "next/image";
import Input from "./Input";
import React from "react";
// import { addProperties, addUser, getAllProperties } from "@/actions/properties";

// Style constants
const containerStyles: string =
  "px-12 lg:px-20 mt-10 flex flex-col lg:flex-row justify-between items-center relative";
const imageStyles: string =
  "order-1 lg:order-2 lg:absolute right-20 w-full md:w-[500px] lg:w-[880px] rounded-md z-10";
const inputContainerStyles: string =
  "order-2 lg:order-1 w-full lg:z-20 relative";

const Banner = () => {
  return (
    <div className={containerStyles}>
      <div className={inputContainerStyles}>
        <Input />
      </div>
      {/* {console.log(getAllProperties())} */}
      {/* {addUser()} */}
      {/* {addProperties()} */}
      <Image
        alt="banner"
        src="/Image/banner.jpg"
        width={400}
        height={40}
        className={imageStyles}
      />
    </div>
  );
};

export default Banner;
