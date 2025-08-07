import React, { useEffect, useState } from "react";
import { EarthIcon, Unlock } from "lucide-react";
import useAccount from "../context/useAccount";
import PublicCard from "../Components/PublicCapsule/PublicCard";
import SearchBox from "../Components/PublicCapsule/SearchBox";
import { useNavigate } from "react-router";

export default function PublicCapsule() {
  const { listPublicCapsules } = useAccount();
  const navigate = useNavigate();
  const [capsule, setCapsule] = useState([]);
  const [search, setSearch] = useState("");
  const [caps, setCaps] = useState([]);
  // FILTER CAPSULES
  useEffect(() => {
    const temp = [...capsule];
    if (search === "") {
      setCaps(temp);
      return;
    }
    setCaps(
      temp.filter((item) =>
        item.name.toLowerCase().startsWith(search.toLowerCase()),
      ),
    );

    console.log(caps);
  }, [search, capsule]);

  // DATA FROM DATABASE
  const init = async () => {
    const res = await listPublicCapsules();
    setCapsule(res.documents);
  };
  useEffect(() => {
    init();
  }, [listPublicCapsules]);

  return (
    <>
      <section className="mx-auto mt-12 mb-5 h-fit">
        <div className="flex flex-col items-center gap-5 px-5">
          <EarthIcon className="spinAnime h-20 w-20 rounded-full bg-gray-200 p-5" />
          <h1 className="text-center text-3xl font-bold">
            Public Time Capsules
          </h1>
          <p className="text-center text-sm text-gray-700">
            Discover inspiring messages from people around the world, sharing
            their hopes, dreams, and reflections for the future.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-5 mb-10 flex w-full flex-col gap-3 px-2 md:w-200 xl:w-300">
        <SearchBox search={search} setSearch={setSearch} />
        <div className="mx-auto mt-5 flex w-full flex-wrap items-center justify-center gap-5 px-5">
          {caps
            ? caps.map((item, key) => {
                return (
                  <PublicCard
                    key={key}
                    name={item?.name}
                    title={item?.title}
                    info={item?.description}
                    published={item?.$createdAt}
                  />
                );
              })
            : null}
        </div>
      </section>
      <section className="mx-auto mt-12 mb-5 h-fit bg-gray-100 py-10">
        <div className="flex flex-col items-center gap-5 px-5">
          <h1 className="text-center text-3xl font-bold">
            Share Your Story with the World
          </h1>
          <p className="text-center text-sm text-gray-700">
            Create a public time capsule and inspire others with your hopes,
            dreams, and reflections for the future.
          </p>
          <button
            className="cursor-pointer rounded-full bg-gray-900 px-5 py-2 text-white transition-colors duration-300 ease-in hover:bg-gray-700"
            onClick={() => navigate("/create")}
          >
            Create Public Capsule
          </button>
        </div>
      </section>
    </>
  );
}
