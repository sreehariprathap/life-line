import React from "react";
import { Formik } from "formik";

const RegisterForm = ({ onRegister, onFormRegister }) => {
  return (
    <div className="p-4 flex flex-col gap-5 items-center">
      <h2 className="text-2xl font-bold">Join Us</h2>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          dob: "",
          gender: "",
          height: "",
          weight: "",
          healthCardNumber: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          // Handle form submission here
          console.log(values);
          onFormRegister(values);
          setSubmitting(false);
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="w-full max-w-md gap-2 flex flex-col">
            {/* Form fields */}
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                name="firstName"
                className="input"
                placeholder="First Name"
                onChange={handleChange}
                value={values.firstName}
              />
              <input
                type="text"
                name="lastName"
                className="input"
                placeholder="Last Name"
                onChange={handleChange}
                value={values.lastName}
              />
            </div>
            {/* Email */}
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Enter Email"
              onChange={handleChange}
              value={values.email}
            />
            {/* Password */}
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
            {/* Date of Birth and Gender */}
            <div className="grid grid-cols-2 gap-5">
              <input
                type="date"
                name="dob"
                className="input"
                placeholder="Date of Birth"
                onChange={handleChange}
                value={values.dob}
              />
              <select
                name="gender"
                className="input"
                onChange={handleChange}
                value={values.gender}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="notSpecified">Prefer Not To Answer</option>
              </select>
            </div>
            {/* Height and Weight */}
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                name="height"
                className="input"
                placeholder="Enter Height"
                onChange={handleChange}
                value={values.height}
              />
              <input
                type="text"
                name="weight"
                className="input"
                placeholder="Enter Weight"
                onChange={handleChange}
                value={values.weight}
              />
            </div>
            {/* Health Card Number */}
            <input
              type="text"
              name="healthCardNumber"
              className="input"
              placeholder="Health Card number"
              onChange={handleChange}
              value={values.healthCardNumber}
            />
            {/* Register Button */}
            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Register
            </button>
          </form>
        )}
      </Formik>

      <div className="divider text-slate-950">OR</div>
      <button className="btn bg-slate-50" onClick={onRegister}>
        <img src="/google.png" alt="google logo" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default RegisterForm;
