import React from "react";

import { Link } from "react-router";

export default function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) {
  return (
    <form className="w-full flex flex-col mt-5 gap-3" onSubmit={handleSubmit}>
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
        <div className="flex gap-2">
          <input type="checkbox" name="remember" id="remember" />
          <label htmlFor="remember" name="remember" className="text-gray-700">
            Remember me
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="bg-gray-700 rounded-md py-2 px-3  text-white mx-auto w-80 cursor-pointer hover:bg-gray-800 transition-colors duration-300"
      >
        Login
      </button>
      <div className=" gap-2 mx-auto w-80 text-center ">
        <p className="text-gray-700 select-none">
          Don't have an account ?
          <Link to="/register" className="font-semibold text-gray-800">
            {" "}
            Register
          </Link>
        </p>
      </div>
    </form>
  );
}
