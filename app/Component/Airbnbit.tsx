"use client";

import React, { useState } from "react";

const Airbnbit = () => {
  // Base price per step
  const basePrice = 1000;

  // State for slider value and calculated price
  const [step, setStep] = useState(1);
  const [price, setPrice] = useState(basePrice * step);

  // Handle slider change
  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setStep(value);
    setPrice(basePrice * value);
  };

  return (
    <div className="">
      <h1>Airbnb it.</h1>
      <h2>You could Earn</h2>
      <span>${price}</span>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          step="1" 
          value={step}
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default Airbnbit;
