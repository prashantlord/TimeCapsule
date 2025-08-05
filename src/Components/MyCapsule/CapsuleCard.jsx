import { LockOpen, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

export default function CapsuleCard({
  title = "Future Me",
  description = "I hope to become something else in the future.",
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
    <div className="flex w-full flex-col gap-3 overflow-hidden rounded-xl bg-gray-900 text-white outline-1 outline-gray-300 sm:w-80">
      <div className="mx-auto flex w-full flex-col items-center gap-2 py-5">
        <div className="flex justify-between text-center font-semibold">
          <h1>Locked Capsule</h1>
        </div>
        <div className="flex w-full gap-2 px-5">
          {!timeOver ? (
            <button
              disabled
              className="flex w-full flex-col gap-2 rounded-xl bg-gray-500 px-2 py-2 text-black"
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
                  publishedDt,
                )
              }
              className="flex w-full cursor-pointer justify-center gap-2 rounded-xl bg-white px-2 py-2 text-black transition-colors duration-300 hover:bg-gray-300"
            >
              <LockOpen /> Ready to Open
            </button>
          )}
          <button
            className="cursor-pointer rounded-xl bg-red-500 p-2 transition-colors duration-300 hover:bg-red-600"
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
