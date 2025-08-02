import { Archive, Badge } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

export default function MyHero() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto h-fit md:h-fit">
      <div className="flex items-center flex-col gap-5 px-5">
        <Archive className="spinAnime bg-gray-200 w-20 h-20 p-5 rounded-full  " />
        <h1 className="text-3xl font-bold text-center">My Time Capsules</h1>
        <p className="text-center text-gray-700 text-sm">
          Manage your personal time capsules and unlock memories when the time
          is right.
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/create");
          }}
          className=" bg-gray-900 text-white py-2  px-5  rounded-full cursor-pointer hover:translate-y-[-0.2rem] hover:bg-gray-800 transition-all duration-200 ease-in"
        >
          Create <span className="hidden md:inline ">New Capsule</span>
        </button>
      </div>
    </section>
  );
}
