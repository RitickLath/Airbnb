"use server";
import prisma from "@/database/prisma";

export async function getAllProperties() {
  // get all properties
  const properties = await prisma.property.findMany();

  if (properties) {
    console.log("Properties");
    return properties;
  }
  console.log("No Properties");
  return "No Properties";
}
