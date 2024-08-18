import { getPropertyById } from "@/actions/properties";
import Image from "next/image";
import React from "react";
import { MdFreeCancellation } from "react-icons/md";
import { MdOutlineDoorSliding } from "react-icons/md";

interface Property {
  title: string;
  description: string;
  propertyType: string;
  pricePerNight: number;
  category: string[];
  tags: string[];
  images: string[];
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  user: {
    firstName: string;
    lastName: string;
  };
  maxGuests: number;
  cleaningFee: number;
  ServiceFee: number;
}

interface DynamicPropertyProps {
  params: {
    propertyId: number;
  };
}

const DynamicProperty: React.FC<DynamicPropertyProps> = async ({ params }) => {
  const property: Property | null = await getPropertyById(params.propertyId);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row">
      <div className="lg:w-2/3">
        {/* Property Images */}
        {/* {property.images.length > 0 && (
          <div className="relative w-full h-80 mb-6">
            <Image
              src={/${property.images[0]}}
              alt={property.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )} */}

        {/* Property Title and Description */}
        <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
        <h2 className="text-xl text-gray-700 mb-4">{property.description}</h2>

        {/* Property Details */}
        <div className="mb-6">
          <div className="text-lg font-semibold">
            Property Type: {property.propertyType}
          </div>
          <div className="text-lg font-semibold">
            Price per Night: ${property.pricePerNight}
          </div>
          <div className="text-lg font-semibold">
            Max Guests: {property.maxGuests}
          </div>
        </div>

        {/* Property Address */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-1">Address:</h3>
          <p>{property.address}</p>
          <p>
            {property.city}, {property.state} {property.postalCode}
          </p>
          <p>{property.country}</p>
        </div>

        {/* Host Information */}
        <div className="border-t border-gray-300 mt-6 pt-6">
          <h2 className="text-2xl font-bold mb-2">
            Hosted by {property.user.firstName}
          </h2>
          <p className="text-gray-600">
            {`Designed by ${property.user.firstName} ${property.user.lastName}`}
          </p>
        </div>

        {/* Property Features */}
        <div className="border-t border-gray-300 mt-6 pt-6">
          <h2 className="text-2xl font-bold mb-4">What this place offers</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <MdOutlineDoorSliding className="text-3xl" />
              <div>
                <h3 className="font-semibold">Self Check-in</h3>
                <p>Check yourself in with the lockbox</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MdFreeCancellation className="text-3xl" />
              <div className="flex">
                <h3 className="font-semibold">
                  Free Cancellation for 48 Hours
                </h3>
                <p>Get a full refund if you change your mind</p>
              </div>
            </div>
          </div>
        </div>

        {/* Categories and Tags */}
        <div className="border-t border-gray-300 mt-6 pt-6">
          <h2 className="text-2xl font-bold mb-4">Categories & Tags</h2>
          <div className="flex flex-wrap gap-2">
            {property.category.map((cat, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {cat}
              </span>
            ))}
            {property.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Interface */}
      <div className="lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
        <div className="border p-4 rounded-lg shadow-lg">
          <div className="text-2xl font-bold mb-4">
            ${property.pricePerNight} / night
          </div>
          <div className=" mb-4">
            <div className="mb-4 sm:mb-0 sm:mr-2">
              <label className="block text-gray-700">Check-in</label>
              <input type="date" className="border rounded p-2 w-full" />
            </div>
            <div className="mb-4 sm:mb-0 sm:mr-2">
              <label className="block text-gray-700">Checkout</label>
              <input type="date" className="border rounded p-2 w-full" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Guests</label>
            <input
              type="number"
              className="border rounded p-2 w-full"
              min="1"
              max="10"
            />
          </div>
          <button className="bg-pink-500 text-white py-2 px-4 rounded w-full">
            Reserve
          </button>
          <p className="text-gray-600 text-sm mt-2">You won't be charged yet</p>
          <div className="mt-4">
            <div className="flex justify-between">
              <span>${property.pricePerNight} x 5 nights</span>
              <span>${property.pricePerNight * 5}</span>
            </div>
            <div className="flex justify-between">
              <span>Cleaning fee</span>
              <span>${property.cleaningFee}</span>
            </div>
            <div className="flex justify-between">
              <span>Service fee</span>
              <span>${property.ServiceFee}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total before taxes</span>
              <span>
                {property.pricePerNight * 5 +
                  property.cleaningFee +
                  property.ServiceFee}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicProperty;
