import { useEffect, useRef, useState } from "react";
import useAccount from "../context/useAccount";
import MyHero from "../Components/MyCapsule/MyHero";
import Filter from "../Components/MyCapsule/Filter";
import CapsuleCard from "../Components/MyCapsule/CapsuleCard";
import { ID } from "appwrite";
import Status from "../Components/MyCapsule/Status";
import { Cross, CrossIcon } from "lucide-react";

export default function MyCapsule() {
  // CONTEXT API
  const {
    listPrivateCapsules,
    userAcc,
    deletePrivateCapsule,
    updatePrivateCapsule,
  } = useAccount();

  // DATA STATES
  const [handleId, setHandleId] = useState("");
  const [handelTitle, setHandleTitle] = useState("");
  const [handleDesc, setHandleDesc] = useState("");
  const [handleOpening, sethandleOpening] = useState("");
  const [handlePublished, setHandlePublished] = useState("");
  // DATA STATE
  const [capsules, setCapsules] = useState([]);
  // FILTER STATE
  const [filter, setFilter] = useState("Locked");
  const [tempCap, setTempCap] = useState([]);
  const [total, setTotal] = useState();
  const [locked, setLocked] = useState();
  const [unlocked, setUnlocked] = useState();

  // UI STATUS
  const [openUi, setOpenUi] = useState(false);
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
        console.error(error);
      }
    }
  };

  // HANDLE CAPSULE OPEN DATABASE
  const handleCapsuleOpen = (id, title, description, opening, published) => {
    setHandleId(id);
    setHandleTitle(title);
    setHandleDesc(description);
    sethandleOpening(opening);
    setHandlePublished(published);
    setOpenUi(true);

    capsules.map((item) => {
      if (item.$id === id) {
        const payload = { opened: true };
        updatePrivateCapsule(id, payload);
      }
    });
  };

  // HANDLE FILTER
  const handleFilter = async () => {
    switch (filter) {
      case "All":
        setTempCap([...capsules]);
        break;
      case "Unlocked":
        setTempCap(capsules.filter((item) => item.opened));
        break;
      case "Locked":
        setTempCap(capsules.filter((item) => !item.opened));
        break;
    }
    setTotal(capsules.length);
    const temp = capsules.filter((item) => item.opened);
    setUnlocked(temp.length);
    const temp1 = capsules.filter((item) => !item.opened);
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
            handleCapsuleOpen={handleCapsuleOpen}
          />
        ))}
      </section>
      <section className="flex flex-wrap justify-center gap-3 px-5 w-full md:w-200 xl:w-300 mx-auto  ">
        PUBLIC CAPSULES
      </section>

      <section className="flex items-center w-full mt-10 ">
        <Status
          capsules={capsules}
          total={total}
          unlocked={unlocked}
          locked={locked}
        />
      </section>

      <div
        className={`fixed top-0 left-0 flex-col bg-white w-dvw h-dvh flex items-center justify-center ${
          openUi ? "" : "hidden"
        }`}
      >
        <div className="bg-gray-900 text-white px-10 w-[90%] sm:w-100 py-10 flex flex-col gap-5 rounded-xl">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-light">
                Title: <br />
              </h1>
              <h1 className="font-bold text-xl">{handelTitle}</h1>
            </div>
            <div>
              <h1 className="font-light">
                Message: <br />
              </h1>
              <h1
                className="font-bold 
              "
              >
                {handleDesc}
              </h1>
            </div>
            <h1 className="font-medium text-sm">
              Published Date: <br />
              <span>{handlePublished}</span>
            </h1>
            <button
              onClick={() => {
                setOpenUi(false);
              }}
              className="outline-1 outline-gray-300 py-2 rounded-xl bg-gray-100 text-black font-bold hover:bg-gray-500 hover:text-white transition-colors duration-300 cursor-pointer "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
