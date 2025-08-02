import React from "react";

export default function CapsuleType({ capsule, setCapsule }) {
  return (
    <div className="mx-auto overflow-hidden bg-white w-full h-12 md:w-200 outline-1 outline-gray-300 shadow-md rounded-t-2xl flex  justify-between">
      <button
        className={` border-b-1  w-full transition-all duration-300 ease-in ${
          capsule === "private" ? "bg-gray-100 border-black " : "border-white"
        }`}
        onClick={() => {
          setCapsule("private");
        }}
      >
        Private <span className="hidden md:inline ">Capsule </span>{" "}
      </button>
      <button
        className={` border-b-1  w-full transition-all duration-300 ease-in ${
          capsule === "public" ? "bg-gray-100 border-black " : "border-white"
        }`}
        onClick={() => {
          setCapsule("public");
        }}
      >
        Public <span className="hidden md:inline ">Capsule </span>{" "}
      </button>
    </div>
  );
}
