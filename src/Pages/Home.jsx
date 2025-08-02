import { Lock, LockOpen, MoveRight, SquarePen } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import Hero from "../Components/Home/Hero";

import AboutUs from "../Components/Home/AboutUs";
import PublicCapsule from "../Components/Home/PubliCapsules";
import CreationForm from "../Components/Home/CreationForm";
import GetStarted from "../Components/Home/GetStarted";

export default function Home() {
  const navigate = useNavigate();

  const [formPage, setFormPage] = useState("public");

  const userData = [
    {
      name: "Anonymous",
      title: "Future World",
      info: "I dont know what is going to happen in the future but I know one thing that is the world will end in 2026",
      about: ["future", "world"],
      coverImg: "/image.png",
      personImg: "/person2.png",
    },
    {
      name: "Anonymous",
      title: "Future life",
      info: "I really want to have more than 50 children and they grow up to be a football star, cricket star and so on",
      about: ["future", "sports"],
      coverImg: "/image.png",
      personImg: "/person1.png",
    },
    {
      name: "Anonymous",
      title: "Currency Life",
      info: "I want to leave what I am doing right now and get the hell out of this country and start a new life with a.. ",
      about: ["future", "world"],
      coverImg: "/image.png",
      personImg: "/person3.png",
    },
  ];

  const webData = [
    {
      icon: SquarePen,
      title: "Create Your Capsule",
      desc: "Write a message, upload photos, set goals, and choose when you want your capsule to be opened.",
    },
    {
      icon: Lock,
      title: "Your Capsule is Sealed",
      desc: "We securely store your capsule until the date you specify. No peeking allowed!",
    },
    {
      icon: LockOpen,
      title: "Open When it's time",
      desc: "when the future date arrives, your capsule unlocks and you can revisit your past thoughts and memories.",
    },
  ];

  const personalCapsule = (e) => {
    e.preventDefault();
    navigate("/create");
  };

  const publicCapsule = (e) => {
    e.preventDefault();
    navigate("/publiccapsule");
  };

  return (
    <>
      <Hero publicCapsule={publicCapsule} personalCapsule={personalCapsule} />

      <PublicCapsule userData={userData} />

      <AboutUs webData={webData} />
      <CreationForm formPage={formPage} setFormPage={setFormPage} />
      <GetStarted />
    </>
  );
}
