import React from "react";
import { useCookieContext } from "../domain/context/CookiesContext";
import { CounterCard } from "./CounterCard";
import { PieChart } from "./PieChart";

export const Body = () => {
  const { scripts, categories, pagesScanned } = useCookieContext();
  const totalCookies =
    Number(scripts) + Number(categories) + Number(pagesScanned);
  return (
    <div className="d-flex row mt-3">
      <div className="col-lg-2 col-md-6">
        <CounterCard
          src="blue-cookie.svg"
          count={totalCookies}
          title="Total Cookies"
          type="cookie"
          isUpdated
        />
      </div>
      <div className="col-lg-2 col-md-6">
        <CounterCard
          src="scripts.svg"
          count={scripts}
          title="Total Scripts"
          type="script"
          isUpdated
        />
      </div>
      <div className="col-lg-2 col-md-6">
        <CounterCard
          src="categories.svg"
          count={categories}
          title="Categories"
          type="category"
          isUpdated
        />
      </div>
      <div className="col-lg-2 col-md-6">
        <CounterCard
          src="pagesscanned.svg"
          count={pagesScanned}
          title="Pages Scanned"
          type="page"
          isUpdated
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
