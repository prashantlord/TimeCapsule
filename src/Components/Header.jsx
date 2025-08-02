import { Hourglass, LogOut, Menu, Settings, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import useAccount from "../context/useAccount";
import { account } from "../lib/appwrite";

export default function Header() {
  // CONTEXT API
  const { userAcc, logoutUser, getUser, loginStatus } = useAccount();

  // REACT ROUTER IMPORTS
  const navigate = useNavigate();

  const location = useLocation();
  const pages = [
    {
      name: "Home",
      path: "/",
      delay: "delay-200",
    },
    {
      name: "Create",
      path: "/create",
      delay: "delay-400",
    },

    {
      name: "My Capsule",
      path: "/mycapsule",
      delay: "delay-600",
    },

    {
      name: "Public Capsule",
      path: "/publiccapsule",
      delay: "delay-800",
    },
  ];

  // USER STATES
  const [nav, setNav] = useState(false);
  const [loggedIn, setLoggedIn] = useState();
  const [logoutBar, setLogoutBar] = useState(false);
  // ACTION HANDLE FUNCTIONS
  const handleLogin = (e) => {
    e.preventDefault();
    location.pathname != "/login" ? navigate("/login") : navigate("/register");
  };

  const handleHamburger = (e) => {
    setNav((prev) => !prev);
  };

  // GLOBAL MOUSE PRESS ACTION
  document.addEventListener("mousedown", () => {
    setLogoutBar(false);
  });

  // DATA BASE LOGIC
  const init = async () => {
    setLoggedIn(await getUser());
  };

  useEffect(() => {
    init();
  }, [loginStatus]);

  return (
    <>
      <div className="mx-auto flex items-center justify-between w-135 sm:w-200 md:w-250 xl:w-400 ">
        {/* LOGO/TITLE/NAME */}
        <Link to="/" className="flex items-center font-semibold text-xl ">
          <Hourglass />
          <h1> TimeCapsule</h1>
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden gap-5 items-center md:flex  ">
          {pages.map((item, key) => (
            <Link
              key={key}
              to={item.path}
              className="hover:translate-y-[-0.2rem] transition-all duration-200 ease-in"
            >
              {item.name}
            </Link>
          ))}

          {/* LOGIN/REGISTER/ACCOUNT buton */}
          {loggedIn ? (
            <button
              className="px-4 py-2 rounded-3xl bg-black text-white cursor-pointer  hover:bg-gray-800 transition-colors duration-300 "
              onClick={() => setLogoutBar(true)}
            >
              P{/* User ID */}
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

        {/* HAMBURGER button */}
        <button
          className={`md:hidden cursor-pointer hover:bg-gray-200 w-8 h-8 flex items-center justify-center rounded-full z-999 transition-transform duration-1000 ${
            nav ? "rotate-y-180 " : ""
          }`}
          onClick={handleHamburger}
        >
          <Menu />
        </button>
      </div>

      {/* LOGOUT/ACCOUNT BAR  */}
      <div
        className={`fixed flex flex-col gap-3 w-35 bg-gray-200 p-5 top-18 right-0 xl:w-50 text-sm transition-all duration-500 ${
          logoutBar
            ? "opacity-100 translate-y-0"
            : "opacity-0  translate-y-[-0.5rem]"
        } `}
      >
        <button className="flex items-center gap-1" disabled>
          <User />
          Account
        </button>

        <button
          className="cursor-pointer flex gap-1 items-center"
          onClick={() => {
            logoutUser();
            setLogoutBar(false);
            navigate("/login");
          }}
        >
          <LogOut /> Logout
        </button>
      </div>

      {/* MOBILE NAV */}
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
          {/* MOBILE NAV LINKS */}
          {pages.map((item, key) => (
            <Link
              key={key}
              to={item.path}
              onClick={handleHamburger}
              className={`font-medium text-xl transition-all  duration-500 ${
                nav
                  ? `opacity-100 translate-y-0 ${item.delay}`
                  : "opacity-0 translate-y-5 delay-0"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* LOGIN/REGISTER/LOGOUT BUTTON */}
          {!loggedIn ? (
            <Link
              className={`font-medium text-xl transition-all  duration-500 cursor-pointer ${
                nav
                  ? "opacity-100 translate-y-0 delay-1200"
                  : "opacity-0 translate-y-5 delay-0"
              }`}
              to={location.pathname === "/login" ? "/register" : "/login"}
              onClick={handleHamburger}
            >
              {location.pathname === "/login" ? "Register" : "Login"}
            </Link>
          ) : (
            <button
              className={`font-medium text-xl transition-all  duration-500 cursor-pointer ${
                nav
                  ? "opacity-100 translate-y-0 delay-1200"
                  : "opacity-0 translate-y-5 delay-0"
              }`}
              onClick={() => {
                logoutUser();
                handleHamburger();
                navigate("/login");
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
}
