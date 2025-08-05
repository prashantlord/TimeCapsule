import { Archive } from "lucide-react";

import { useNavigate } from "react-router";

export default function MyHero() {
  const navigate = useNavigate();

  return (
    <section className="mx-auto h-fit md:h-fit">
      <div className="flex flex-col items-center gap-5 px-5">
        <Archive className="spinAnime h-20 w-20 rounded-full bg-gray-200 p-5" />
        <h1 className="text-center text-3xl font-bold">My Time Capsules</h1>
        <p className="text-center text-sm text-gray-700">
          Manage your personal time capsules and unlock memories when the time
          is right.
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/create");
          }}
          className="cursor-pointer rounded-full bg-gray-900 px-5 py-2 text-white transition-all duration-200 ease-in hover:translate-y-[-0.2rem] hover:bg-gray-800"
        >
          Create <span className="hidden md:inline">New Capsule</span>
        </button>
      </div>
    </section>
  );
}
