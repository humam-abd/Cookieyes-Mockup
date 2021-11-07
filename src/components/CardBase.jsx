/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useCookieContext } from "../domain/context/CookiesContext";

export const CardBase = () => {
  const { resetValues } = useCookieContext();
  return (
    <div className="card rounded-corners">
      <div className="card-body d-flex">
        <div className="">
          <img src="icon-1.svg" alt="alert" className="pt-3" />
        </div>
        <p className="text-start pt-3 ms-3">
          Cookieyes banner not active yet.
          <a href="#" onClick={resetValues} className="text-danger ms-1">
            Complete Setup
          </a>
        </p>
      </div>
    </div>
  );
};
