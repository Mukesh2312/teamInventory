import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [updateVendor, setUpdateVendor] = useState({});
  const [client, setClient] = useState({});
  const [tenderDetails, setTenderDetails] = useState({});

  const obj = {
    updateVendor,
    setUpdateVendor,
    client,
    setClient,
    tenderDetails,
    setTenderDetails,
  };

  return <UserContext.Provider value={obj}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
