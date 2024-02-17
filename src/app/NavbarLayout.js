import Navbar from "@/components/Navbar";
import React from "react";

const NavbarLayout = ({ children }) => {
  return (
    <div className="text-black pt-[4rem] bg-slate-50">
      <Navbar />
      <div className="pt-5">{children}</div>
    </div>
  );
};

export default NavbarLayout;
