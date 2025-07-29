import { createContext, useContext } from "react";

export const userAccount = createContext({
  account: [{ id: "prashantlord", password: "prash12345" }],
  setId: () => {},
  setPassword: () => {},
});

export default function useAccount() {
  return useContext(useAccount);
}
export const UserProvider = userAccount.Provider;
