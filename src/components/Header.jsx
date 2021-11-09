import React, { useState } from "react";
import { useGlobalContext } from "../domain/context/GlobalContext";

export const Header = () => {
  const { setValue, isOpen, toggleSidebar } = useGlobalContext();

  const [searchString, setSearchString] = useState("");

  return (
    <header className="p-3 border-bottom bg-light">
      <div className="header-bar">
        <span onClick={() => toggleSidebar(!isOpen)} className="toggler">
          <img src="menu-toggler.svg" alt="menu" />
        </span>

        <div className="d-flex header-bar">
          <div>
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
          <div className="ms-2 rounded border header-icons">
            <img className="m-1 mt-2" src="combined-shape.svg" alt="ring" />
          </div>
          <div className="ms-2 rounded border header-icons">
            <img className="m-1 mt-2" src="settings-2_2.svg" alt="ring" />
          </div>
          <div className="ms-2 rounded border header-icons">
            <img className="m-1 mt-2" src="group-5.svg" alt="ring" />
          </div>
        </div>
      </div>
    </header>
  );
};
