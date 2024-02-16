"use client";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 fixed top-0 z-50 flex justify-between gap-4 items-center px-5">
        <div className="">
          <img src="/logo.png" alt="logo" className="w-48" />
        </div>
        <div>
          <ul className="flex gap-5 text-slate-900">
            <li>Home</li>
            <li>About Us</li>
            <li>How It Works</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <button className="btn btn-primary">Sign In</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
