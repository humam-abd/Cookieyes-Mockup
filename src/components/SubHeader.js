import React, { useState } from "react";
import { useCookieContext } from "../domain/context/CookiesContext";
import { useGlobalContext } from "../domain/context/GlobalContext";

export const SubHeader = () => {
  const [currentDate, setDate] = useState("");
  const { scripts, reScanValues } = useCookieContext();
  const { searchValue } = useGlobalContext();

  return (
    <div className="row d-flex mb-5 mt-5">
      <div className="col-lg-9 col-md-12 d-flex">
        <h1>{searchValue}</h1>
        <p className="pt-3">
          <img src="check-2.svg" alt="check" />
          Banner Active
        </p>
      </div>
      <div className="col-lg-3 col-md-12 row float-end">
        <div className="col-6">
          {currentDate && <p>Last Scan: {currentDate}</p>}
        </div>
        <button
          className="col-6 btn btn-primary"
          onClick={() => {
            reScanValues();
            const currentDate = new Date().toISOString().split("T")[0];
            setDate(currentDate);
          }}
        >
          Rescan {scripts}
        </button>
      </div>
    </div>
  );
};
