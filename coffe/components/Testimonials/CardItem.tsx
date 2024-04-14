import Image from "next/image";
import React from "react";

interface CardItemProps {
  id: string;
  img: string;
  name: string;
  description: string;
  aosDelay: string;
}

const CardItem: React.FC<CardItemProps> = ({
  id,
  img,
  name,
  description,
  aosDelay,
}) => {
  return (
    <div>
      <div
        //data-aos="fade-up"
        //data-aos-delay={aosDelay}
        className="bg-primaryText rounded-lg  p-6 max-h-[400px] w-56 text-white"
      >
        <Image
          src={img}
          alt="logo"
          width={250}
          height={150}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center items-center mt-8 ">
          <span className="font-bold text-2xl"> {name}</span>
          <p className="opacity-95">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
