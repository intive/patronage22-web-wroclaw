import { AppState } from "../../../types";

export const selectNotifications = (state: AppState) => state.notification.items;
