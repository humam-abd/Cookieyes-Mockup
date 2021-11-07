import React, { createContext, useState, useContext } from "react";

export const CookiesContext = createContext({
  scripts: 0,
  categories: 0,
  pagesScanned: 0,
  reScanValues: () => null,
  resetValues: () => null,
});

const CookiesContextProvider = ({ children }) => {
  const [cookieStates, setCookieStates] = useState({
    scripts: 3,
    categories: 5,
    pagesScanned: 2,
  });

  const reScanValues = () =>
    setCookieStates({
      ...cookieStates,
      scripts: cookieStates.scripts + 1,
      categories: cookieStates.categories + 1,
      pagesScanned: cookieStates.pagesScanned + 1,
    });

  const resetValues = () =>
    setCookieStates({
      ...cookieStates,
      scripts: 0,
      categories: 0,
      pagesScanned: 0,
    });

  return (
    <CookiesContext.Provider
      value={{
        scripts: cookieStates.scripts,
        categories: cookieStates.categories,
        pagesScanned: cookieStates.pagesScanned,
        reScanValues,
        resetValues,
      }}
    >
      {children}
    </CookiesContext.Provider>
  );
};

const useCookieContext = () => useContext(CookiesContext);

export { useCookieContext, CookiesContextProvider };
