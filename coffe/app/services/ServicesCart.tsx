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
    <Link href="#">
      <div
        className="p-6 bg-secondaryText text-white rounded-xl"
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
        <div className="text-center mt-4 font-bold text-xl">{name}</div>
      </div>
    </Link>
  );
};

export default ServicesCart;
