import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white flex flex-col w-full p-5">
      <div className="flex justify-between items-center w-full pb-3">
        <img src="/logo.png" alt="lifeline logo" className="w-48" />
        <div className="flex flex-col gap-3 items-start">
          <h1 className="text-primary">Contact Us</h1>
          <p>✉️ contact@lifeline.com</p>
          <p>📞 (548)-577-0621</p>
          <p>📍 551 Vanier Drive, Kitchener, Ontario</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between pt-5">
        <p className="text-primary">Copyright © 2022 </p>
        <p className="text-primary">
        All Rights Reserved | Terms and Conditions | Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
