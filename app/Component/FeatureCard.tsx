import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  heading: string;
  paragraph: string;
}

const topDivStyle: string = "text-xl mb-16 lg:mb-0 lg:w-[350px]";
const iconStyle: string = "my-2";
const headingStyle: string = "font-semibold my-2";
const paragraphStyle: string = "my-2 text-lg";

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  heading,
  paragraph,
}) => {
  return (
    <div className={topDivStyle}>
      <h1 className={iconStyle}>{icon}</h1>
      <h2 className={headingStyle}>{heading}</h2>
      <p className={paragraphStyle}>{paragraph}</p>
    </div>
  );
};

export default FeatureCard;
