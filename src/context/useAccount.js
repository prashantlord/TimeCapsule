import { createContext, useContext } from "react";
import { account } from "../lib/appwrite";

export const userAccount = createContext({
  userAcc: {
    id: "prashaant@gmail.com",
    password: "prashant",
  },
  loginStatus: false,
  setLoginStatus: () => {},
  setUserAcc: () => {},
  loginUser: (email, password) => {},
  logoutUser: () => {},
  registerUser: (email, password) => {},
  getUser: () => {},
});

export default function useAccount() {
  return useContext(userAccount);
}
export const UserProvider = userAccount.Provider;
