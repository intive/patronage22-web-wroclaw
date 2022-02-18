import { CircularProgress } from "@mui/material";
import { Suspense } from "react";
import "./i18n";

export const I18nWrapper = ({ children }) => {
  return <Suspense fallback={<CircularProgress color='inherit' />}>{children}</Suspense>;
};
