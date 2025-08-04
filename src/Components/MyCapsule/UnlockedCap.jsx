import { useMemo, useState } from "react";
import CapsuleCard from "./CapsuleCard";

export default function UnlockedCap({
  capsules,
  handleCapsuleOpen,
  removeCapsule,
}) {
  const unlockedCapsule = useMemo(
    () => capsules.filter((c) => c.opened),
    [capsules]
  );
  const formatDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };
  return (
    <>
      <div className="flex flex-col gap-3 px-2 w-full md:w-200 xl:w-300 mx-auto  ">
        <h1 className="font-semibold text-xl mx-auto">Unlocked Capsules</h1>
        <div className="flex flex-wrap w-full justify-center gap-2">
          <h1 className="mb-5">
            {unlockedCapsule.length === 0 ? "No Capsule Opened Yet" : null}
          </h1>
          {unlockedCapsule.map((item, key) => (
            <div className="flex gap-2 px-5 flex-col items-center justify-center bg-gray-900 text-white w-80 h-30 rounded-xl">
              <div>
                <h1 className="font-medium">Title: {item.title}</h1>
                <p className="text-[0.8rem]">
                  (Opened On: {formatDate(item.opening)})
                </p>
              </div>
              <button
                onClick={() =>
                  handleCapsuleOpen(
                    item.id,
                    item.title,
                    item.description,
                    item.opening,
                    formatDate(item.published)
                  )
                }
                className="bg-gray-100 text-black w-full rounded-md py-2 cursor-pointer hover:bg-gray-300 transtion-colors duration-300 "
              >
                Re visit the Capsule
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
// <CapsuleCard
//   name={item.name}
//   title={item.title}
//   description={item.description}
//   status={item.opened}
//   opening={item.opening}
//   published={item.published}
//   id={item.$id}
//   key={key}
//   deleteThis={removeCapsule}
//   handleCapsuleOpen={handleCapsuleOpen}
// />
