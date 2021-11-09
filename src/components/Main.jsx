import React from "react";
import { Body } from "./Body";
import { CardBase } from "./CardBase";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { TableData } from "./TableData";

export const Main = () => {
  return (
    <div className="main-body w-100 ps-5 pb-5 pe-5 resolution">
      <Header />
      <SubHeader />
      <CardBase />
      <Body />
      <TableData />
    </div>
  );
};
