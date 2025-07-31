import { createContext, useContext } from "react";

export const userAccount = createContext({
  account: [{ id: "prashantlord", password: "prash12345", status: false }],
  loggedIn: "prashantlord",
  setId: () => {},
  setStatus: () => {},
  setLoggedIn: () => {},
  setLoggedOut: () => {},

  
});

export default function useAccount() {
  return useContext(userAccount);
}
export const UserProvider = userAccount.Provider;
