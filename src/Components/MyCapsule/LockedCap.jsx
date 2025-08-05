import { useMemo } from "react";
import CapsuleCard from "./CapsuleCard";

export default function LockedCap({
  capsules,
  handleCapsuleOpen,
  removeCapsule,
}) {
  const lockedCapsule = useMemo(
    () => capsules.filter((c) => !c.opened),
    [capsules],
  );

  return (
    <>
      <div className="mx-auto flex w-full flex-col gap-3 px-2 md:w-200 xl:w-300">
        <h1 className="mx-auto text-xl font-semibold">Locked Capsules</h1>
        <div className="flex w-full flex-wrap justify-center gap-2">
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
