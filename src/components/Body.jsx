import React from "react";
import { useCookieContext } from "../domain/context/CookiesContext";
import { CounterCard } from "./CounterCard";
import { PieChart } from "./PieChart";

export const Body = () => {
  const { scripts, categories, pagesScanned, isLoading } = useCookieContext();
  const totalCookies =
    Number(scripts) + Number(categories) + Number(pagesScanned);

  const getColor = (type) => {
    switch (type) {
      case "cookie":
        return "#ecf2ff";
      case "script":
        return "#fff9eb";
      case "category":
        return "#ecf9f6";
      case "page":
        return "#fdecec";
      default:
        return "#000000";
    }
  };
  return (
    <div className="d-flex row mt-3">
      <div className="col-lg-2 col-md-6">
        <CounterCard
          src="blue-cookie.svg"
          count={totalCookies}
          title="Total Cookies"
          type="cookie"
          isUpdated={isLoading}
          color={getColor("cookie")}
        />
      </div>
      <div className="col-lg-2 col-md-6">
        <CounterCard
          src="scripts.svg"
          count={scripts}
          title="Total Scripts"
          type="script"
          isUpdated={isLoading}
          color={getColor("script")}
        />
      </div>
      <div className="col-lg-2 col-md-6">
        <CounterCard
          src="categories.svg"
          count={categories}
          title="Categories"
          type="category"
          isUpdated={isLoading}
          color={getColor("category")}
        />
      </div>
      <div className="col-lg-2 col-md-6">
        <CounterCard
          src="pagesscanned.svg"
          count={pagesScanned}
          title="Pages Scanned"
          type="page"
          isUpdated={isLoading}
          color={getColor("page")}
        />
      </div>
      {totalCookies > 0 && (
        <div className="col-lg-4 rounded-corners">
          <PieChart
            title="Cookies"
            data={[
              ["Cookies", "Number Per Scan"],
              ["Scripts", Number(scripts)],
              ["Categories", Number(categories)],
              ["PagesScanned", Number(pagesScanned)],
            ]}
          />
        </div>
      )}
    </div>
  );
};
