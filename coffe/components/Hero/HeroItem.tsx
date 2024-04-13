import Image from "next/image";
import React from "react";
import VısıtButton from "../Button/VısıtButton";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface HeroItemProps {
  label1: string;
  label2: string;
  label3: string;
  src: string;
  text1: string;
  text2: string;
}
const HeroItem: React.FC<HeroItemProps> = ({
  label1,
  label2,
  label3,
  src,
  text1,
  text2,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="font-bold flex ">
        <div className="font-sriracha flex flex-col justify-center text-center">
          <h1 className="text-6xl">
            {label1}{" "}
            <span className="font-pacifico bg-gradient-to-b from-lightText to-primaryText/75 bg-clip-text text-transparent">
              {label2}
            </span>{" "}
            {label3}
          </h1>
          <div className="flex justify-center mt-5">
            <VısıtButton icon={MdOutlineKeyboardArrowRight} label="VISIT" />
          </div>
        </div>
      </div>
      <div className="min-h-[450px] flex justify-center">
        <Image src={src} alt="logo" height={420} width={420} className="spin" />
      </div>
    </div>
  );
};

export default HeroItem;
