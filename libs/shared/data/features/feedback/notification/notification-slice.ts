import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { FeedbackSliceName } from "../types";

export interface Notification {
  // type: NotificationType;
  message: string;
}

export interface NotificationStateInterface {
  items: Notification[];
}

const initialState: NotificationStateInterface = {
  items: []
};

export const notificationSlice = createSlice({
  name: FeedbackSliceName.Notification,
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.items = [...state.items, ...action.payload];
    },
    // poprawić z id jak w wersji Kacpra??
    removeNotification: (state, action: PayloadAction<Notification[]>) => {
      // eslint-disable-next-line no-param-reassign
      state.items = state.items.filter(item => !action.payload.some(element => element === item));
    }
  }
});

export const notificationReducer = notificationSlice.reducer;
