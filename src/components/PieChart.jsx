import React from "react";
import { Chart } from "react-google-charts";

export const PieChart = ({ title, data }) => {
  return (
    <Chart
      width={"100%"}
      height={"100%"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={data}
      options={{
        title,
        slices: [
          {
            color: "#ffc109",
          },
          {
            color: "#00c9a6",
          },
          {
            color: "#de4437",
          },
        ],
      }}
    />
  );
};
