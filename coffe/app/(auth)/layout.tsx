import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex justify-center mt-12 ">{children}</div>;
};

export default layout;
