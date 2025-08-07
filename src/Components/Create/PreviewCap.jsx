import {
  Mail,
  Edit,
  Trash2,
  MailCheck,
  MailCheckIcon,
  UserRound,
} from "lucide-react";
const formatDate = (iso) => {
  if (!iso) return "";
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};

export default function PublicCard({
  name = "Name",
  title = "Title",
  description = "Description",
  published = "Date",
}) {
  return (
    <div className="flex h-65 w-80 flex-col gap-2 overflow-hidden rounded-xl border-1">
      <div className="flex h-22 w-full items-center justify-center bg-black">
        <h1 className="text-white select-none">Future Capsule</h1>
      </div>
      <div className="flex w-full flex-col gap-2 px-5 py-2">
        <div>
          <h1 className="flex items-center gap-2 font-medium">
            {" "}
            <UserRound size={18} /> {name}
          </h1>
          <p className="flex items-center gap-2 text-gray-500">
            <Mail size={18} /> {formatDate(published)}
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">
            <span className="text-md font-medium">Title:</span> {title}
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
