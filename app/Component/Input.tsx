"use client";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

// Style constants
const inputBaseStyles: string = "outline-none mt-1 rounded-md bg-transparent";
const containerStyles: string =
  "w-full lg:w-[450px] mt-4 lg:mt-0 border-[1px] p-4 rounded-lg shadow-lg bg-white z-100";
const headerTextStyles: string = "font-bold text-xl md:text-2xl lg:text-3xl";
const subheaderTextStyles: string = "pr-6 my-2";
const sectionStyles: string = "py-2 border-[1px] px-4 rounded-md mb-2";
const labelTextStyles: string = "font-semibold text-sm";
const buttonStyles: string =
  "w-full text-center mt-4 py-2 bg-[#E51861] rounded-md text-white font-semibold text-lg";

// eslint-disable-next-line react/display-name
const CustomInput = React.forwardRef<HTMLInputElement, any>((props, ref) => (
  <input ref={ref} className={inputBaseStyles} {...props} />
));

const Input = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className={containerStyles}>
      <h1 className={headerTextStyles}>Find places to stay on Airbnb</h1>
      <h3 className={subheaderTextStyles}>
        Discover entire homes and rooms perfect for any trip
      </h3>

      <div className={sectionStyles}>
        <h1 className={labelTextStyles}>LOCATION</h1>
        <input type="text" placeholder="Anywhere" />
      </div>

      <div className={sectionStyles}>
        <h1 className={labelTextStyles}>Check-in</h1>
        <DatePicker
          className={inputBaseStyles}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          customInput={<CustomInput />}
        />
      </div>

      <div className={sectionStyles}>
        <h1 className={labelTextStyles}>Check-out</h1>
        <DatePicker
          className={inputBaseStyles}
          selected={endDate}
          placeholderText="Add Date"
          onChange={(date) => setEndDate(date)}
          customInput={<CustomInput />}
        />
      </div>

      <div className={buttonStyles}>
        <button>Search</button>
      </div>
    </div>
  );
};

export default Input;
