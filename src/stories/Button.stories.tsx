import React from "react";
import { Meta } from "@storybook/react";
import { templateForComponent } from "./Helpers";

import MyButton, { ButtonProps } from "../components/buttons/Button";

/**
 * Initialize meta data for component story
 */
const meta: Meta = {
  title: "General/Buttons",
  component: MyButton,
  argTypes: { handleClick: { action: "handleClick" } },
};

/**
 * Create template to create multiple variants of the component
 */
const Template = templateForComponent(MyButton);

//Button color variants
export const Button = Template({ variant: "primary", text: "Click Me" });

export const ButtonStories = (): React.ReactElement => {
  const variants: ButtonProps["variant"][] = ["primary", "success", "danger"];

  const sizes: ButtonProps["size"][] = ["small", "medium", "large"];

  return (
    <>
      <div
        style={{
          marginBottom: 16,
        }}
      >
        {sizes.map((s, i) => {
          return <MyButton key={i} size={s} text="Click Me" />;
        })}
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        {variants.map((v, i) => {
          return <MyButton key={i} variant={v} text="Click Me" />;
        })}
      </div>
    </>
  );
};

ButtonStories.story = {
  name: "Variants",
};

export default meta;
