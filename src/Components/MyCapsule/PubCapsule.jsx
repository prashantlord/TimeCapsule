import { Delete, Edit, Mail, Trash2 } from "lucide-react";
import { useMemo } from "react";

export default function PubCapsule({ data, handleDelete, handleEdit }) {
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

  const dt = useMemo(() => formatDate(data?.$createdAt), [data]);
  return (
    <div className="flex h-55 w-80 flex-col justify-center gap-5 rounded-xl bg-gray-100 px-5 py-1 shadow-md outline-1 outline-gray-300 sm:w-80">
      <div className="flex w-full justify-between text-left">
        <div>
          <h1 className="text-xl font-semibold">{data.title}</h1>
          <p className="flex items-center gap-1 text-[0.8rem] text-gray-600">
            {" "}
            <Mail size={18} /> {dt}
          </p>
        </div>
        <div className="flex items-end gap-2">
          <Edit
            className="cursor-pointer text-gray-600 transition-colors duration-300 hover:text-green-500"
            title="Edit"
            onClick={() => {
              handleEdit(data?.$id, data?.title, data?.description);
            }}
          />
          <Trash2
            className="cursor-pointer text-gray-600 transition-colors duration-300 hover:text-red-500"
            title="Delete"
            onClick={() => {
              handleDelete(data?.$id);
            }}
          />
        </div>
      </div>
      <div className="w-full">
        <p>{data?.description}</p>
      </div>
    </div>
  );
}
