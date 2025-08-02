import React from "react";
import { Hourglass } from "lucide-react";

export default function Hero({ publicCapsule, personalCapsule }) {
  return (
    <section className="mx-auto h-fit md:h-75  mt-12  ">
      <div className="flex items-center flex-col gap-5 px-5">
        <Hourglass className="spinAnime bg-gray-200 w-20 h-20 p-5 rounded-full  " />
        <h1 className="text-3xl font-bold text-center">
          Send A Message To Your Future
        </h1>
        <p className="text-center text-gray-700 text-sm">
          Create time capsules with personal messages, photos, and goals that
          will be delivered to you in the future .
        </p>
        <div className="flex gap-3">
          <button
            onClick={personalCapsule}
            className="border-2 border-gray-700 py-2 w-30 md:w-60  rounded-full bg-gray-700 text-white cursor-pointer hover:translate-y-[-0.2rem] transition-transform duration-200 ease-in"
          >
            Create <span className="hidden md:inline">Personal Capsule</span>
          </button>
          <button
            onClick={publicCapsule}
            className="border-2 border-gray-700 py-2 w-30  md:w-60  rounded-full cursor-pointer hover:translate-y-[-0.2rem] transition-transform duration-200 ease-in"
          >
            Explore <span className="hidden md:inline">Public Capsules</span>
          </button>
        </div>
      </div>
    </section>
  );
}
