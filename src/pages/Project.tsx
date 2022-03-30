import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Project = (): React.ReactElement => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Project;
