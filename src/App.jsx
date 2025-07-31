import Header from "./Components/Header";
import { Outlet } from "react-router";
import { UserProvider } from "./context/useAccount";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
function App() {
  const [account, setAccount] = useState(
    JSON.parse(localStorage.getItem("localAcc"))
      ? JSON.parse(localStorage.getItem("localAcc"))
      : [
          {
            id: "prashant@gmail.com",
            password: "prash123",
            status: false,
          },
        ]
  );
  const [loggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem("accountId")) !== ""
      ? JSON.parse(localStorage.getItem("accountId"))
      : null
  );
  const setId = (id, pass) => {
    let temp = [...account];
    temp = [
      ...temp,
      {
        id: id,
        password: pass,
        status: false,
      },
    ];
    setAccount([...temp]);
  };

  const setStatus = (id) => {
    const temp = [...account];
    temp.map((item) => {
      item.id === id ? (item.status = true) : null;
    });
    setLoggedIn(id);
    setAccount([...temp]);
  };

  const setLoggedOut = () => {
    const temp = [...account];

    temp.map((item) => {
      item.id === loggedIn ? (item.status = false) : null;
    });
    setLoggedIn(null);
    setAccount([...temp]);
  };

  useEffect(() => {}, [account]);

  useEffect(() => {
    if (account == []) {
      return;
    } else {
      localStorage.setItem("localAcc", JSON.stringify(account));
    }

    localStorage.setItem("accountId", JSON.stringify(loggedIn));
  }, [account, loggedIn]);

  return (
    <UserProvider
      value={{
        account,
        setId,
        setStatus,
        loggedIn,
        setLoggedIn,
        setLoggedOut,
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
