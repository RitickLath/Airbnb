import React from "react";
import FeatureCard from "./FeatureCard";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaHouseDamage } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

const topDivStyle: string =
  "w-full px-12 lg:px-20 lg:flex justify-between my-20";

const Feature: React.FC = () => {
  return (
    <div className={topDivStyle}>
      <FeatureCard
        icon={<VscWorkspaceTrusted />}
        heading="Enjoy some flexibility"
        paragraph="Stays with flexible cancellation make it easy to rebook if your plans change."
      />

      <FeatureCard
        icon={<FaHouseDamage />}
        heading="More than 7M active listings"
        paragraph="Join more than 1 billion guests who’ve found getaways in over 220 countries and destinations."
      />

      <FeatureCard
        icon={<HiAdjustmentsHorizontal />}
        heading="100+ filters for tailored stays"
        paragraph="Pick your price range, the number of rooms you want and other key amenities to find the stay that fits your needs."
      />
    </div>
  );
};

export default Feature;
