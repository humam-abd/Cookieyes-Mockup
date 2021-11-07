import React from "react";
import { useCookieContext } from "../domain/context/CookiesContext";

export const SubHeader = () => {
  const { scripts, reScanValues } = useCookieContext();
  return <button onClick={reScanValues}>Rescan {scripts}</button>;
};
