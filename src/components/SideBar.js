/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const SideBar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 sidebar-bg-color"
      style={{ height: "100vh", width: "20%" }}
    >
      <div className="cookie-yes">
        <a
          href="/"
          className="d-flex align-items-center mb-5 mt-5 me-md-auto link-dark text-decoration-none"
        >
          <img src="group.svg" alt="logo" />
        </a>
      </div>

      <ul className="nav nav-pills flex-column">
        <li id="clickedHome" className="nav-item mb-3 mt-3">
          <a
            href="#clickedHome"
            className="nav-link link-light"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li id="clickedDashboard" className="nav-item mb-3">
          <a href="#clickedDashboard" className="nav-link link-light">
            Dashboard
          </a>
        </li>
        <li id="clickedOrders" className="nav-item mb-3">
          <a href="#clickedOrders" className="nav-link link-light">
            Orders
          </a>
        </li>
        <li id="clickedProducts" className="nav-item mb-3">
          <a href="#clickedProducts" className="nav-link link-light">
            Products
          </a>
        </li>
        <li id="clickedCustomers" className="nav-item mb-3">
          <a href="#clickedCustomers" className="nav-link link-light">
            Customers
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};
