import React from "react";
import { Meta } from "@storybook/react";
import { templateForComponent } from "./Helpers";

import CText, { CTextProps } from "../components/typography/CText";

/**
 * Initialize meta data for component story
 */
const meta: Meta = {
  title: "General/Typography",
  component: CText,
};

/**
 * Create template to create multiple variants of the component
 */
const Template = templateForComponent(CText);

//Typography color variants
export const Text = Template({
  type: "heading-1",
  children: "This is a Typography Component",
});

export const TypographyStories = (): React.ReactElement => {
  const types: CTextProps["type"][] = [
    "heading-1",
    "heading-2",
    "heading-3",
    "heading-4",
    "heading-5",
    "heading-6",
    "paragraph",
  ];

  const colors: CTextProps["color"][] = [
    "primary",
    "success",
    "warning",
    "danger",
    "mute",
    "default",
  ];

  return (
    <div>
      {types.map((t, i) => {
        return (
          <CText key={i} type={t}>
            {t}
          </CText>
        );
      })}

      {colors.map((c, i) => {
        return (
          <CText key={i} type="paragraph" color={c}>
            This is a {c} paragraph
          </CText>
        );
      })}
    </div>
  );
};

TypographyStories.story = {
  name: "All Variants",
};

export default meta;
