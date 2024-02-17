"use client"
import Navbar from "@/components/Navbar";
import React from "react";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const NavbarLayout = ({ children }) => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);
  return (
    <div className="text-black pt-[4rem]">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default NavbarLayout;
