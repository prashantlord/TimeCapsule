import { FilePlus2 } from "lucide-react";
import { useEffect, useState } from "react";

import db from "../lib/database";
import { data, useNavigate } from "react-router";
import useAccount from "../context/useAccount";
import CreateHero from "../Components/Create/CreateHero";
import CapsuleType from "../Components/Create/CapsuleType";
import CapsuleForm from "../Components/Create/CapsuleForm";

export default function Create() {
  // CONTEXT API
  const { userAcc, createPrivateCapsule, createPublicCapsule } = useAccount();
  // REACT ROUTER
  const navigate = useNavigate();
  // DATA STATE
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goalOne, setGoalOne] = useState(false);
  const [goalTwo, setGoalTwo] = useState(false);
  const [openingDate, setOpeningDate] = useState("");
  const [openingTime, setOpeningTime] = useState("");

  // DATE AND TIME STATE
  const [publish, setPublish] = useState("");
  const [opening, setOpening] = useState("");

  // CAPSULE TYPE STATE
  const [capsule, setCapsule] = useState("public");

  // UI STATE
  const [errorMessage, setErrorMessage] = useState();

  // HANDLE FUNCTIONS
  const handleCreate = async (e) => {
    e.preventDefault();

    if (!userAcc) {
      setErrorMessage("Please login before creating a capsule.");
      return;
    }

    // parse the intended opening datetime
    const dt = new Date(`${openingDate}T${openingTime}`);
    const now = new Date();

    if (isNaN(dt.getTime())) {
      setErrorMessage("Invalid opening date or time.");
      return;
    }

    if (dt < now) {
      setErrorMessage("Please select a date and time that is in the future.");
      return;
    }

    if (!title.trim() || !description.trim()) {
      setErrorMessage("Title and description are required.");
      return;
    }

    // prepare the values to use immediately
    const openingISO = dt.toISOString();
    const publishISO = now.toISOString();

    // update state (for UI)
    setOpening(openingISO);
    setPublish(publishISO);

    // proceed with creation
    if (capsule === "public") {
      try {
        await createPublicCapsule(
          userAcc.id,
          userAcc.name,
          title,
          description,
          openingISO,
          publishISO
        );
      } catch (err) {
        setErrorMessage("Failed to create capsule. Please retry.");
        console.error(err);
      }
    } else {
      try {
        await createPrivateCapsule(
          userAcc.id,
          userAcc.name,
          title,
          description,
          openingISO,
          publishISO
        );
      } catch (err) {
        setErrorMessage("Failed to create capsule. Please retry.");
        console.error(err);
      }
    }
  };

  // DATABASE CREATE DATA

  const handleDraft = () => {};

  // UI EFFECT
  useEffect(() => {
    if (!errorMessage) return;

    const time = setTimeout(() => {
      setErrorMessage(false);
    }, 8000);

    return () => clearTimeout(time);
  }, [errorMessage]);

  return (
    <>
      <CreateHero />

      <section className="flex flex-col mt-10 gap-10 px-5">
        <CapsuleType capsule={capsule} setCapsule={setCapsule} />
        <div className="mx-auto w-full h-fit flex flex-col items-center justify-center xl:flex-row gap-10 md:w-200 mb-20  ">
          <CapsuleForm
            capsule={capsule}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            openingDate={openingDate}
            setOpeningDate={setOpeningDate}
            openingTime={openingTime}
            setOpeningTime={setOpeningTime}
            goalOne={goalOne}
            setGoalOne={setGoalOne}
            goalTwo={goalTwo}
            setGoalTwo={setGoalTwo}
            handleCreate={handleCreate}
            handleDraft={handleDraft}
          />
        </div>
      </section>

      <div
        className={`rounded-l-xl fixed top-20 bg-red-500 px-5 py-2 right-0 text-white transition-all duration-300 ease-in ${
          errorMessage ? "right-0" : "right-[-50rem]"
        }`}
      >
        {errorMessage}
      </div>
    </>
  );
}
