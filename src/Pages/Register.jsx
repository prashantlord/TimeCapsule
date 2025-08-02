import { KeyRound, UserLock } from "lucide-react";
import useAccount from "../context/useAccount";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import RegisterForm from "../Components/LoginRegister/RegisterForm";
import { ID } from "appwrite";

export default function Register() {
  // Context API
  const { loginStatus, registerUser } = useAccount();
  // REACT ROUTER
  const navigate = useNavigate();
  // STATES for FORM
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [terms, setTerms] = useState(false);

  // STATES for UI
  const [accountErr, setAccountErr] = useState("");

  // SECURITY MEASURE
  useEffect(() => {
    if (loginStatus) {
      navigate("/");
    }
  }, [loginStatus]);

  // HANDLE FUNCTIONS
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAccountErr("Enter Something your Fucker");
      return;
    } else if (password !== confirmPass) {
      setAccountErr("Recheck your Password");
      return;
    } else if (!terms) {
      setAccountErr("Accept the Terms of Services of proceed");
      return;
    } else if (password.length < 8) {
      setAccountErr("Password must be atleast 8 letters");
      return;
    }
    const res = await registerUser(email, password, name);
    if (!res) {
      setAccountErr("Either account already exist or some problem has occured");
      return;
    }
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setAccountErr(false);
    }, 8000);
    return clearInterval(time);
  }, [accountErr]);
  return (
    <>
      <section className="w-full h-200 flex items-center bg-gray-100">
        <div className="mx-auto bg-white border-1 border-gray-300 rounded-xl w-100 px-2 py-10">
          <div className="text-center flex items-center flex-col gap-2">
            <UserLock className="bg-gray-200 w-20 h-20 p-5 rounded-full " />

            <h1 className="font-semibold text-2xl">Create Account</h1>
            <p className="text-gray-700">Start your journey with TimeCapsule</p>
          </div>
          <RegisterForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confirmPass={confirmPass}
            setConfirmPass={setConfirmPass}
            handleSubmit={handleSubmit}
            terms={terms}
            setTerms={setTerms}
          />
        </div>
      </section>

      <div
        className={`rounded-l-xl fixed top-20 bg-red-500 px-5 py-2 right-0 text-white transition-all duration-300 ease-in-out  ${
          accountErr ? "right-0" : "right-[-15rem] "
        }`}
      >
        {accountErr}
      </div>
    </>
  );
}
