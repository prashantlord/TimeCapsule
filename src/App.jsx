import Header from "./Components/Header";
import { Outlet } from "react-router";
import { UserProvider } from "./context/useAccount";
import { useState } from "react";
import Footer from "./Components/Footer";
function App() {
  const [account, setAccount] = useState([]);

  return (
    <UserProvider value={account}>
      <header className="bg-white flex items-center border-b-1 border-gray-300 px-4 py-3">
        <Header />
      </header>
      <main className="w-full  flex items-center mt-15 ">
        <Outlet />
      </main>
      <footer className="bg-white border-t-1 flex flex-col items-center border-b-1 border-gray-300 px-3 py-3">
        <Footer />
      </footer>
    </UserProvider>
  );
}

export default App;
