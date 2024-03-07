"use client";
import RegisterForm from "@/components/RegisterForm";
import { UserAuth } from "@/contexts/AuthContext";
import { useState } from "react";

const Page = () => {
  const { user,googleSignIn, RegisterWithEmailAndPassword } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormRegister = async (values) => {
    const {email, password} = values;
    try {
      await RegisterWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full p-10 bg-[#E8F1F8] justify-around items-start">
      <RegisterForm onRegister={handleSignIn} onFormRegister={handleFormRegister} />
      <div className="flex flex-col gap-2 pt-16">
        <h2 className="text-5xl text-slate-950">
          Sign Up to take <br /> control of your <br /> health
        </h2>
        <h2 className="text-md text-slate-950">
          if you already have an account <br /> you can{" "}
          <span className="text-blue-500">Login here!</span>
        </h2>
      </div>
    </div>
  );
};

export default Page;
