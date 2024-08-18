import Image from "next/image";
import Link from "next/link";

const Place = () => {
  return (
    <div>
      <div className="px-8 lg:px-32 lg:flex lg:space-x-12 lg:min-h-[90vh]">
        {/* left / top */}
        <div className="lg:w-1/2 lg:min-h-[90vh] lg:flex items-center justify-center mt-20 lg:mt-0 text-3xl lg:text-5xl font-bold">
          <Image
            className="w-[100%]"
            src="/Image/Place.jpg"
            alt="place"
            width={300}
            height={300}
          ></Image>
        </div>
        {/* Right / bottom */}
        <div className="lg:min-h-[90vh] lg:w-1/2 mt-12 lg:mt-0 lg:flex lg:flex-col lg:justify-center lg:item-center">
          <h1 className="text-xl">Step 1</h1>
          <h1 className="text-3xl font-bold mt-2">Tell us about your place</h1>
          <h1 className="mt-3">
            In this step, we'll ask you which type of property you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </h1>
        </div>
      </div>

      <div className="mx-8 lg:mx-32 flex justify-end mt-12 lg:mt-0">
        <div className="w-full">
          <Link
            className="w-full mt-4"
            href="/become-a-host/id/structure"
          >
            <button className="relative w-full lg:w-[200px] bg-[black] text-white rounded-md py-2 mb-2 font-semibold">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Place;
