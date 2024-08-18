import Link from "next/link";
import React from "react";

interface Prop {
  icon: React.ReactNode;
  title: string;
}

// Style constants
const cardStyles =
  "bg-white cursor-pointer px-4 py-5 flex space-x-4 items-center rounded-md font-semibold border border-[#F7F7F7] hover:shadow-lg transition-shadow duration-300";
const iconStyles = "text-xl";

const CategoriesCard: React.FC<Prop> = ({ icon, title }) => {
  return (
    <Link
      href={`/properties/${encodeURIComponent(title).substring(
        0,
        title.length
      )}`}
      className={cardStyles}
    >
      <h1 className={iconStyles}>{icon}</h1>
      <h1>{title}</h1>
    </Link>
  );
};

export default CategoriesCard;
