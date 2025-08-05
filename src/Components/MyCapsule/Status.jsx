import { Archive, Key, Lock, UnlockIcon } from "lucide-react";

export default function Status({ unlocked, locked, total }) {
  return (
    <div className="mx-auto flex gap-3 px-3 md:w-200 xl:w-300">
      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl py-2 text-center shadow-md outline-1 outline-gray-300">
        <div className="rounded-full bg-gray-200 p-2">
          <Archive />
        </div>
        {total}
        <p>Total Capsules</p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl py-2 text-center shadow-md outline-1 outline-gray-300">
        <div className="rounded-full bg-gray-200 p-2">
          <Lock />
        </div>
        {locked}
        <p>Locked Capsules</p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-2 rounded-xl py-2 text-center shadow-md outline-1 outline-gray-300">
        <div className="rounded-full bg-gray-200 p-2">
          <Key />
        </div>
        {unlocked}
        <p className="">Unlocked Capsules</p>
      </div>
    </div>
  );
}
