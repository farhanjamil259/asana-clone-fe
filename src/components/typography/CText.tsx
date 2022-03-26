import React from "react";
import classnames from "classnames";

export type CTextProps = {
  type?:
    | "heading-1"
    | "heading-2"
    | "heading-3"
    | "heading-4"
    | "heading-5"
    | "heading-6"
    | "paragraph"
    | "label";
  color?:
    | "mute"
    | "default"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger";

  children?: React.ReactNode;
};

const generateTag = (type: CTextProps["type"]): string => {
  switch (type) {
    case "heading-1":
      return "h1";
    case "heading-2":
      return "h2";
    case "heading-3":
      return "h3";
    case "heading-4":
      return "h4";
    case "heading-5":
      return "h5";
    case "heading-6":
      return "h6";

    default:
      return "p";
  }
};

const CText = ({
  type = "paragraph",
  color = "default",
  children,
}: CTextProps): React.ReactElement => {
  const coreClass = "text";
  const cssClasses = classnames(coreClass, {
    [`${coreClass}--${type}`]: type,
    [`${coreClass}--${color}`]: color,
  });

  return React.createElement(
    generateTag(type),
    { className: cssClasses },
    children
  );
};

export default CText;
