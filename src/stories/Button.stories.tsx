import { Meta } from "@storybook/react";
import { templateForComponent } from "./Helpers";

import Button from "../components/buttons/Button";

/**
 * Initialize meta data for component story
 */
const meta: Meta = {
  title: "Components/Buttons",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

/**
 * Create template to create multiple variants of the component
 */
const Template = templateForComponent(Button);

//Button color variants
export const Primary = Template({ variant: "primary", text: "Button" });
export const Success = Template({ variant: "success", text: "Button" });
export const Danger = Template({ variant: "danger", text: "Button" });

//Button size variants
export const Small = Template({ size: "small", text: "Button" });
export const Medium = Template({ size: "medium", text: "Button" });
export const Large = Template({ size: "large", text: "Button" });

export default meta;
