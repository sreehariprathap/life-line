"use client";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Page = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    setError(null);

    // Check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (passwordOne === passwordTwo) {
      const auth = getAuth(); // Get the authentication object
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          passwordOne
        );
        console.log("Success. The user is created in Firebase");
        router.push("/logged_in");
      } catch (error) {
        // An error occurred. Set error message to be displayed to user
        setError(error.message);
      }
    } else {
      setError("Passwords do not match");
    }
  };

  return (
    <div className="text-center bg-gray-200 py-8">
      {error && <div className="text-red-500">{error}</div>}
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <label className="block mb-2" htmlFor="signUpEmail">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          name="email"
          id="signUpEmail"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <label className="block mb-2" htmlFor="signUpPassword">
          Password
        </label>
        <input
          type="password"
          name="passwordOne"
          value={passwordOne}
          onChange={(event) => setPasswordOne(event.target.value)}
          id="signUpPassword"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <label className="block mb-2" htmlFor="signUpPassword2">
          Confirm Password
        </label>
        <input
          type="password"
          name="password"
          value={passwordTwo}
          onChange={(event) => setPasswordTwo(event.target.value)}
          id="signUpPassword2"
          placeholder="Confirm Password"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <button
          onClick={onSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Page;
