import Image from "next/image";
import React from "react";

interface ServicesItemProps {
  id: string;
  img: string;
  name: string;
  description: string;
  aosDelay: string;
}

const ServicesItem: React.FC<ServicesItemProps> = ({
  id,
  img,
  name,
  description,
  aosDelay,
}) => {
  return (
    <div
      className="max-w-[310px] bg-white shadow-lg p-6 rounded-lg flex flex-col justify-center hover:bg-lightText max-h-[300px] pb-20 hover:text-red-600"
      data-aos="fade-down"
      data-aos-once="true"
      data-aos-delay={aosDelay}
    >
      <div className="flex justify-center ">
        <Image
          src={img}
          alt="logo"
          width={200}
          height={200}
          className="hover:scale-110 transition duration-700 "
        />
      </div>
      <div className="text-center ">
        <h3 className="font-bold text-xl">{name}</h3>
        <p className="text-gray-400 ">{description}</p>
      </div>
    </div>
  );
};

export default ServicesItem;
