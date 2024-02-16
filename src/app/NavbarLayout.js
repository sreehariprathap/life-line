import Navbar from "@/components/Navbar";
import React from "react";

const NavbarLayout = ({ children }) => {
  return (
    <div className="text-black pt-[4rem]">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default NavbarLayout;
