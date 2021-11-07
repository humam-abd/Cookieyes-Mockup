import React from "react";
import data from "../domain/data.json";

export const TableData = () => {
  return (
    <>
      <table>
        <thead>
          <td>IP Address</td>
          <td>Country</td>
          <td>Device</td>
          <td>Consent Status</td>
          <td>Time and Date</td>
        </thead>
        <tbody>
          {data.map((datum) => (
            <tr>
              <td>{datum.ipAddress}</td>
              <td>{datum.country}</td>
              <td>{datum.device}</td>
              <td>{datum.consentStatus}</td>
              <td>{`${datum.time}, ${datum.date}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
