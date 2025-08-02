import { FilePlus2 } from "lucide-react";
import React from "react";

export default function CreateHero() {
  return (
    <section className="mx-auto h-fit mt-12  ">
      <div className="flex items-center flex-col gap-5 px-5">
        <FilePlus2 className=" bg-gray-200 w-20 h-20 p-5 rounded-full  " />
        <h1 className="text-3xl font-bold text-center">
          Create Your Time Capsule
        </h1>
        <p className="text-center text-gray-700 text-sm">
          Write a message to your future self or share your thoughts with the
          world
        </p>
      </div>
    </section>
  );
}
