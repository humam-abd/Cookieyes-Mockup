import React from "react";
import data from "../domain/data.json";

export const TableData = () => {
  const getStyleByConsentStatus = (status) => {
    if (status === "Accepted") {
      return { color: "#00c9a6", backgroundColor: "#ecf9f6" };
    } else if (status === "Partially Accepted") {
      return { color: "#1b7cf8", backgroundColor: "#ecf2ff" };
    }
    return { color: "black", backgroundColor: "white" };
  };

  return (
    <>
      <h3 className="text-start mt-5">Recent Visitors</h3>
      <div className="table-responsive">
        <table className="w-100">
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
                <td>
                  <button
                    className="btn"
                    style={getStyleByConsentStatus(datum.consentStatus)}
                  >
                    {datum.consentStatus}
                  </button>
                </td>
                <td>{`${datum.time}, ${datum.date}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
