/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useGlobalContext } from "../domain/context/GlobalContext";

export const Header = () => {
  const { setValue } = useGlobalContext();

  const [searchString, setSearchString] = useState("");

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-end">
          <div className="col-12 col-lg-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
              value={searchString}
              onChange={(e) => {
                const val = e.target.value;
                setSearchString(val);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setValue?.(searchString);
                }
              }}
            />
          </div>
          <div className="ms-2 rounded border" style={{ height: "35px" }}>
            <img className="m-1 mt-2" src="combined-shape.svg" alt="ring" />
          </div>
          <div className="ms-2 rounded border" style={{ height: "35px" }}>
            <img className="m-1 mt-2" src="settings-2_2.svg" alt="ring" />
          </div>
          <div className="ms-2 rounded border" style={{ height: "35px" }}>
            <img className="m-1 mt-2" src="group-5.svg" alt="ring" />
          </div>
        </div>
      </div>
    </header>
  );
};
