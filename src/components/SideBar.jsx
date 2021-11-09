import React from "react";

export const SideBar = () => {
  const dashboardMenu = [
    {
      name: "Dashboard",
      image: "dashboard.svg",
    },
    {
      name: "Consent Banner",
      image: "consentbanner.svg",
    },
    {
      name: "Cookies",
      image: "cookies.svg",
    },
    {
      name: "Scan",
      image: "scan.svg",
    },
    {
      name: "Reports",
      image: "reports.svg",
    },
    {
      name: "Settings",
      image: "settings.svg",
    },
  ];
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 sidebar-bg-color resolution resol-width">
      <div className="cookie-yes">
        <a
          href="/"
          className="d-flex align-items-center mb-5 mt-5 me-md-auto link-dark text-decoration-none"
        >
          <img src="group.svg" alt="logo" />
        </a>
      </div>

      <ul className="nav nav-pills flex-column text-start">
        {dashboardMenu.map((menu) => (
          <li id={`clicked${menu.name}`} className="nav-item mb-3 mt-3">
            <a
              href={`#clicked${menu.name}`}
              className="nav-link link-light"
              aria-current="page"
            >
              <img src={menu.image} className="me-2" alt={menu.name} />
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};
