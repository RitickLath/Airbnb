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
  return [];
}

export async function getPropertyById(id: number) {
  const property = await prisma.property.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });
  if (property) {
    return property;
  }
  return {};
}

export async function addProperties() {
  const newProperties = [
    {
      userId: 3,
      title: "Urban Loft",
      description: "A stylish loft in the heart of the city.",
      propertyType: "Apartment",
      pricePerNight: 150.0,
      category: ["Business", "City"],
      tags: ["Downtown", "Wi-Fi"],
      images: ["image5.jpg", "image6.jpg"],
      address: "789 Main St",
      city: "New York",
      state: "NY",
      country: "USA",
      postalCode: "10001",
      latitude: 40.7128,
      longitude: -74.006,
      maxGuests: 2,
    },
    {
      userId: 4,
      title: "Countryside Cottage",
      description: "A charming cottage in the peaceful countryside.",
      propertyType: "Cottage",
      pricePerNight: 90.0,
      category: ["Nature", "Family"],
      tags: ["Countryside", "Garden"],
      images: ["image7.jpg", "image8.jpg"],
      address: "321 Country Ln",
      city: "Lancaster",
      state: "PA",
      country: "USA",
      postalCode: "17601",
      latitude: 40.0379,
      longitude: -76.3055,
      maxGuests: 5,
    },
    {
      userId: 5,
      title: "Luxury Villa",
      description: "A stunning villa with a private pool.",
      propertyType: "Villa",
      pricePerNight: 450.0,
      category: ["Luxury", "Romantic"],
      tags: ["Private Pool", "Ocean View"],
      images: ["image9.jpg", "image10.jpg"],
      address: "654 Palm Ave",
      city: "Malibu",
      state: "CA",
      country: "USA",
      postalCode: "90265",
      latitude: 34.0259,
      longitude: -118.7798,
      maxGuests: 8,
    },
    {
      userId: 6,
      title: "Modern Downtown Apartment",
      description: "A chic apartment in the heart of downtown.",
      propertyType: "Apartment",
      pricePerNight: 200.0,
      category: ["Business", "City"],
      tags: ["Downtown", "Wi-Fi"],
      images: ["image11.jpg", "image12.jpg"],
      address: "987 Elm St",
      city: "Chicago",
      state: "IL",
      country: "USA",
      postalCode: "60605",
      latitude: 41.8781,
      longitude: -87.6298,
      maxGuests: 3,
    },
    {
      userId: 7,
      title: "Secluded Forest Cabin",
      description: "A peaceful retreat in the forest.",
      propertyType: "Cabin",
      pricePerNight: 110.0,
      category: ["Nature", "Family"],
      tags: ["Forest", "Fireplace"],
      images: ["image13.jpg", "image14.jpg"],
      address: "432 Pine Ln",
      city: "Portland",
      state: "OR",
      country: "USA",
      postalCode: "97201",
      latitude: 45.5122,
      longitude: -122.6587,
      maxGuests: 6,
    },
  ];

  const propAdded = await prisma.property.createMany({
    data: newProperties,
  });

  if (propAdded) {
    console.log("Additional Properties Added");
    return "Properties Added";
  }
}

export async function addUser() {
  const user = await prisma.user.createMany({
    data: [
      {
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        passwordHash: "hashedpassword789", // Replace with actual hashed password
        phoneNumber: "555-123-4567",
        profilePic: "charlie-profile.jpg",
        isVerified: true,
      },
      {
        name: "Diana Prince",
        email: "diana.prince@example.com",
        passwordHash: "hashedpassword101", // Replace with actual hashed password
        phoneNumber: "555-987-6543",
        profilePic: "diana-profile.jpg",
        isVerified: false,
      },
      {
        name: "Ethan Hunt",
        email: "ethan.hunt@example.com",
        passwordHash: "hashedpassword112", // Replace with actual hashed password
        phoneNumber: "555-654-3210",
        profilePic: "ethan-profile.jpg",
        isVerified: true,
      },
      {
        name: "Fiona Gallagher",
        email: "fiona.gallagher@example.com",
        passwordHash: "hashedpassword223", // Replace with actual hashed password
        phoneNumber: "555-321-6540",
        profilePic: "fiona-profile.jpg",
        isVerified: false,
      },
      {
        name: "George Clooney",
        email: "george.clooney@example.com",
        passwordHash: "hashedpassword334", // Replace with actual hashed password
        phoneNumber: "555-789-0123",
        profilePic: "george-profile.jpg",
        isVerified: true,
      },
    ],
  });

  if (user) {
    console.log("Users Added");
  }
  console.log("Users Not Added");
}
