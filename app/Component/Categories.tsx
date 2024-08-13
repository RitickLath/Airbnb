import React from "react";
import CategoriesCard from "./CategoriesCard";

import { MdOutlinePool } from "react-icons/md";
import { MdLocalParking } from "react-icons/md";
import { PiWashingMachine } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { GiFireplace } from "react-icons/gi";
import { PiTelevisionFill } from "react-icons/pi";
import { GiBarbecue } from "react-icons/gi";

// Define style constants
const containerStyles = "px-12 lg:px-20 mt-10 py-10 bg-[#F7F7F7]";
const headingStyles = "text-xl font-semibold mb-2";
const subheadingStyles = "mb-4 text-gray-600";
const gridContainerStyles =
  "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";

interface Prop {
  icon: React.ReactNode;
  title: string;
}

const categories: Prop[] = [
  { icon: <MdOutlinePool />, title: "Pool >" },
  { icon: <MdLocalParking />, title: "Parking >" },
  { icon: <PiWashingMachine />, title: "Washing Machine >" },
  { icon: <TbAirConditioning />, title: "Air Conditioning >" },
  { icon: <GiFireplace />, title: "Fireplace >" },
  { icon: <PiTelevisionFill />, title: "TV >" },
  { icon: <GiBarbecue />, title: "Barbecue >" },
];

const Categories: React.FC = () => {
  return (
    <div className={containerStyles}>
      <h1 className={headingStyles}>
        Get specific with your favourite amenities
      </h1>
      <h2 className={subheadingStyles}>
        Choose from top features like these – and more – for a personalised
        stay.
      </h2>
      <div className={gridContainerStyles}>
        {categories.map((category, index) => (
          <CategoriesCard
            key={index}
            icon={category.icon}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
