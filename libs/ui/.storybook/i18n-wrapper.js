import { Suspense } from "react";
import "./i18n";

export const I18nWrapper = ({ children }) => {
  return <Suspense fallback={<div>...</div>}>{children}</Suspense>;
};
