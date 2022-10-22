import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [totalTable, setTotalTable] = useState(0);
  const [TotalChair, setTotalChair] = useState(0);

  return (
    <StoreContext.Provider
      value={{
        totalTable,
        setTotalTable,
        TotalChair,
        setTotalChair,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};
