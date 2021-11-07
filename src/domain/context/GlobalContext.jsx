import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext({
  searchValue: "https://cookieyes.com",
});

const GlobalContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("https://cookieyes.com");
  const setValue = (value) => setSearchValue(value);

  return (
    <GlobalContext.Provider
      value={{
        searchValue,
        setValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalContextProvider };
