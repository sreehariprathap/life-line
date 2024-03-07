"use client";
import LoginForm from "@/components/LoginForm";
import { UserAuth } from "@/contexts/AuthContext";
import { useState } from "react";

const Page = () => {
  const { user, googleSignIn, logOut, loginWithEmailAndPassword } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCredentialSignIn = async (values) => {
    try {
      await loginWithEmailAndPassword(values.email,values.password);
    } catch (error) {
      console.log('error with login',error);
    }
  };

  return (
    <div className="flex w-full p-10 bg-[#E8F1F8] justify-between">
      <LoginForm onLogin={handleSignIn} onCredentialLogin={handleCredentialSignIn} />
      <div className="flex flex-col gap-2">
        <h2 className="text-5xl text-slate-950">
          Sign In to take <br /> control of your <br /> health
        </h2>
        <h2 className="text-md text-slate-950">
          if you don’t have an account <br /> you can{" "}
          <span className="text-blue-500">Register here!</span>
        </h2>
      </div>
      <div>
        <img src="/Rectangle 1143.png" alt="" className="" />
      </div>
    </div>
  );
};

export default Page;
