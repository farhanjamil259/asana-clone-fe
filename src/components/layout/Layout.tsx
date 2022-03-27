import React from "react";
import SideNav from "../sidenav/SideNav";

type LayoutProps = {
  children: React.ReactElement;
};

const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <div className="container">
      <SideNav />
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
