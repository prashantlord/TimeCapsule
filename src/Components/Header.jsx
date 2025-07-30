import { Hourglass, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAccount from "../context/useAccount";

export default function Header() {
  const { account, setStatus, loggedIn, setLoggedOut } = useAccount();
  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Create",
      path: "/create",
    },

    {
      name: "My Capsule",
      path: "/mycapsule",
    },

    {
      name: "Public Capsule",
      path: "/publiccapsule",
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  const [logout, setLogout] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    location.pathname != "/login" ? navigate("/login") : navigate("/register");
  };

  return (
    <>
      <div className="mx-auto flex items-center justify-between w-135 sm:w-200 md:w-250 xl:w-400 ">
        <Link to="/" className="flex items-center font-semibold text-xl ">
          <Hourglass />
          <h1> TimeCapsule</h1>
        </Link>

        <nav className="hidden gap-5 items-center md:flex  ">
          {pages.map((item, key) => (
            <Link
              key={key}
              to={item.path}
              className=" hover:translate-y-[-0.2rem] hover:scale-105 transition-transform duration-200 ease-in"
            >
              {" "}
              {item.name}
            </Link>
          ))}

          {loggedIn ? (
            <button
              className="px-4 py-2 rounded-3xl bg-black text-white cursor-pointer  hover:bg-gray-800 transition-colors duration-300 "
              onClick={() => setLogout((prev) => !prev)}
            >
              {loggedIn[0].toUpperCase()}
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="px-4 py-2 rounded-3xl bg-black text-white cursor-pointer  hover:bg-gray-800 transition-colors duration-300 "
            >
              {location.pathname != "/login" ? "Login" : "Register"}{" "}
            </button>
          )}
        </nav>
        <div className="block md:hidden">
          <Menu />
        </div>
      </div>
      <div
        className={`fixed right-0 top-16 bg-gray-100 w-30 h-10 flex px-5 justify-end ${
          logout ? "block" : "hidden"
        }`}
      >
        <button
          className="cursor-pointer"
          onClick={() => {
            setLoggedOut();
            setLogout(false);
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}
