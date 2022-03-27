import React from "react";
import classnames from "classnames";

export type ButtonProps = {
  variant?: "primary" | "success" | "danger";
  size?: "small" | "medium" | "large";
  text?: string;
  rounded?: boolean;
  fullWidth?: boolean;
  classNames?: string;
  handleClick?: () => void;
};

const Button = ({
  variant = "primary",
  size = "medium",
  text,
  rounded,
  fullWidth,
  classNames,
  handleClick,
}: ButtonProps): React.ReactElement => {
  const coreClass = "btn";
  const cssClasses = classnames(coreClass, {
    [`${coreClass}--${variant}`]: variant,
    [`${coreClass}--${size}`]: size,
    [`${coreClass}--rounded`]: rounded,
    [`${coreClass}--full-width`]: fullWidth,
  });

  return (
    <button className={`${cssClasses} ${classNames}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
