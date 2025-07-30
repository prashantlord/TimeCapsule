import { Hourglass, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
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

  const [nav, setNav] = useState(false);

  const [logout, setLogout] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    location.pathname != "/login" ? navigate("/login") : navigate("/register");
  };
  const handleHamburger = (e) => {
    setNav((prev) => !prev);
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
        <button
          className={`md:hidden cursor-pointer hover:bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full z-999 transition-transform duration-1000 ${
            nav ? "rotate-y-180 " : ""
          }`}
          onClick={handleHamburger}
        >
          <Menu />
        </button>
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
      <div
        className={`w-dvw h-dvh fixed z-50 top-0 left-0 transition-all duration-300 ease-in flex items-center
    ${
      nav
        ? "opacity-100 bg-white/90 backdrop-blur-md pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }
  `}
      >
        <div className="mx-auto flex flex-col items-center gap-10">
          <Link
            className={`font-medium text-xl transition-all  duration-500 ${
              nav
                ? "opacity-100 translate-y-0 delay-200"
                : "opacity-0 translate-y-5 delay-0"
            }`}
            to="/"
            onClick={handleHamburger}
          >
            Home
          </Link>
          <Link
            className={`font-medium text-xl transition-all  duration-500 ${
              nav
                ? "opacity-100 translate-y-0 delay-400"
                : "opacity-0 translate-y-5 delay-0"
            }`}
            to="/create"
            onClick={handleHamburger}
          >
            {" "}
            Create
          </Link>
          <Link
            className={`font-medium text-xl transition-all  duration-500 ${
              nav
                ? "opacity-100 translate-y-0 delay-800"
                : "opacity-0 translate-y-5 delay-0"
            }`}
            to="/mycapsules"
            onClick={handleHamburger}
          >
            {" "}
            My Capsule
          </Link>
          <Link
            className={`font-medium text-xl transition-all  duration-500 ${
              nav
                ? "opacity-100 translate-y-0 delay-1000"
                : "opacity-0 translate-y-5 delay-0"
            }`}
            to="/publiccapsule"
            onClick={handleHamburger}
          >
            {" "}
            Public Capsules
          </Link>
          {!loggedIn ? (
            <Link
              className={`font-medium text-xl transition-all  duration-500 ${
                nav
                  ? "opacity-100 translate-y-0 delay-1200"
                  : "opacity-0 translate-y-5 delay-0"
              }`}
              to="/login"
              onClick={handleHamburger}
            >
              {" "}
              Login
            </Link>
          ) : (
            <button
              className={`font-medium text-xl transition-all  duration-500 ${
                nav
                  ? "opacity-100 translate-y-0 delay-1200"
                  : "opacity-0 translate-y-5 delay-0"
              }`}
              onClick={() => {
                setLoggedOut(loggedIn);
                handleHamburger();
              }}
            >
              Logout{" "}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
