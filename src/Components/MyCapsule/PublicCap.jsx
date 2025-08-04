import React, { useCallback, useContext, useEffect, useState } from "react";
import db from "../../lib/database";
import useAccount from "../../context/useAccount";
import PubCapsule from "./PubCapsule";

export default function PublicCap({ handleDelete, handleEdit }) {
  const { listPublicCapsules, userAcc } = useAccount();
  const [pubCapsule, setPubCapsule] = useState([]);

  // DATA BASE CALL
  const init = useCallback(async () => {
    try {
      const res = await listPublicCapsules(userAcc.id);
      setPubCapsule(res.documents);
    } catch (error) {
      console.error(error);
    }
  });

  useEffect(() => {
    if (!userAcc?.id) return;
    userAcc?.id ? init() : null;
  }, [userAcc?.id, listPublicCapsules]);

  return (
    <>
      <div className="flex flex-col gap-3 px-2 w-full md:w-200 xl:w-300 mx-auto  ">
        <h1 className="font-semibold text-xl mx-auto">My Public Capsules</h1>
        <div className="flex flex-wrap w-full justify-center gap-5">
          <h1 className="mb-5">
            {pubCapsule.length === 0 ? "No Public Capsule Available" : null}
          </h1>
          {pubCapsule
            ? pubCapsule.map((item, key) => (
                <PubCapsule
                  data={item}
                  key={key}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                />
              ))
            : null}
        </div>
      </div>
    </>
  );
}
