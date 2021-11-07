import React from "react";
import data from "../domain/data.json";

export const TableData = () => {
  return (
    <>
      <table>
        <th>IP Address</th>
        <th>Country</th>
        <th>Device</th>
        <th>Consent Status</th>
        <th>Time and Date</th>
        <tbody>
          {data.map((datum) => (
            <tr key={datum.ipAddress}>
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
