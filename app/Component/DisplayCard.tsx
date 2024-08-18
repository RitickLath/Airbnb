import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DisplayProps {
  image: string;
  title: string;
  paragraph: string;
}

// Define style constants
const linkStyle = "lg:w-[350px] mb-8";
const imageStyle = "w-full h-[250px] rounded-md";
const titleStyle = "font-semibold mt-2";
const paragraphStyle = "text-normal text-gray-500";

const DisplayCard: React.FC<DisplayProps> = ({ image, title, paragraph }) => {
  return (
    <Link href="/properties" className={linkStyle}>
      <Image
        alt="img"
        src={image}
        width={300}
        height={300}
        className={imageStyle}
      />
      <h1 className={titleStyle}>{title}</h1>
      <h2 className={paragraphStyle}>{paragraph}</h2>
    </Link>
  );
};

export default DisplayCard;
