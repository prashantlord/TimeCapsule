import { useEffect, useState } from "react";
import useAccount from "../context/useAccount";
import MyHero from "../Components/MyCapsule/MyHero";
import Filter from "../Components/MyCapsule/Filter";
import CapsuleCard from "../Components/MyCapsule/CapsuleCard";
import { ID } from "appwrite";

export default function MyCapsule() {
  // CONTEXT API
  const { listPrivateCapsules, getUser, userAcc } = useAccount();
  // DATA STATE
  const [capsules, setCapsules] = useState([]);
  // FILTER STATE
  const [filter, setFilter] = useState("All");
  // DATA BASE FUNCTION
  const init = async () => {
    try {
      const res = await listPrivateCapsules(userAcc.id);
      setCapsules(res.documents);

      console.log(res);
    } catch (error) {
      console.error(
        "ERROR WHILE FETCHING PRIVATE DATA CAPSULE MYCAPSULE" + error
      );
    }
  };

  useEffect(() => {
    // userAcc.id ? init() : "";
  }, [userAcc]);

  return (
    <div className="mx-auto w-full mt-12 h-fit mb-10 flex flex-col items-center gap-5">
      <MyHero />
      <section className="w-full flex items-center bg-gray-100 h-15">
        <Filter filter={filter} setFilter={setFilter} />
      </section>
     
        <CapsuleCard
          // name={item.name}
          // title={item.title}
          // description={item.description}
          // status={item.opened}
          // opening={item.opening}
          // published={item.published}
          // id={item.$id}
          key={ID.unique()}
        />
    
    </div>
  );
}
