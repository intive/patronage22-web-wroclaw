import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* eslint-disable no-param-reassign */
import { SiteSliceName } from "../types";

export interface AuthState {
  isLoading: boolean;
  accessToken: string;
  userLogin: string;
}

const initialState: AuthState = {
  isLoading: false,
  accessToken: "",
  userLogin: ""
};

export type LoginState = Omit<AuthState, "isLoading">;

export const authSlice = createSlice({
  name: SiteSliceName.Auth,
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginState>) => {
      const { accessToken, userLogin } = action.payload;

      return { isLoading: false, accessToken, userLogin };
    },
    logout: () => {
      return initialState;
    },
    startAuth: state => {
      state.isLoading = true;
    },
    finishAuth: state => {
      state.isLoading = false;
    }
  }
});

export const authReducer = authSlice.reducer;
