import { KeyRound, UserLock } from "lucide-react";
import useAccount from "../context/useAccount";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import RegisterForm from "../Components/LoginRegister/RegisterForm";

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
      <section className="flex h-200 w-full items-center bg-gray-100">
        <div className="mx-auto w-100 rounded-xl border-1 border-gray-300 bg-white px-2 py-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <UserLock className="h-20 w-20 rounded-full bg-gray-200 p-5" />

            <h1 className="text-2xl font-semibold">Create Account</h1>
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
        className={`fixed top-20 right-0 rounded-l-xl bg-red-500 px-5 py-2 text-white transition-all duration-300 ease-in-out ${
          accountErr ? "right-0" : "right-[-15rem]"
        }`}
      >
        {accountErr}
      </div>
    </>
  );
}
