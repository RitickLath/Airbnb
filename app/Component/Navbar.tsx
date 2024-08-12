import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

// CSS Class Names
const navbarContainer: string =
  "w-full flex justify-between bg-red-100 shadow-lg px-8 py-4";

const centerLinksContainer: string = "hidden lg:flex items-center space-x-4";
const linkStyle: string = "hover:bg-gray-100 rounded-full px-3 py-2";
const rightContainer: string = "flex items-center space-x-4";

const userMenuContainer: string =
  "flex items-center space-x-3 border-2 rounded-full px-4 py-2 text-xl border-gray-500 text-gray-600 cursor-pointer";

// Component
const Navbar = () => {
  return (
    <div className={navbarContainer}>
      {/* LEFT */}
      <div>
        <Image
          alt="banner"
          src="/Image/Airbnb_logo.png"
          width={120}
          height={40}
          className="w-[120px] h-10"
        />
      </div>

      {/* MIDDLE */}
      <div className={centerLinksContainer}>
        <Link className={linkStyle} href="/">
          Stays
        </Link>
        <Link className={linkStyle} href="/">
          Experience
        </Link>
      </div>

      {/* RIGHT */}
      <div className={rightContainer}>
        <Link className={linkStyle} href="/">
          Airbnb your home
        </Link>
        <div className={userMenuContainer}>
          <FaRegUserCircle className="font-bold" />
          <RxHamburgerMenu className="font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
