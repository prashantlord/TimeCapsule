import { useEffect, useMemo, useState } from "react";
import CapsuleCard from "./CapsuleCard";

export default function LockedCap({
  capsules,
  handleCapsuleOpen,
  removeCapsule,
}) {
  const lockedCapsule = useMemo(
    () => capsules.filter((c) => !c.opened),
    [capsules]
  );

  return (
    <>
      <div className="flex flex-col gap-3 px-2 w-full md:w-200 xl:w-300 mx-auto  ">
        <h1 className="font-semibold text-xl mx-auto">Locked Capsules</h1>
        <div className="flex flex-wrap w-full justify-center gap-2">
          <h1 className="mb-5">
            {lockedCapsule.length === 0 ? "No Future Capsule" : null}
          </h1>
          {lockedCapsule.map((item, key) => (
            <CapsuleCard
              name={item.name}
              title={item.title}
              description={item.description}
              status={item.opened}
              opening={item.opening}
              published={item.published}
              id={item.$id}
              key={key}
              deleteThis={removeCapsule}
              handleCapsuleOpen={handleCapsuleOpen}
            />
          ))}
        </div>
      </div>
    </>
  );
}
