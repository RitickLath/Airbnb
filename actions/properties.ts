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
          firstName: true,
          lastName: true,
          profilePic: true,
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
      userId: 1,
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
      cleaningFee: 30.0, // Added cleaning fee
      ServiceFee: 20.0, // Added service fee
    },
    {
      userId: 2,
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
      cleaningFee: 25.0, // Added cleaning fee
      ServiceFee: 15.0, // Added service fee
    },
    {
      userId: 3,
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
      cleaningFee: 100.0, // Added cleaning fee
      ServiceFee: 50.0, // Added service fee
    },
    {
      userId: 4,
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
      cleaningFee: 40.0, // Added cleaning fee
      ServiceFee: 25.0, // Added service fee
    },
    {
      userId: 5,
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
      cleaningFee: 35.0, // Added cleaning fee
      ServiceFee: 20.0, // Added service fee
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
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        passwordHash: "hashedpassword1",
        phoneNumber: "+1234567890",
        profilePic: "https://example.com/images/alice.jpg",
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        firstName: "Bob",
        lastName: "Smith",
        email: "bob.smith@example.com",
        passwordHash: "hashedpassword2",
        phoneNumber: "+1234567891",
        profilePic: "https://example.com/images/bob.jpg",
        isVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        firstName: "Charlie",
        lastName: "Davis",
        email: "charlie.davis@example.com",
        passwordHash: "hashedpassword3",
        phoneNumber: "+1234567892",
        profilePic: "https://example.com/images/charlie.jpg",
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        firstName: "Dana",
        lastName: "Taylor",
        email: "dana.taylor@example.com",
        passwordHash: "hashedpassword4",
        phoneNumber: "+1234567893",
        profilePic: "https://example.com/images/dana.jpg",
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        firstName: "Eve",
        lastName: "Miller",
        email: "eve.miller@example.com",
        passwordHash: "hashedpassword5",
        phoneNumber: "+1234567894",
        profilePic: "https://example.com/images/eve.jpg",
        isVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        firstName: "Frank",
        lastName: "Wilson",
        email: "frank.wilson@example.com",
        passwordHash: "hashedpassword6",
        phoneNumber: "+1234567895",
        profilePic: "https://example.com/images/frank.jpg",
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        firstName: "Grace",
        lastName: "Lee",
        email: "grace.lee@example.com",
        passwordHash: "hashedpassword7",
        phoneNumber: "+1234567896",
        profilePic: "https://example.com/images/grace.jpg",
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        firstName: "Henry",
        lastName: "Brown",
        email: "henry.brown@example.com",
        passwordHash: "hashedpassword8",
        phoneNumber: "+1234567897",
        profilePic: "https://example.com/images/henry.jpg",
        isVerified: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        firstName: "Ivy",
        lastName: "Anderson",
        email: "ivy.anderson@example.com",
        passwordHash: "hashedpassword9",
        phoneNumber: "+1234567898",
        profilePic: "https://example.com/images/ivy.jpg",
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  });

  if (user) {
    console.log("Users Added");
  }
  console.log("Users Not Added");
}
