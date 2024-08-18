import { getAllProperties } from "@/actions/properties";
import Image from "next/image";
import React from "react";
import SinglePropertyCard from "./SinglePropertyCard";

const AllProperties = async () => {
  const properties = await getAllProperties();

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.length > 0 ? (
        properties.map((property, index) => (
          <SinglePropertyCard key={index} property={property} />
        ))
      ) : (
        <p>No properties available.</p>
      )}
    </div>
  );
};

export default AllProperties;
