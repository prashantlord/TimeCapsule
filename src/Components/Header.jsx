import { Hourglass, Menu } from "lucide-react";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router";

export default function Header() {
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

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleRegister = (e) => {
    navigate("/register");
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
          {location.pathname === "/login" ? (
            <button
              className="px-4 py-2 rounded-3xl bg-black text-white cursor-pointer  hover:bg-gray-500 transition-colors duration-300 "
              onClick={handleRegister}
            >
              Register
            </button>
          ) : (
            <button
              className="px-4 py-2 rounded-3xl bg-black text-white cursor-pointer  hover:bg-gray-500 transition-colors duration-300 "
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </nav>
        <div className="block md:hidden">
          <Menu />
        </div>
      </div>
    </>
  );
}
