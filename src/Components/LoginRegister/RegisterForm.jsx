import { Link } from "react-router";
import React from "react";

export default function RegisterForm({
  email,
  setEmail,
  password,
  setPassword,
  confirmPass,
  setConfirmPass,
  name,
  setName,
  terms,
  setTerms,
  handleSubmit,
}) {
  return (
    <>
      <form className="w-full flex flex-col mt-5 gap-3" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mx-auto w-80">
          <label htmlFor="email" className="text-gray-800">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            required
            className="outline-1 outline-gray-300 py-2 px-3 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mx-auto w-80">
          <label htmlFor="email" className="text-gray-800">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="outline-1 outline-gray-300 py-2 px-3 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mx-auto w-80">
          <label htmlFor="password" className="text-gray-800">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="outline-1 outline-gray-300 py-2 px-3 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mx-auto w-80">
          <label htmlFor="confirmPassword" className="text-gray-800">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your passowrd"
            required
            className="outline-1 outline-gray-300 py-2 px-3 rounded-md"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 mx-auto my-2 w-84">
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              onChange={() => {
                setTerms((prev) => !prev);
              }}
            />
            <label
              htmlFor="remember"
              name="remember"
              className="text-gray-700 text-[0.8rem]"
            >
              I agree to the <b>Termes of service</b> and
              <b> privacy policy</b>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-gray-700 rounded-md py-2 px-3  text-white mx-auto w-80 cursor-pointer hover:bg-gray-800 transition-colors duration-300"
        >
          Create Account
        </button>
        <div className=" gap-2 mx-auto w-80 text-center ">
          <p className="text-gray-700 select-none">
            Already have an Account?
            <Link to="/login" className="font-semibold text-gray-800">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
