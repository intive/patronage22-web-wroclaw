import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* eslint-disable no-param-reassign */
import { SiteSliceName } from "../types";

export interface AuthState {
  auth: {
    isLoading: boolean;
    accessToken: string;
    user: {
      login: string;
      isLogged: boolean;
    };
  };
}

const initialState: AuthState = {
  auth: {
    isLoading: false,
    accessToken: "",
    user: {
      login: "",
      isLogged: false
    }
  }
};

export interface LoginState {
  accessToken: string;
  user: {
    login: string;
  };
}

export const authSlice = createSlice({
  name: SiteSliceName.Auth,
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<LoginState>) => {
      const {
        accessToken,
        user: { login }
      } = action.payload;

      state.auth = { isLoading: false, accessToken, user: { login, isLogged: true } };
    },
    logoutUser: state => {
      state.auth = initialState.auth;
    },
    startLoading: state => {
      state.auth = { ...state.auth, isLoading: true };
    },
    stopLoading: state => {
      state.auth = { ...state.auth, isLoading: false };
    }
  }
});

export const authReducer = authSlice.reducer;
