import { KeyRound } from "lucide-react";
import useAccount from "../context/useAccount";
import { Link, useNavigate } from "react-router";
import { useState } from "react";

export default function Login() {
  const { account, setStatus, loggedIn } = useAccount();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [accountErr, setAccountErr] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => { ty
    e.preventDefault();
    account.map((item) => {
      if (item.id === email && item.password === password) {
        setStatus(email);
        navigate("/");
        setAccountErr(false);
      }
      setAccountErr(true);
    });
  };

  return (
    <>
      <section className="w-full h-170 flex items-center bg-gray-100">
        <div className="mx-auto bg-white border-1 border-gray-300 rounded-xl w-100 px-2 py-10">
          <div className="text-center flex items-center flex-col gap-2">
            <KeyRound className="bg-gray-200 w-20 h-20 p-5 rounded-full " />

            <h1 className="font-semibold text-2xl">Welcome Back</h1>
            <p className="text-gray-700">Signin to Access your Capsule</p>
          </div>
          <form className="w-full flex flex-col mt-5 gap-3">
            <div className="flex flex-col gap-2 mx-auto w-80">
              <label htmlFor="email" className="text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="outline-1 outline-gray-300 py-2 px-3 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2 mx-auto w-80">
              <label htmlFor="password" className="text-gray-800">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="outline-1 outline-gray-300 py-2 px-3 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2 mx-auto w-80">
              <div className="flex gap-2">
                <input type="checkbox" name="remember" id="remember" />
                <label
                  htmlFor="remember"
                  name="remember"
                  className="text-gray-700"
                >
                  Remember me
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-gray-700 rounded-md py-2 px-3  text-white mx-auto w-80 cursor-pointer hover:bg-gray-800 transition-colors duration-300"
              onClick={handleSubmit}
            >
              Login
            </button>
            <div className=" gap-2 mx-auto w-80 text-center ">
              <p className="text-gray-700 select-none">
                Don't have an account ?
                <Link to="/register" className="font-semibold text-gray-800">
                  {" "}
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <div
        className={`fixed top-20 right-0 bg-red-500 text-white p-3 w-55 rounded-l-xl  ${
          accountErr ? "slideAnm" : "hidden"
        }`}
      >
        Check your Email or Password
      </div>
    </>
  );
}
