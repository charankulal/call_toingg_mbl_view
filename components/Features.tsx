import React from "react";
import YouTube from "react-youtube";
import Image from "next/image";

const Features = () => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <div className="flex w-full justify-center items-center text-center mt-16">
        <h3 className="text-gray-500 text-2xl mb-5">
          Automate your agent with 5000+ integrations like
        </h3>
      </div>

      <div className="flex mt-3 mb-10 justify-center items-center space-x-4">
        <Image src="/icons/image1.svg" alt="image" width={50} height={50} />
        <Image src="/icons/image2.svg" alt="image" width={50} height={50} />
        <Image src="/icons/image3.svg" alt="image" width={50} height={50} />
        <Image src="/icons/image4.svg" alt="image" width={50} height={50} />
        <Image src="/icons/image5.svg" alt="image" width={50} height={50} />
        <Image src="/icons/image6.svg" alt="image" width={50} height={50} />
        <Image src="/icons/image7.svg" alt="image" width={50} height={50} />
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-xl ml-4">
          <YouTube videoId="_La3wQlntgw" opts={opts} />
        </div>
      </div>
    </>
  );
};

export default Features;
