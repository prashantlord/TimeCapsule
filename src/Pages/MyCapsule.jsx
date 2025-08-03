import { useEffect, useRef, useState } from "react";
import useAccount from "../context/useAccount";
import MyHero from "../Components/MyCapsule/MyHero";
import Filter from "../Components/MyCapsule/Filter";
import CapsuleCard from "../Components/MyCapsule/CapsuleCard";
import { ID } from "appwrite";
import Status from "../Components/MyCapsule/Status";
import { Outlet } from "react-router";

export default function MyCapsule() {
  // CONTEXT API
  const { listPrivateCapsules, getUser, userAcc, deletePrivateCapsule } =
    useAccount();
  // DATA STATE
  const [capsules, setCapsules] = useState([]);
  // FILTER STATE
  const [filter, setFilter] = useState("All");
  const [tempCap, setTempCap] = useState([]);

  const [total, setTotal] = useState();
  const [locked, setLocked] = useState();
  const [unlocked, setUnlocked] = useState();

  // UI STATUS
  const [deleteStatus, setDeleteStatus] = useState();
  // DATA BASE FUNCTION
  const init = async () => {
    try {
      const res = await listPrivateCapsules(userAcc.id);
      setCapsules(res.documents);
    } catch (error) {
      console.error(
        "ERROR WHILE FETCHING PRIVATE DATA CAPSULE MYCAPSULE" + error
      );
    }
  };
  useEffect(() => {
    userAcc.id ? init() : "";
  }, [userAcc]);

  // DATABASE DELETE FUNCTION
  const deleteThis = async (id) => {
    const response = window.confirm("Do you realltt want to delete a capsule?");
    if (response) {
      try {
        const res = await deletePrivateCapsule(id);
        window.location.reload();
      } catch (error) {
        console.error(erro);
      }
    }
  };

  // HANDLE FILTER
  const handleFilter = async () => {
    switch (filter) {
      case "All":
        setTempCap([...capsules]);
        break;
      case "Unlocked":
        setTempCap(capsules.filter((item) => item.status));
        break;
      case "Locked":
        setTempCap(capsules.filter((item) => !item.status));
        break;
    }
    setTotal(capsules.length);
    const temp = capsules.filter((item) => item.status);
    setUnlocked(temp.length);
    const temp1 = capsules.filter((item) => !item.status);
    setLocked(temp1.length);
  };
  useEffect(() => {
    handleFilter();
  }, [filter, capsules]);

  return (
    <div className="mx-auto w-full mt-12 h-fit mb-10 flex flex-col items-center gap-5">
      <MyHero />

      <section className="w-full flex items-center bg-gray-100 h-15">
        <Filter
          filter={filter}
          setFilter={setFilter}
          total={total}
          unlocked={unlocked}
          locked={locked}
        />
      </section>
      <section className="flex flex-wrap justify-center gap-3 px-5 w-full md:w-200 xl:w-300 mx-auto  ">
        {tempCap.map((item, key) => (
          <CapsuleCard
            name={item.name}
            title={item.title}
            description={item.description}
            status={item.opened}
            opening={item.opening}
            published={item.published}
            id={item.$id}
            key={ID.unique()}
            deleteThis={deleteThis}
          />
        ))}
      </section>

      <section className="flex items-center w-full mt-10 ">
        <Status
          capsules={capsules}
          total={total}
          unlocked={unlocked}
          locked={locked}
        />
      </section>
    </div>
  );
}
