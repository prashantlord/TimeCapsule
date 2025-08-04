import Header from "./Components/Header";
import { Outlet, useNavigate } from "react-router";
import { UserProvider } from "./context/useAccount";
import { useCallback, useState } from "react";
import Footer from "./Components/Footer";
import { account } from "./lib/appwrite";
import { ID, Query } from "appwrite";
import db from "./lib/database";
function App() {
  const navigate = useNavigate();
  const [userAcc, setUserAcc] = useState({});
  const [loginStatus, setLoginStatus] = useState(false);

  const loginUser = useCallback(async (email, password) => {
    try {
      const res = await account.createEmailPasswordSession(email, password);
      setLoginStatus(true);
      return true;
    } catch (error) {
      console.error("ERROR while Logging In (APP)");
      return false;
    }
  });

  const logoutUser = useCallback(async () => {
    try {
      await account.deleteSession("current");
      setLoginStatus(false);
      navigate("/login");
    } catch (error) {
      console.error("ERROR ERROR WHILE LOGGING OUT (APP)");
    }
  });

  const getUser = useCallback(async () => {
    try {
      const res = await account.get();
      if (res.status) setLoginStatus(true);
      else setLoginStatus(false);
      setUserAcc({ id: res.$id, name: res.name });
      return res.status;
    } catch (error) {
      console.error("ERROR While Getting USEr LOGIN info (HEADER)");
      return false;
    }
  });

  const registerUser = useCallback(async (email, password, name) => {
    const id = ID.unique();
    try {
      await account.create(id, email, password, name);

      await loginUser(email, password);
      await account.createVerification("https://yourapp.com/verify-email");
      navigate("/");

      // SEND EMAIL TO THE USER {Future PLAN}
      //  await account.createVerification("https://yourapp.com/verify-email");
    } catch (error) {
      console.error("FUCKING ERROR WHILE REGISTERING (APP)" + error);
    }
  });

  const createPublicCapsule = useCallback(
    async (userId, name, title, description, opening, published) => {
      const payload = { userId, name, title, description, published };
      try {
        const res = await db.public.create(payload);
        navigate("/publiccapsule");
        return res;
      } catch (error) {
        console.error("FUCKING ERROR WHILE CREATING DATA LIST" + error);
      }
    }
  );

  const createPrivateCapsule = useCallback(
    async (userId, name, title, description, opening, published) => {
      const payload = { userId, name, title, description, opening, published };
      try {
        const res = await db.private.create(payload);
        navigate("/mycapsule");
        return res;
      } catch (error) {
        console.error("ERROR WHILE CREATING PRIVATE CAPSULE" + error);
      }
    }
  );

  const listPublicCapsules = useCallback(async (id) => {
    if (id) {
      try {
        const res = await db.public.list([Query.equal("userId", id)]);
        return res;
      } catch (error) {
        console.error("ERROR WHILE FETCHING DATA APP" + error);
        return;
      }
    } else {
      try {
        const res = await db.public.list();
        return res;
      } catch (error) {
        console.error("ERROR WHILE LISTING PUBLIC DATA APP" + error);
        return;
      }
    }
  });

  const listPrivateCapsules = useCallback(async (userId) => {
    try {
      const res = await db.private.list([Query.equal("userId", userId)]);
      return res;
    } catch (error) {
      console.error("ERROR WHILE FETCHING DATA APP" + error);
    }
  });

  const deletePrivateCapsule = useCallback(async (id) => {
    try {
      await db.private.delete(id);
    } catch (error) {
      console.error("ERROR WHILE DELETING DATA APP" + error);
    }
  });
  const deletePublicCapsule = useCallback(async (id) => {
    try {
      await db.public.delete(id);
    } catch (error) {
      console.error("ERROR WHILE DELETING DATA APP " + error);
    }
  });

  const updatePrivateCapsule = useCallback(async (id, payload) => {
    try {
      await db.private.update(id, payload);
    } catch (error) {
      console.error("ERROR WHILE UPDATING DATABASE APP " + error);
    }
  });
  const updatePublicCapsule = useCallback(async (id, payload) => {
    try {
      await db.public.update(id, payload);
      return true;
    } catch (error) {
      console.error("ERROR WHILE UPDATING PUBLIC CAPSULE" + error);
      return false;
    }
  });

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
        createPrivateCapsule,
        createPublicCapsule,
        listPublicCapsules,
        listPrivateCapsules,

        deletePrivateCapsule,
        deletePublicCapsule,
        updatePrivateCapsule,
        updatePublicCapsule,
      }}
    >
      <header className="bg-white flex items-center border-b-1 border-gray-300 px-4 py-4">
        <Header />
      </header>

      <main className="w-full flex justify-center flex-col   ">
        <Outlet />
      </main>

      <footer className="bg-white border-t-1 flex flex-col items-center border-b-1 border-gray-300 px-3 py-3">
        <Footer />
      </footer>
    </UserProvider>
  );
}

export default App;
