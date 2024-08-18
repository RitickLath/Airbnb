"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaDoorOpen, FaUsers } from "react-icons/fa";

const PlaceTypeSelector = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = [
    {
      title: "An entire place",
      description: "Guests have the whole place to themselves.",
      icon: FaHome,
    },
    {
      title: "A room",
      description:
        "Guests have their own room in a home, plus access to shared spaces.",
      icon: FaDoorOpen,
    },
    {
      title: "A shared room",
      description:
        "Guests sleep in a room or common area that may be shared with you or others.",
      icon: FaUsers,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 py-28">
      <h1 className="text-2xl font-semibold mb-6">
        What type of place will guests have?
      </h1>

      <div className="space-y-4">
        {options.map((option) => (
          <div
            key={option.title}
            onClick={() => setSelectedOption(option.title)}
            className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer hover:shadow-lg transition-shadow duration-300 ${
              selectedOption === option.title
                ? "border-black"
                : "border-gray-200"
            }`}
          >
            <div className="flex items-center space-x-4">
              <option.icon className="text-2xl" />
              <div>
                <h2 className="text-lg font-semibold">{option.title}</h2>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <Link className="w-full  mt-4" href="/become-a-host/id/location">
          <button className="relative w-full lg:w-[200px] bg-[black] text-white rounded-md py-2 mb-2 font-semibold">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlaceTypeSelector;
