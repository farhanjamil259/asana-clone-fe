import classNames from "classnames";
import React from "react";
import CText from "../typography/CText";

export interface NotificationProps {
  type?: "success" | "warning" | "danger";
  text?: string;
  onCancel?: () => void;
}

const Notification = ({
  text,
  type = "success",
  onCancel,
}: NotificationProps): React.ReactElement => {
  const coreClass = "notification";

  return (
    <div
      className={classNames(coreClass, {
        [`${coreClass}--${type}`]: type,
      })}
    >
      <CText>{text}</CText>

      {/* TODO: replace with icon component */}
      <span className="notification__close" onClick={onCancel}>
        X
      </span>
    </div>
  );
};

export default Notification;
