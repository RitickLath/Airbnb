import Link from "next/link";
import React from "react";

interface IconsCardProps {
  icon: React.ReactNode;
  title: string;
}

// Define style constants
const linkStyle = "flex flex-col items-center justify-center text-[#6A6A6A] hover:text-black cursor-pointer";
const iconStyle = "text-[1.8rem]";
const titleStyle = "";

const IconsCard: React.FC<IconsCardProps> = ({ icon, title }) => {
  const encodedTitle = encodeURIComponent(title);

  return (
    <Link
      href={`/properties/category?title=${encodedTitle}`}
      className={linkStyle}
    >
      <div className={iconStyle}>{icon}</div>
      <h1 className={titleStyle}>{title}</h1>
    </Link>
  );
};

export default IconsCard;
