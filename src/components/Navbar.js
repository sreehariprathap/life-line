"use client";
import React from "react";
import Link from "next/link";
import { UserAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();

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

        {!user && (
          <div className="flex gap-5">
            <Link href="/login">
              <button className="btn btn-primary">Sign In</button>
            </Link>
            <Link href="/register">
              <button className="btn btn-primary">Register</button>
            </Link>
          </div>
        )}

        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
