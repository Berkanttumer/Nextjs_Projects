import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ServicesCartProps {
  id: string;
  img: string;
  name: string;
  aosDelay: string;
}

const ServicesCart: React.FC<ServicesCartProps> = ({
  id,
  img,
  name,
  aosDelay,
}) => {
  return (
    <Link href="#" className="hover:scale-105 transition duration-700">
      <div
        className="p-6 bg-secondaryText text-white rounded-xl w-[270px] h-[450px] "
        data-aos="fade-down"
        data-aos-delay={aosDelay}
      >
        <Image
          src={img}
          alt="logo"
          width={250}
          height={450}
          className="rounded-xl"
        />
        <div className="text-center mt-4 font-bold text-xl text-wrap">
          {name}
        </div>
      </div>
    </Link>
  );
};

export default ServicesCart;
