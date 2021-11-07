/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";

export const CookiesContext = createContext({
  scripts: 0,
  categories: 0,
  pagesScanned: 0,
  reScanValues: () => null,
  resetValues: () => null,
});

const CookiesContextProvider = ({ children }) => {
  const [cookieStates, setCookieStates] = useState({
    scripts: 0,
    categories: 0,
    pagesScanned: 0,
  });

  // Get cookies
  const scriptCookie = Cookies.get("scripts");
  const categoriesCookie = Cookies.get("categories");
  const pagesScannedCookie = Cookies.get("pagesScanned");

  const { scripts, categories, pagesScanned } = cookieStates;

  // Re-Scan function
  const reScanValues = () =>
    setCookieStates({
      ...cookieStates,
      scripts: Number(scripts) + 1,
      categories: Number(categories) + 1,
      pagesScanned: Number(pagesScanned) + 1,
    });

  // Reset values
  const resetValues = () =>
    setCookieStates({
      ...cookieStates,
      scripts: 0,
      categories: 0,
      pagesScanned: 0,
    });

  // Set cookies on state change (for persistent values on reload)
  useEffect(() => {
    if (cookieStates) {
      Cookies.set("scripts", scripts);
      Cookies.set("categories", categories);
      Cookies.set("pagesScanned", pagesScanned);
    }
  }, [cookieStates]);

  // Initial state values
  useEffect(() => {
    setCookieStates({
      ...cookieStates,
      scripts: scriptCookie ?? 0,
      categories: categoriesCookie ?? 0,
      pagesScanned: pagesScannedCookie ?? 0,
    });
  }, []);

  return (
    <CookiesContext.Provider
      value={{
        scripts,
        categories,
        pagesScanned,
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
