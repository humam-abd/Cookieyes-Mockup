import React, { createContext, useState, useContext } from "react";

const GlobalContext = createContext({
  searchValue: "https://cookieyes.com",
  isOpen: true,
});

const GlobalContextProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("https://cookieyes.com");
  const [isOpen, setOpen] = useState(true);
  const setValue = (value) => setSearchValue(value);
  const toggleSidebar = (value) => {
    setOpen(value);
    console.log(isOpen);
  };

  return (
    <GlobalContext.Provider
      value={{
        searchValue,
        setValue,
        isOpen,
        toggleSidebar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { useGlobalContext, GlobalContextProvider };
