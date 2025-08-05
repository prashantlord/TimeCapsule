import { CloudAlert, KeyRound, MailWarning } from "lucide-react";
import useAccount from "../context/useAccount";
import { Link, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import LoginForm from "../Components/LoginRegister/LoginForm";

export default function Login() {
  const navigate = useNavigate();
  const { loginUser, loginStatus } = useAccount();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accountErr, setAccountErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" && password === "") {
      return;
    }

    const res = await loginUser(email, password);
    if (res) {
      setAccountErr(false);
      navigate("/");
    } else {
      setAccountErr(true);
    }
  };
  useEffect(() => {
    if (loginStatus) navigate("/");
  }, [loginStatus]);

  return (
    <>
      {/* LOGIN FORM  */}
      <section className="flex h-170 w-full items-center bg-gray-100">
        <div className="mx-auto w-100 rounded-xl border-1 border-gray-300 bg-white px-2 py-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <KeyRound className="h-20 w-20 rounded-full bg-gray-200 p-5" />

            <h1 className="text-2xl font-semibold">Welcome Back</h1>
            <p className="text-gray-700">Signin to Access your Capsule</p>
          </div>
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>

      {/* ERROR MESSAGE */}
      <div
        className={`fixed top-20 right-0 flex w-55 gap-2 rounded-l-xl bg-red-500 p-3 text-white ${
          accountErr ? "slideAnm" : "hidden"
        }`}
      >
        <MailWarning size={25} />
        Check your Email or Password
      </div>
    </>
  );
}
