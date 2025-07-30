import React from "react";
import { Link } from "react-router";
import {
  Facebook,
  FacebookIcon,
  Hourglass,
  Instagram,
  Twitter,
} from "lucide-react";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="mx-auto flex flex-col gap-10 xl:flex-row justify-between w-70 sm:w-150 xl:w-300  pt-8 ">
        <div className="px-1">
          <Link to="/" className="flex items-center font-semibold text-xl ">
            <Hourglass />
            <h1> TimeCapsule</h1>
          </Link>
          <p className="text-[0.8rem] sm:text-sm">
            Send message to your future self and share your thoughts with the
            world <br />
            (None of the links below works)
          </p>
        </div>
        <div className="flex gap-30">
          <div>
            <h1 className="font-semibold">Company</h1>
            <p className="mt-2 text-gray-800 cursor-pointer text-[0.8rem] sm:text-sm ">
              About Us
            </p>
            <p className="mt-1 text-gray-800 cursor-pointer text-[0.8rem] sm:text-sm ">
              Blog
            </p>
            <p className="mt-1 text-gray-800 cursor-pointer text-[0.8rem] sm:text-sm ">
              Careers
            </p>
            <p className="mt-1 text-gray-800 cursor-pointer text-[0.8rem] sm:text-sm ">
              Contact
            </p>
          </div>
          <div>
            <h1 className="font-semibold">Legal</h1>
            <p className="mt-2 cursor-pointer text-gray-800 text-[0.8rem] sm:text-sm">
              Privacy Policy
            </p>
            <p className="mt-1 cursor-pointer text-gray-800 text-[0.8rem] sm:text-sm">
              Terms of Service
            </p>
            <p className="mt-1 cursor-pointer text-gray-800 text-[0.8rem] sm:text-sm">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
      <div className="mt-15 pt-5 pb-8 mx-auto flex flex-col items-left justify-between border-t-1 border-gray-300 w-70 sm:w-150 xl:w-300 md:flex-row   ">
        <p className="text-gray-700 text-[0.8rem] sm:text-sm ">
          &copy; {year} TimeCapsule. All rights reserved (Prashant){" "}
        </p>
        <div className="flex gap-2 text-gray-700">
          <a href="#">
            <Twitter size={20} />
          </a>
          <a href="#">
            <Instagram size={20} />
          </a>
          <a href="#">
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </>
  );
}
