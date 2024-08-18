import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Property {
  id: number;
  title: string;
  images: string[];
  pricePerNight: number;
}

interface SinglePropertyCardProps {
  property: Property;
}

// Define style constants
const linkStyle =
  "max-w-sm rounded overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out";
const imageStyle = "w-full h-48 object-cover";
const containerStyle = "px-6 py-4";
const titleStyle = "font-bold text-xl mb-2";
const priceStyle = "text-gray-700 text-base";

const SinglePropertyCard: React.FC<SinglePropertyCardProps> = ({
  property,
}) => {
  return (
    <Link href={`/${property.id}`} className={linkStyle}>
      <Image
        className={imageStyle}
        src={property?.images[0]}
        alt={property.title}
        width={100}
        height={100}
      />
      <div className={containerStyle}>
        <div className={titleStyle}>{property.title}</div>
        <p className={priceStyle}>${property.pricePerNight} / night</p>
      </div>
    </Link>
  );
};

export default SinglePropertyCard;
