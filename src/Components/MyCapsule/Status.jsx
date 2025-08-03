import { Archive, Key, Lock, UnlockIcon } from "lucide-react";
import React, { useState } from "react";

export default function Status({ unlocked, locked, total }) {
  return (
    <div className="flex md:w-200 xl:w-300 mx-auto gap-3 px-3 ">
      <div className="shadow-md outline-1 outline-gray-300 py-2 flex gap-2 flex-col items-center justify-center text-center w-full rounded-xl ">
        <div className="p-2 rounded-full  bg-gray-200">
          <Archive />
        </div>
        {total}
        <p>Total Capsules</p>
      </div>
      <div className="shadow-md outline-1 outline-gray-300 py-2 flex gap-2 flex-col items-center justify-center text-center w-full rounded-xl ">
        <div className="p-2 rounded-full  bg-gray-200">
          <Lock />
        </div>
        {locked}
        <p>Locked Capsules</p>
      </div>
      <div className="shadow-md outline-1 outline-gray-300 py-2 flex gap-2 flex-col items-center justify-center text-center w-full rounded-xl ">
        <div className="p-2 rounded-full  bg-gray-200">
          <Key />
        </div>
        {unlocked}
        <p className="">Unlocked Capsules</p>
      </div>
    </div>
  );
}
