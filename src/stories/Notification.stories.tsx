import React from "react";
import { Meta } from "@storybook/react";
import { templateForComponent } from "./Helpers";

import Notification, {
  NotificationProps,
} from "../components/notification/Notification";

/**
 * Initialize meta data for component story
 */
const meta: Meta = {
  title: "General/Notifications",
  component: Notification,
  argTypes: { onCancel: { action: "onCancel" } },
};

/**
 * Create template to create multiple variants of the component
 */
const Template = templateForComponent(Notification);

export const BaseNotification = Template({
  text: "This is a notification",
  type: "success",
});

export const NotificationStories = (): React.ReactElement => {
  const types: NotificationProps["type"][] = ["success", "warning", "danger"];

  return (
    <>
      <div
        style={{
          width: "50%",
        }}
      >
        {types.map((t, i) => {
          return (
            <Notification key={i} text="This is a notification" type={t} />
          );
        })}
      </div>
    </>
  );
};

NotificationStories.story = {
  name: "Variants",
};

export default meta;
