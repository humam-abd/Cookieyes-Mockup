import React from "react";

export const CounterCard = ({ src, count, title, type, isUpdated, color }) => {
  return (
    <div className="card rounded-corners">
      <div className="counter-card">
        <div className="border img-card" style={{ backgroundColor: color }}>
          <img src={src} className="counter-img" alt="counter" />
        </div>
      </div>
      <div className="card-body">
        <h2>{count}</h2>
        <br />
        <h6>{title}</h6>
        {isUpdated && <p className="card-text translucent">1 new {type}</p>}
      </div>
    </div>
  );
};
