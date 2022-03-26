import React from "react";
import { Outlet } from "react-router-dom";
import SideNavMenu from "./components/SideNavMenu";

const SideNav = (): React.ReactElement => {
  return (
    <aside className="sidenav-container">
      <div className="side-nav">
        <SideNavMenu />
      </div>
    </aside>
  );
};

export default SideNav;
