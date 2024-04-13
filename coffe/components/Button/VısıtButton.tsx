import React from "react";
import { IconType } from "react-icons";

interface VısıtButtonProps {
  icon: IconType;
  onclick?: () => void;
  label: string;
}

const VısıtButton: React.FC<VısıtButtonProps> = ({
  icon: Icon,
  onclick,
  label,
}) => {
  return (
    <button className="bg-primaryText p-4 px-6 rounded-full flex gap-4 items-center hover:scale-105 transition duration-700">
      {label}
      {<Icon />}
    </button>
  );
};

export default VısıtButton;
