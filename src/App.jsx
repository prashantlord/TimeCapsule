import Header from "./Components/Header";
import { Outlet, useNavigate } from "react-router";
import { UserProvider } from "./context/useAccount";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import { account } from "./lib/appwrite";
import { ID } from "appwrite";
function App() {
  const navigate = useNavigate();
  const [userAcc, setUserAcc] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);

  const loginUser = async (email, password) => {
    try {
      const res = await account.createEmailPasswordSession(email, password);
      console.log(res);
      setLoginStatus(true);
      return true;
    } catch (error) {
      console.error("FUCK while Logging In (APP)");
      return false;
    }
  };
  const logoutUser = async () => {
    try {
      await account.deleteSession("current");
      setLoginStatus(false);
      navigate("/login");
    } catch (error) {
      console.error("FUCKING ERROR WHILE LOGGING OUT (APP)");
    }
  };

  const getUser = async () => {
    try {
      const res = await account.get();
      if (res.status) setLoginStatus(true);
      else setLoginStatus(false);
      return res.status;
    } catch (error) {
      console.log("fuck While Getting USEr LOGIN info (HEADER)");
      return false;
    }
  };
  const registerUser = async (email, password, name) => {
    const id = ID.unique();
    try {
      await account.create(id, email, password, name);
      await loginUser(email, password);
      navigate("/");
    } catch (error) {
      console.log("FUCKING ERROR WHILE REGISTERING (APP)" + error);
    }
  };

  return (
    <UserProvider
      value={{
        userAcc,
        setUserAcc,
        loginUser,
        logoutUser,
        registerUser,
        getUser,
        loginStatus,
        setLoginStatus,
      }}
    >
      <header className="bg-white flex items-center border-b-1 border-gray-300 px-4 py-4">
        <Header />
      </header>
      <main className="w-full  flex justify-center flex-col   ">
        <Outlet />
      </main>
      <footer className="bg-white border-t-1 flex flex-col items-center border-b-1 border-gray-300 px-3 py-3">
        <Footer />
      </footer>
    </UserProvider>
  );
}

export default App;
