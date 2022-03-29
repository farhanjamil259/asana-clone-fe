import React from "react";
import { Link } from "react-router-dom";
import CText from "../typography/CText";

const HorizontalMenu = (): React.ReactElement => {
  return (
    <div className="horizontal-menu">
      <Link to="/project/123123123/overview">
        <CText>Overview</CText>
      </Link>
      <Link to="/project/123123123/list">
        <CText>List</CText>
      </Link>
      <Link to="/project/123123123/board">
        <CText>Board</CText>
      </Link>
    </div>
  );
};

export default HorizontalMenu;
