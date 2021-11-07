import React, { useState } from "react";
import { useCookieContext } from "../domain/context/CookiesContext";

export const SubHeader = () => {
  const [currentDate, setDate] = useState("");
  const { scripts, reScanValues } = useCookieContext();
  return (
    <>
      {currentDate && <p>Last Scan: {currentDate}</p>}
      <button
        className="btn btn-primary"
        onClick={() => {
          reScanValues();
          const currentDate = new Date().toISOString().split("T")[0];
          setDate(currentDate);
        }}
      >
        Rescan {scripts}
      </button>
    </>
  );
};
