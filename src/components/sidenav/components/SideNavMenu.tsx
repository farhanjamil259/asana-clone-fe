import React from "react";
import { Link } from "react-router-dom";
import { Projects } from "../../../mockedData";
import CText from "../../typography/CText";

const SideNavMenu = (): React.ReactElement => {
  return (
    <div className="side-menu">
      <div className="side-menu__projects-container">
        <div className="side-menu__workspace-title">
          <CText type="heading-5">IGS Technologies</CText>+
        </div>
        <div className="side-menu__members">
          <div className="side-menu__member"></div>
          <div className="side-menu__member"></div>
          <div className="side-menu__member"></div>
        </div>
        <div className="side-menu__projects">
          {Projects.map((p, i) => {
            return (
              <Link
                to={`project/${i}/board`}
                className="side-menu__project"
                key={i}
              >
                <div
                  style={{
                    backgroundColor: p.color,
                  }}
                  className="side-menu__project--color"
                />
                {p.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNavMenu;
