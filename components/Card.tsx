import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card = ({ title, description, imageUrl }: CardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-2xl shadow-black transition-shadow duration-300  flex flex-col justify-center items-center">
      <div className="relative h-48 w-48 flex justify-center items-center">
        <Image src={imageUrl} alt={title} width={100} height={100} />
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
