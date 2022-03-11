/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NotificationType } from "../../../types";
import { SiteSliceName } from "../types";

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
}

export interface NotificationState {
  items: Notification[];
}

const initialState: NotificationState = {
  items: []
};

export const notificationSlice = createSlice({
  name: SiteSliceName.Notification,
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification[]>) => {
      state.items = [...state.items, ...action.payload];
    },
    removeNotification: (state, action: PayloadAction<Notification[]>) => {
      state.items = state.items.filter(item => !action.payload.some(element => element.id === item.id));
    }
  }
});

export const notificationReducer = notificationSlice.reducer;
