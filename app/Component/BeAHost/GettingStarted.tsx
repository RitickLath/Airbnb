import Image from "next/image";
import Link from "next/link";

const GettingStarted = () => {
  return (
    <div className="px-8 lg:px-16 lg:flex">
      {/* left/top div */}
      <div className="lg:w-1/2 lg:flex items-center mt-20 text-3xl lg:text-5xl font-bold">
        <h1>It’s easy to get started on Airbnb</h1>
      </div>

      {/* right/bottom div */}
      <div className="mt-12">
        {/* Item-1 */}
        <div className="flex">
          <div>
            <h1 className="text-2xl font-medium mb-2">
              Tell us about your place
            </h1>
            <h1>
              Share some basic info, such as where it is and how many guests can
              stay.
            </h1>
          </div>
          <div>
            <Image
              src="/Image/bed.webp"
              alt="bed"
              width={200}
              height={200}
            ></Image>
          </div>
        </div>

        {/* Item-2 */}
        <div className="flex">
          <div>
            <h1 className="text-2xl font-medium mb-2">Make it stand out</h1>
            <h1>
              Add 5 or more photos plus a title and description – we’ll help you
              out.
            </h1>
          </div>
          <div>
            <Image
              src="/Image/rest.webp"
              alt="rest"
              width={200}
              height={200}
            ></Image>
          </div>
        </div>

        {/* Item-3 */}
        <div className="flex mb-2">
          <div>
            <h1 className="text-2xl font-medium mb-2">Finish up and publish</h1>
            <h1>
              Choose a starting price, verify a few details, then publish your
              listing.
            </h1>
          </div>
          <div>
            <Image
              src="/Image/publish.webp"
              alt="publish"
              width={200}
              height={200}
            ></Image>
          </div>
        </div>

        {/* Link */}

        <Link className="w-full h-full border-2" href="/become-a-host/id/setup">
          <button className="relative w-full lg:w-[200px] bg-[#F62E58] text-white rounded-md py-2 mb-2 font-semibold">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GettingStarted;
