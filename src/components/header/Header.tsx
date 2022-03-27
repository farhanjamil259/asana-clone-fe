import React from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../../routes";
import HorizontalMenu from "../horizontalMenu/HorizontalMenu";
import CText from "../typography/CText";
import "./Header.scss";

const Header = (): React.ReactElement => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="header__section-left">
        <div className="header__project-info">
          <div className="header__project-info--icon" />
          <CText type="heading-3">Project Name</CText>
        </div>

        <HorizontalMenu />
      </div>
      <div className="header__section-right">Right</div>
    </div>
  );
};

export default Header;
