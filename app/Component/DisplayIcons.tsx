import React from "react";
import IconsCard from "./IconsCard";

import { GiFarmTractor } from "react-icons/gi";
import {
  MdOutlineVisibility,
  MdOutlineBedroomChild,
  MdDesignServices,
  MdPool,
  MdOutlineEmojiEvents,
  MdBeachAccess,
  MdOutlineDirectionsBoat,
} from "react-icons/md";
import {
  FaHome,
  FaWater,
  FaFire,
  FaCrown,
  FaHotel,
  FaCampground,
  FaPlaystation,
  FaShip,
  FaUmbrellaBeach,
} from "react-icons/fa";
import {
  GiTreehouse,
  GiSolarPower,
  GiCastle,
  GiMedievalGate,
  GiParkBench,
  GiHut,
  GiMountaintop,
  GiCaveEntrance,
  GiShepherdsCrook,
  GiDesert,
  GiWaterfall,
} from "react-icons/gi";
import Link from "next/link";

const propertyCategories = [
  { title: "Farms", icon: <GiFarmTractor /> },
  { title: "Amazing Views", icon: <MdOutlineVisibility /> },
  { title: "Treehouses", icon: <GiTreehouse /> },
  { title: "Rooms", icon: <MdOutlineBedroomChild /> },
  { title: "Design", icon: <MdDesignServices /> },
  { title: "Amazing Pools", icon: <MdPool /> },
  { title: "OMG", icon: <MdOutlineEmojiEvents /> },
  { title: "BeachFront", icon: <MdBeachAccess /> },
  { title: "Tiny Homes", icon: <FaHome /> },
  { title: "LakeFront", icon: <FaWater /> },
  { title: "Trending", icon: <FaFire /> },
  { title: "Off-the-Grid", icon: <GiSolarPower /> },
  { title: "Historical Homes", icon: <GiCastle /> },
  { title: "Castles", icon: <GiMedievalGate /> },
  { title: "National Parks", icon: <GiParkBench /> },
  { title: "Luxe", icon: <FaCrown /> },

  { title: "Lake", icon: <GiWaterfall /> },
  { title: "Mansions", icon: <FaHotel /> },
  { title: "Tropical", icon: <FaUmbrellaBeach /> },
  { title: "Bed and Breakfast", icon: <GiHut /> },
  { title: "Countryside", icon: <GiShepherdsCrook /> },
  { title: "Top Cities", icon: <MdOutlineVisibility /> }, // Top cities could use an eye icon
  { title: "Top of the World", icon: <GiMountaintop /> },
  { title: "Caves", icon: <GiCaveEntrance /> },
  { title: "Shepherd's Huts", icon: <GiShepherdsCrook /> },
  { title: "A-Frames", icon: <FaCampground /> },
  { title: "Camping", icon: <FaCampground /> },
  { title: "Play", icon: <FaPlaystation /> },

  { title: "Boats", icon: <FaShip /> },
  { title: "Deserts", icon: <GiDesert /> },
  { title: "Houseboats", icon: <MdOutlineDirectionsBoat /> },
  { title: "Beach", icon: <FaUmbrellaBeach /> },
];

const DisplayIcons = () => {
  return (
    <div className="mt-3 flex space-x-12 overflow-x-scroll overflow-y-hidden small-scrollbar">
      {propertyCategories.map((item, index) => (
        <IconsCard key={index} icon={item.icon} title={item.title} />
      ))}
    </div>
  );
};

export default DisplayIcons;
