import MobileMenu from "@/components/shared/MobileMenu";
import Sidebar from "@/components/shared/Sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <Sidebar />
      <MobileMenu />
      <div className="container">
        <div className="root-wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
