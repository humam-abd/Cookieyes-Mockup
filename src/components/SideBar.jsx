import React from "react";

export const SideBar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 sidebar-bg-color resolution">
      <div className="cookie-yes">
        <a
          href="/"
          className="d-flex align-items-center mb-5 mt-5 me-md-auto link-dark text-decoration-none"
        >
          <img src="group.svg" alt="logo" />
        </a>
      </div>

      <ul className="nav nav-pills flex-column text-start">
        <li id="clickedHome" className="nav-item mb-3 mt-3">
          <a
            href="#clickedHome"
            className="nav-link link-light"
            aria-current="page"
          >
            <img src="dashboard.svg" className="me-2" alt="dashboard" />
            Dashboard
          </a>
        </li>
        <li id="clickedConsentBanner" className="nav-item mb-3">
          <a href="#clickedConsentBanner" className="nav-link link-light">
            <img src="consentbanner.svg" className="me-2" alt="consentbanner" />
            Consent Banner
          </a>
        </li>
        <li id="clickedCookies" className="nav-item mb-3">
          <a href="#clickedCookies" className="nav-link link-light">
            <img src="cookies.svg" className="me-2" alt="cookies" />
            Cookies
          </a>
        </li>
        <li id="clickedScan" className="nav-item mb-3">
          <a href="#clickedScan" className="nav-link link-light">
            <img src="scan.svg" className="me-2" alt="scan" />
            Scan
          </a>
        </li>
        <li id="clickedReports" className="nav-item mb-3">
          <a href="#clickedReports" className="nav-link link-light">
            <img src="reports.svg" className="me-2" alt="reports" />
            Reports
          </a>
        </li>
        <li id="clickedSettings" className="nav-item mb-3">
          <a href="#clickedSettings" className="nav-link link-light">
            <img src="settings.svg" className="me-2" alt="settings" />
            Settings
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};
