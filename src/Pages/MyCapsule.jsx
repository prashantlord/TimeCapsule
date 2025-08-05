import { useEffect, useMemo, useState } from "react";
import useAccount from "../context/useAccount";
import MyHero from "../Components/MyCapsule/MyHero";
import Filter from "../Components/MyCapsule/Filter";
import Status from "../Components/MyCapsule/Status";
import LockedCap from "../Components/MyCapsule/LockedCap";
import PublicCap from "../Components/MyCapsule/PublicCap";
import { CrossIcon, Edit2 } from "lucide-react";
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

  const total = useMemo(() => capsules.length, [capsules]);
  const unlocked = useMemo(
    () => capsules.filter((c) => c.opened).length,
    [capsules],
  );
  const locked = useMemo(
    () => capsules.filter((c) => !c.opened).length,
    [capsules],
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
        "ERROR WHILE FETCHING PRIVATE DATA CAPSULE MYCAPSULE" + error,
      );
    }
  };
  useEffect(() => {
    userAcc.id ? init() : "";
  }, [userAcc]);

  // DATABASE DELETE FUNCTION
  const removeCapsule = async (id) => {
    const response = window.confirm("Do you realltt want to delete a capsule?");
    if (response) {
      try {
        await deletePrivateCapsule(id);
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
        if (item.opened) return;
        const payload = { opened: true };
        updatePrivateCapsule(id, payload);
      }
    });
  };

  // EDIT PUBLIC CAPSULE DATABASE
  const [editPage, setEditPage] = useState(false);
  const handleEdit = async (id, title, description) => {
    console.log(id, title, description);
    setHandleId(id);
    setHandleTitle(title);
    setHandleDesc(description);
    setEditPage(true);
  };
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
  const handleDelete = async (id) => {
    const response = window.confirm("DO YOU WANT TO DELETE A CAPSULE");
    if (response) {
      try {
        await deletePublicCapsule(id);
        window.location.reload();
      } catch (error) {
        console.error("ERROR WHILE HANDLING DELETE MYCAPSULE " + error);
      }
    } else return;
  };

  return (
    <div className="mx-auto mt-12 mb-10 flex h-fit w-full flex-col items-center gap-5">
      <MyHero />

      <section className="flex h-15 w-full items-center bg-gray-100">
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
      <section className="mt-5 w-full px-5">
        <PublicCap handleEdit={handleEdit} handleDelete={handleDelete} />
      </section>

      <section className="mt-10 flex w-full items-center">
        <Status
          capsules={capsules}
          total={total}
          unlocked={unlocked}
          locked={locked}
        />
      </section>

      <div
        className={`fixed top-0 left-0 z-50 flex h-dvh w-dvw items-center transition-all duration-300 ease-in ${
          openUi
            ? "pointer-events-auto bg-white/90 opacity-100 backdrop-blur-md"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`mx-auto flex w-[90%] flex-col gap-5 rounded-xl bg-gray-900 px-10 py-10 text-white transition-all duration-500 ease-in sm:w-100 md:w-120 ${
            openUi
              ? "translate-y-0 opacity-100 delay-200"
              : "translate-y-5 opacity-0 delay-0"
          }`}
        >
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="font-light">
                Title: <br />
              </h1>
              <h1 className="text-xl font-bold">{handelTitle}</h1>
            </div>
            <div>
              <h1 className="font-light">
                Message: <br />
              </h1>
              <h1 className="font-bold">{handleDesc}</h1>
            </div>
            <h1 className="text-sm font-medium">
              Published Date: <br />
              <span>{handlePublished}</span>
            </h1>
            <button
              onClick={() => {
                setOpenUi(false);
              }}
              className="cursor-pointer rounded-xl bg-gray-100 py-2 font-bold text-black outline-1 outline-gray-300 transition-colors duration-300 hover:bg-gray-500 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-50 flex h-dvh w-dvw items-center transition-all duration-300 ease-in ${
          editPage
            ? "pointer-events-auto bg-white/90 opacity-100 backdrop-blur-md"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ease-in sm:w-100 md:w-120 ${
            editPage
              ? "translate-y-0 opacity-100 delay-200"
              : "translate-y-5 opacity-0 delay-0"
          }`}
        >
          <div className="flex w-full justify-between px-5">
            <h1 className="text-xl font-semibold">Edit Page</h1>
            <CrossIcon
              className="w-8 rotate-45 cursor-pointer transition-all duration-300 hover:text-red-500"
              onClick={() => setEditPage(false)}
            />
          </div>
          <form
            className="flex h-fit w-full flex-col gap-5 px-5 py-10"
            onSubmit={editFormSubmit}
          >
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                maxLength={50}
                className="rounded-md border-1 border-gray-500 px-3 py-2 transition-colors duration-300 focus:border-gray-400 focus:outline-none"
                value={handelTitle}
                onChange={(e) => {
                  setHandleTitle(e.target.value);
                }}
              />
            </div>
            <div className="flex w-full flex-col gap-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-gray-600"
              >
                Your Message
              </label>
              <textarea
                type="text"
                name="title"
                maxLength={100}
                minLength={1}
                className="h-35 resize-none rounded-md border-1 px-3 py-2 transition-colors duration-300 focus:border-gray-400 focus:outline-none"
                value={handleDesc}
                onChange={(e) => {
                  setHandleDesc(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-900 py-2 font-semibold text-white transition-colors duration-300 hover:bg-green-900"
            >
              Edit <Edit2 size={15} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
