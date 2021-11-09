import React from "react";
import { useGlobalContext } from "../domain/context/GlobalContext";
import { Main } from "./Main";
import { SideBar } from "./SideBar";

export const HomeComponent = () => {
  const { isOpen } = useGlobalContext();
  return (
    <div className="App d-flex">
      {isOpen && <SideBar />}
      <Main />
    </div>
  );
};
