/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NotificationType } from "../../../../types";
import { FeedbackSliceName } from "../types";

export interface NotificationProps {
  id: string;
  type: NotificationType;
  message: string;
}

export interface NotificationStateInterface {
  items: NotificationProps[];
}

const initialState: NotificationStateInterface = {
  items: []
};

export const notificationSlice = createSlice({
  name: FeedbackSliceName.Notification,
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<NotificationProps[]>) => {
      state.items = [...state.items, ...action.payload];
    },
    removeNotification: (state, action: PayloadAction<NotificationProps[]>) => {
      state.items = state.items.filter(item => !action.payload.some(element => element.id === item.id));
    }
  }
});

export const notificationReducer = notificationSlice.reducer;
