import { ThunkDispatch } from "redux-thunk";
import { DispatcherProps } from "../types";
import { NotificationProps } from "../../components/notification/Notification";
import { v4 as uuid } from "uuid";

/**
 * Type declarations
 * ---------------------------------------------------------------------
 */

export interface Notification extends NotificationProps {
  id: string;
}

export interface StateProps {
  data: Notification[];
}

/**
 * Initial State
 * ---------------------------------------------------------------------
 */

export const initialState: StateProps = {
  data: [],
};

/**
 * Action types
 * ---------------------------------------------------------------------
 */

enum Action {
  ADD_NOTIFICATION = "notification/add",
  REMOVE_NOTIFICATION = "notification/remove",
}

interface ActionProps {
  type: Action;
  payload: StateProps;
}

/**
 * Reducer
 * ---------------------------------------------------------------------
 */

export const reducer = (
  state: StateProps = initialState,
  action: ActionProps
): StateProps => {
  switch (action.type) {
    case Action.ADD_NOTIFICATION: {
      return (state = {
        ...state,
        data: [...state.data, action.payload.data[0]],
      });
    }
    case Action.REMOVE_NOTIFICATION: {
      return (state = {
        ...state,
        data: state.data.filter((d) => d.id !== action.payload.data[0].id),
      });
    }
    default: {
      return state;
    }
  }
};

/**
 * Actions
 * ---------------------------------------------------------------------
 */

export const addNotificationAction =
  (text: string, type: Notification["type"], autoClose?: boolean) =>
  (
    dispatch: ThunkDispatch<StateProps, void, DispatcherProps<StateProps>>
  ): void => {
    const notification: Notification = {
      id: uuid(),
      text,
      type,
    };

    dispatch({
      type: Action.ADD_NOTIFICATION,
      payload: {
        data: [notification],
      },
    });

    if (autoClose) {
      setTimeout(() => {
        dispatch(removeNotificationAction(notification));
      }, 7000);
    }
  };

export const removeNotificationAction =
  (notification: Notification) =>
  (
    dispatch: ThunkDispatch<StateProps, void, DispatcherProps<StateProps>>
  ): void => {
    dispatch({
      type: Action.REMOVE_NOTIFICATION,
      payload: {
        data: [notification],
      },
    });
  };
