import { CloudAlert, KeyRound, MailWarning } from "lucide-react";
import useAccount from "../context/useAccount";
import { Link, useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
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
      <section className="w-full h-170 flex items-center bg-gray-100">
        <div className="mx-auto bg-white border-1 border-gray-300 rounded-xl w-100 px-2 py-10">
          <div className="text-center flex items-center flex-col gap-2">
            <KeyRound className="bg-gray-200 w-20 h-20 p-5 rounded-full " />

            <h1 className="font-semibold text-2xl">Welcome Back</h1>
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
        className={`flex  gap-2 fixed top-20 right-0 bg-red-500 text-white p-3 w-55 rounded-l-xl  ${
          accountErr ? "slideAnm" : "hidden"
        }`}
      >
        <MailWarning size={25} />
        Check your Email or Password
      </div>
    </>
  );
}
