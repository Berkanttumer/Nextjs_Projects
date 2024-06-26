import React from "react";
import { IconType } from "react-icons";

interface OrderButtonProps {
  icon: IconType;
  onclick?: () => void;
  label: string;
}

const OrderButton: React.FC<OrderButtonProps> = ({
  icon: Icon,
  label,
  onclick,
}) => {
  return (
    <button className="bg-brandDark p-4 px-6 rounded-full flex gap-4 items-center hover:scale-105 transition duration-700">
      {label}
      {<Icon />}
    </button>
  );
};

export default OrderButton;
