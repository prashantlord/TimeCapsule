import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useAccount from "../context/useAccount";
import MyHero from "../Components/MyCapsule/MyHero";
import Filter from "../Components/MyCapsule/Filter";
import Status from "../Components/MyCapsule/Status";
import LockedCap from "../Components/MyCapsule/LockedCap";
import PublicCap from "../Components/MyCapsule/PublicCap";
import { CrosshairIcon, CrossIcon, Edit2 } from "lucide-react";
import UnlockedCap from "../Components/MyCapsule/UnlockedCap";
export default function MyCapsule() {
  // CONTEXT API
  const {
    listPrivateCapsules,
    userAcc,
    deletePrivateCapsule,
    deletePublicCapsule,
    updatePrivateCapsule,
    updatePublicCapsule,
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

  const total = useMemo(() => capsules.length, [capsules]);
  const unlocked = useMemo(
    () => capsules.filter((c) => c.opened).length,
    [capsules]
  );
  const locked = useMemo(
    () => capsules.filter((c) => !c.opened).length,
    [capsules]
  );

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
  const removeCapsule = useCallback(async (id) => {
    const response = window.confirm("Do you realltt want to delete a capsule?");
    if (response) {
      try {
        const res = await deletePrivateCapsule(id);
        window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
  });

  // HANDLE CAPSULE OPEN DATABASE
  const handleCapsuleOpen = useCallback(
    (id, title, description, opening, published) => {
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
    }
  );

  // EDIT PUBLIC CAPSULE DATABASE
  const [editPage, setEditPage] = useState(false);
  const handleEdit = useCallback(async (id, title, description) => {
    console.log(id, title, description);
    setHandleId(id);
    setHandleTitle(title);
    setHandleDesc(description);
    setEditPage(true);
  });
  const editFormSubmit = async (e) => {
    e.preventDefault();
    console.log(handelTitle, handleDesc, handleId);
    const payload = { title: handelTitle, description: handleDesc };
    try {
      const res = await updatePublicCapsule(handleId, payload);
      res ? window.location.reload() : null;
    } catch (error) {
      console.error(error);
    }
  };
  // DELETE PUBLIC CAPSULE DATABASE
  const handleDelete = useCallback(async (id) => {
    const response = window.confirm("DO YOU WANT TO DELETE A CAPSULE");
    if (response) {
      try {
        await deletePublicCapsule(id);
        window.location.reload();
      } catch (error) {
        console.error("ERROR WHILE HANDLING DELETE MYCAPSULE " + error);
      }
    } else return;
  });

  // HANDLE FILTER
  const handleFilter = useCallback(async () => {
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
  });
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
      <section className="w-full px-5">
        {filter === "Locked" ? (
          <LockedCap
            capsules={capsules}
            handleCapsuleOpen={handleCapsuleOpen}
            removeCapsule={removeCapsule}
          />
        ) : (
          <UnlockedCap
            capsules={capsules}
            handleCapsuleOpen={handleCapsuleOpen}
          />
        )}
      </section>
      <section className="w-full px-5 mt-5">
        <PublicCap handleEdit={handleEdit} handleDelete={handleDelete} />
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

      <div
        className={`w-dvw h-dvh fixed z-50 top-0 left-0 transition-all duration-300 ease-in flex items-center ${
          editPage
            ? "opacity-100 bg-white/90 backdrop-blur-md pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={` mx-auto sm:w-100 md:w-120 transition-all duration-500 ease-in ${
            editPage
              ? "opacity-100 translate-y-0 delay-200"
              : "translate-y-5 opacity-0 delay-0"
          }`}
        >
          <div className="w-full px-5 flex justify-between ">
            <h1 className="font-semibold text-xl">Edit Page</h1>
            <CrossIcon
              className="w-8 transition-all duration-300 rotate-45 cursor-pointer hover:text-red-500"
              onClick={() => setEditPage(false)}
            />
          </div>
          <form
            className="w-full px-5 h-fit py-10 flex flex-col gap-5 "
            onSubmit={editFormSubmit}
          >
            <div className="flex flex-col w-full gap-2">
              <label
                htmlFor="title"
                className="text-gray-600 font-medium text-sm"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                maxLength={50}
                className="border-gray-500 border-1 rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
                value={handelTitle}
                onChange={(e) => {
                  setHandleTitle(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label
                htmlFor="title"
                className="text-gray-600 font-medium text-sm"
              >
                Your Message
              </label>
              <textarea
                type="text"
                name="title"
                maxLength={100}
                minLength={1}
                className="h-35 resize-none border-1  rounded-md px-3 py-2 focus:outline-none focus:border-gray-400 transition-colors duration-300"
                value={handleDesc}
                onChange={(e) => {
                  setHandleDesc(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 justify-center bg-gray-900 font-semibold text-white py-2 rounded-xl hover:bg-green-900  transition-colors duration-300 cursor-pointer"
            >
              Edit <Edit2 size={15} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
