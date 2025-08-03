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
  createPublicCapsule: (
    userId,
    name,
    title,
    description,
    opening,
    published
  ) => {},
  createPrivateCapsule: (
    userId,
    name,
    title,
    description,
    opening,
    published
  ) => {},
  listPublicCapsules: () => {},
  listPrivateCapsules: (userId) => {},
  listRelesedCapsule: () => {},
  deletePrivateCapsule: (id) => {},
  editPrivateCapsule: (id, payload) => {},
});

export default function useAccount() {
  return useContext(userAccount);
}
export const UserProvider = userAccount.Provider;
