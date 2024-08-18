import DisplayIcons from "@/app/Component/DisplayIcons";
import Searchbar from "@/app/Component/Searchbar";
import AllProperties from "@/app/Component/showAllProperty";
import React from "react";


// Define style constants
const containerStyle = "px-12 lg:px-12 mt-10";

const Properties: React.FC = () => {
  return (
    <div className={containerStyle}>
      <Searchbar />
      <DisplayIcons />
      <AllProperties />
    </div>
  );
};

export default Properties;
