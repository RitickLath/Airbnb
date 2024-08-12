import Image from "next/image";
import Link from "next/link";
import React from "react";
interface DisplayProps {
  image: string;
  title: string;
  paragraph: string;
}

const DisplayCard: React.FC<DisplayProps> = ({ image, title, paragraph }) => {
  return (
    <Link href="" className="lg:w-[350px] mb-8">
      <Image
        alt="img"
        src={image}
        width={300}
        height={300}
        className="w-full h-[250px] rounded-md"
      />
      <h1 className="font-semibold mt-2">{title}</h1>
      <h2 className="text-normal text-gray-500">{paragraph}</h2>
    </Link>
  );
};

export default DisplayCard;
