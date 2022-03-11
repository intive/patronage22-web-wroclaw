/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NotificationType } from "../../../types";
import { SiteSliceName } from "../types";

export interface NotificationInterface {
  id: string;
  type: NotificationType;
  message: string;
}

export interface NotificationStateInterface {
  items: NotificationInterface[];
}

const initialState: NotificationStateInterface = {
  items: []
};

export const notificationSlice = createSlice({
  name: SiteSliceName.Notification,
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<NotificationInterface[]>) => {
      state.items = [...state.items, ...action.payload];
    },
    removeNotification: (state, action: PayloadAction<NotificationInterface[]>) => {
      state.items = state.items.filter(item => !action.payload.some(element => element.id === item.id));
    }
  }
});

export const notificationReducer = notificationSlice.reducer;
