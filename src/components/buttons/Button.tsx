import React from "react";
import classnames from "classnames";

export type ButtonProps = {
  variant?: "primary" | "success" | "danger";
  size?: "small" | "medium" | "large";
  text?: string;
  rounded?: boolean;
  handleClick?: () => void;
};

const Button = ({
  variant = "primary",
  size = "medium",
  text,
  rounded,
  handleClick,
}: ButtonProps): React.ReactElement => {
  const coreClass = "btn";
  const cssClasses = classnames(coreClass, {
    [`${coreClass}--${variant}`]: variant,
    [`${coreClass}--${size}`]: size,
    [`${coreClass}--rounded`]: rounded,
  });

  return (
    <button className={cssClasses} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
