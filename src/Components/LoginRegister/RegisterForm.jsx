import { Link } from "react-router";

export default function RegisterForm({
  email,
  setEmail,
  password,
  setPassword,
  confirmPass,
  setConfirmPass,
  name,
  setName,

  setTerms,
  handleSubmit,
}) {
  return (
    <>
      <form className="mt-5 flex w-full flex-col gap-3" onSubmit={handleSubmit}>
        <div className="mx-auto flex w-80 flex-col gap-2">
          <label htmlFor="email" className="text-gray-800">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your Name"
            max={20}
            min={1}
            required
            className="rounded-md px-3 py-2 outline-1 outline-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mx-auto flex w-80 flex-col gap-2">
          <label htmlFor="email" className="text-gray-800">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="rounded-md px-3 py-2 outline-1 outline-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mx-auto flex w-80 flex-col gap-2">
          <label htmlFor="password" className="text-gray-800">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="rounded-md px-3 py-2 outline-1 outline-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mx-auto flex w-80 flex-col gap-2">
          <label htmlFor="confirmPassword" className="text-gray-800">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm your passowrd"
            required
            className="rounded-md px-3 py-2 outline-1 outline-gray-300"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>

        <div className="mx-auto my-2 flex w-84 flex-col gap-2">
          <div className="flex gap-2">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              onChange={() => {
                setTerms((prev) => !prev);
              }}
            />
            <label
              htmlFor="remember"
              name="remember"
              className="text-[0.8rem] text-gray-700"
            >
              I agree to the <b>Termes of service</b> and
              <b> privacy policy</b>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mx-auto w-80 cursor-pointer rounded-md bg-gray-700 px-3 py-2 text-white transition-colors duration-300 hover:bg-gray-800"
        >
          Create Account
        </button>
        <div className="mx-auto w-80 gap-2 text-center">
          <p className="text-gray-700 select-none">
            Already have an Account?
            <Link to="/login" className="font-semibold text-gray-800">
              {" "}
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
