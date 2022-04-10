import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addNotification } from "../data";
import { NotificationType } from "../types";

export const useNotification = () => {
  const dispatch = useDispatch();

  const showSuccess = (message: string) =>
    dispatch(
      addNotification([
        {
          id: uuidv4(),
          type: NotificationType.Success,
          message
        }
      ])
    );

  const showError = (message: string) =>
    dispatch(
      addNotification([
        {
          id: uuidv4(),
          type: NotificationType.Error,
          message
        }
      ])
    );

  return { showSuccess, showError };
};
