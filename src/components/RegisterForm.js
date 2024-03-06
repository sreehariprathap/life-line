import React from "react";

const RegisterForm = ({onRegister}) => {
  return (
    <div className="p-4 flex flex-col gap-5 items-center justify-center">
      <h2 className="text-2xl font-bold">Join Us</h2>
      <form className="w-[50%] flex justify-center items-center flex-col gap-5">
        <div className="flex gap-5 items-center justify-between">
          <input type="text" className="input" placeholder="First Name" />
          <input type="text" className="input" placeholder="Last Name" />
        </div>
        <div className="flex gap-5 items-center justify-between">
          <input type="email" className="input" placeholder="Enter Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <div className="flex gap-5 items-center justify-between">
          <div className="flex flex-row gap-2 w-[48%]">
            <label for="datepicker" className=" text-gray-700">
              Date of birth
            </label>
            <input type="date" name="" id="" className="input" />
          </div>
          <select name="" id="" className="input ml-[-20px]" >
            <option value="" selected>
              Select Gender
            </option>
            <option value="">Male</option>
            <option value="">Female</option>
            <option value="">Other</option>
            <option value="">Prefer Not To Answer</option>
          </select>
        </div>
        <div className="flex gap-5 items-center justify-between">
          <input type="text" className="input" placeholder="Enter Height" />
          <input type="text" className="input" placeholder="Enter Weight" />
        </div>
        <div className="flex gap-5 items-center justify-between">
          <input
            type="text"
            className="input"
            placeholder="Health Card number"
          />
        </div>
      </form>
      <div>

      <button className="btn btn-primary">Register</button>
      </div>
      <div className="divider text-slate-950">OR</div>
      <button className="btn bg-slate-50" onClick={onRegister}>
        <img src="/google.png" alt="google logo" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default RegisterForm;
