import { useMemo } from "react";
import CapsuleCard from "./CapsuleCard";

export default function UnlockedCap({ capsules, handleCapsuleOpen }) {
  const unlockedCapsule = useMemo(
    () => capsules.filter((c) => c.opened),
    [capsules],
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
      <div className="mx-auto flex w-full flex-col gap-3 px-2 md:w-200 xl:w-300">
        <h1 className="mx-auto text-xl font-semibold">Unlocked Capsules</h1>
        <div className="flex w-full flex-wrap justify-center gap-2">
          <h1 className="mb-5">
            {unlockedCapsule.length === 0 ? "No Capsule Opened Yet" : null}
          </h1>
          {unlockedCapsule.map((item, key) => (
            <div
              className="flex h-30 w-80 flex-col items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 text-white"
              key={key}
            >
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
                    formatDate(item.published),
                  )
                }
                className="transtion-colors w-full cursor-pointer rounded-md bg-gray-100 py-2 text-black duration-300 hover:bg-gray-300"
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
