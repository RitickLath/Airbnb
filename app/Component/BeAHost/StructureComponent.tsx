"use client";
import React, { useState } from "react";
import { FaHome, FaHotel, FaTree, FaCampground } from "react-icons/fa";
import {
  GiBarn,
  GiCaveEntrance,
  GiCastle,
  GiWindmill,
  GiTreehouse,
  GiFarmTractor,
} from "react-icons/gi";
import { MdOutlineApartment, MdOutlineBreakfastDining } from "react-icons/md";

import { TbContainer, TbTent } from "react-icons/tb";
import { RiEarthquakeLine } from "react-icons/ri";
import { BsHouse, BsHouseDoor } from "react-icons/bs";
import Link from "next/link";

// SelectionBox Component
const SelectionBox = ({ icon: Icon, title, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`border rounded-md p-4 cursor-pointer flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300 ${
        isSelected ? "border-black" : "border-gray-200"
      }`}
    >
      <Icon className="text-2xl" />
      <span className="font-medium">{title}</span>
    </div>
  );
};

// StructureComponent
const StructureComponent = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { title: "House", icon: FaHome },
    { title: "Flat/apartment", icon: MdOutlineApartment },
    { title: "Barn", icon: GiBarn },
    { title: "Bed & breakfast", icon: MdOutlineBreakfastDining },
    { title: "motorhome", icon: FaCampground },
    { title: "Casa particular", icon: BsHouse },
    { title: "Castle", icon: GiCastle },
    { title: "Cave", icon: GiCaveEntrance },
    { title: "Container", icon: TbContainer },
    { title: "Cycladic home", icon: BsHouseDoor },
    { title: "Dammuso", icon: GiCaveEntrance }, // Placeholder icon

    { title: "Earth home", icon: RiEarthquakeLine },
    { title: "Farm", icon: GiFarmTractor },
    { title: "Guest house", icon: FaHome },
    { title: "Hotel", icon: FaHotel },

    { title: "Kezhan", icon: GiCastle }, // Placeholder icon
    { title: "Minsu", icon: FaHome }, // Placeholder icon
    { title: "Riad", icon: FaHome }, // Placeholder icon
    { title: "Ryokan", icon: FaHome }, // Placeholder icon

    { title: "Tent", icon: TbTent },
    { title: "Tiny home", icon: FaHome }, // Placeholder icon
    { title: "Tower", icon: GiCastle },
    { title: "Tree house", icon: GiTreehouse },
    { title: "Trullo", icon: FaHome }, // Placeholder icon
    { title: "Windmill", icon: GiWindmill },
  ];

  return (
    <div className="px-8 lg:px-32 lg:flex lg:space-x-12 lg:min-h-[90vh] flex flex-col">
      {/* Title */}
      <h1 className="text-2xl text-center mt-16 lg:mt-12 lg:text-3xl font-semibold mb-6 lg:mb-12">
        Which of these best describes your place?
      </h1>

      {/* Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {options.map((option) => (
          <SelectionBox
            key={option.title}
            title={option.title}
            icon={option.icon}
            isSelected={selected === option.title}
            onClick={() => setSelected(option.title)}
          />
        ))}
      </div>
      <Link className="w-full  mt-4" href="/become-a-host/id/privacy-type">
        <button className="relative w-full lg:w-[200px] bg-[black] text-white rounded-md py-2 mb-2 font-semibold">
          Next
        </button>
      </Link>
    </div>
  );
};

export default StructureComponent;
