import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

// Define style constants
const footerContainer =
  "flex justify-between px-12 lg:px-20 py-6 border mt-10 bg-gray-100";
const linkContainer = "flex space-x-4 text-sm";
const linkItem = "cursor-pointer";
const iconContainer = "hidden md:flex text-xl space-x-5";

const Footer: React.FC = () => {
  return (
    <div className={footerContainer}>
      <div className={linkContainer}>
        <h1 className={linkItem}>2024 Airbnb, Inc</h1>
        <h1 className={linkItem}>Privacy</h1>
        <h1 className={linkItem}>Terms</h1>
        <h1 className={`${linkItem} hidden md:flex`}>Sitemap</h1>
        <h1 className={`${linkItem} hidden md:flex`}>Company Details</h1>
      </div>

      <div className={iconContainer}>
        <FaFacebookSquare />
        <FaInstagram />
        <FaTwitter />
      </div>
    </div>
  );
};

export default Footer;
