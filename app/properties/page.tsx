import React from "react";
import Searchbar from "../Component/Searchbar";
import DisplayIcons from "../Component/DisplayIcons";
import AllProperties from "../Component/showAllProperty";

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
