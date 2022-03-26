import React from "react";
import classnames from "classnames";

export type ButtonProps = {
  variant?: "primary" | "success" | "danger";
  size?: "small" | "medium" | "large";
  text?: string;
  handleClick?: () => void;
};

const Button = ({
  variant = "primary",
  size = "medium",
  text,
  handleClick,
}: ButtonProps): React.ReactElement => {
  const coreClass = "btn";
  const cssClasses = classnames(coreClass, {
    [`${coreClass}--${variant}`]: variant,
    [`${coreClass}--${size}`]: size,
  });

  return (
    <button className={cssClasses} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
