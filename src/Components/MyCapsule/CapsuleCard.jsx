import { LockOpen, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function CapsuleCard({
  name = "Prashant",
  title = "Future Me",
  description = "I hope to become something else in the future.",
  status = false,
  opening,
  published,
  id = "1124",
  deleteThis,
  handleCapsuleOpen,
}) {
  // UI STATES
  const [openingDt, setOpeningDt] = useState();
  const [publishedDt, setPublishedDt] = useState();
  const [timeOver, setTimeOver] = useState(false);
  // CHANGE THE FORMAT OF DATE
  const formatDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };

  // STATES FOR DATES UI
  useEffect(() => {
    if (opening && published) {
      const temp1 = formatDate(opening);
      setOpeningDt(temp1);
      const temp2 = formatDate(published);
      setPublishedDt(temp2);
    }

    if (Date.parse(opening) <= Date.now()) {
      setTimeOver(true);
    } else setTimeOver(false);
  }, [opening, published]);

  return (
    <div className="w-full bg-gray-900 text-white  sm:w-80 md:w-100 outline-1 outline-gray-300  flex flex-col gap-3 rounded-xl overflow-hidden">
      <div className="mx-auto  flex items-center flex-col gap-2  py-5">
        <div className="flex justify-between">
          <h1>{!status ? "LOCKED CAPSULE" : null}</h1>
        </div>
        <div className="flex gap-2 ">
          {!timeOver ? (
            <button
              disabled
              className="flex gap-2 bg-gray-500 w-full text-black px-4 py-2 rounded-xl"
            >
              {" "}
              Locked Until {openingDt}
            </button>
          ) : (
            <button
              onClick={() =>
                handleCapsuleOpen(
                  id,
                  title,
                  description,
                  openingDt,
                  publishedDt
                )
              }
              className="flex gap-2 bg-white w-full text-black px-10 py-2 rounded-xl hover:bg-gray-300 cursor-pointer  transition-colors duration-300"
            >
              <LockOpen /> Ready to Open
            </button>
          )}
          <button
            className="bg-red-500 p-2 rounded-xl cursor-pointer hover:bg-red-600 transition-colors duration-300"
            onClick={() => {
              deleteThis(id);
            }}
          >
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
}
