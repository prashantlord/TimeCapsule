import Header from "./Components/Header";
import { Outlet } from "react-router";
import { UserProvider } from "./context/useAccount";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import { account } from "./lib/appwrite";
function App() {
  const [userAcc, serUserAcc] = useState({});

  const loginUser = async () => {};
  const logoutUser = async () => {
    await account.deleteSession("current");
  };
  const registerUser = async () => {};

  return (
    <UserProvider
      value={{ userAcc, serUserAcc, logoutUser, logoutUser, registerUser }}
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
