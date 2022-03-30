import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../redux";
import { removeNotificationAction } from "../../redux/modules/notification";
import Notification from "./Notification";

const NotificationContainer = (): React.ReactElement => {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state: State) => state);

  return (
    <div className="notifications-container">
      {notifications.data.map((n) => {
        return (
          <Notification
            key={n.id}
            {...n}
            onCancel={(): void => {
              dispatch(removeNotificationAction(n));
            }}
          />
        );
      })}
    </div>
  );
};

export default NotificationContainer;
