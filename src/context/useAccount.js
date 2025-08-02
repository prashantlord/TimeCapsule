import { createContext, useContext } from "react";
import { account } from "../lib/appwrite";

export const userAccount = createContext({
  userAcc: {
    id: "prashaant@gmail.com",
    password: "prashant",
  },
  setUserAcc: () => {},
  loginUser: (email, password) => {},
  logoutUser: () => {},
  registerUser: (email, password) => {},
});

export default function useAccount() {
  return useContext(userAccount);
}
export const UserProvider = userAccount.Provider;
