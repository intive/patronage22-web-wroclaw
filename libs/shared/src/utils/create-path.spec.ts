import { Params } from "react-router-dom";

import { PAGE_PATHS } from "../constants";
import { AppRoute, BaseRoute, FeedbackRoute, SupportedLanguage } from "../types";
import { createPath } from "./create-path";

interface RoutesConfigProps {
  routeParams?: Params;
  targetPage: AppRoute;
  targetPath: string;
}
const routesConfig: RoutesConfigProps[] = [
  {
    routeParams: { id: "qwerty" },
    targetPage: FeedbackRoute.EditPresentation,
    targetPath: "/feedback/presentation/edit/qwerty"
  },
  {
    targetPage: BaseRoute.Home,
    targetPath: "/"
  },
  {
    targetPage: FeedbackRoute.Dashboard,
    targetPath: "/feedback/dashboard"
  },
  {
    targetPage: FeedbackRoute.Presentation,
    targetPath: "/feedback/presentation"
  },
  {
    targetPage: FeedbackRoute.AddPresentation,
    targetPath: "/feedback/presentation/add"
  },
  {
    routeParams: { id: "qwerty" },
    targetPage: FeedbackRoute.ExternalUserPresentation,
    targetPath: "/feedback/presentation/qwerty"
  }
];

describe("createPath generation test", () => {
  routesConfig.forEach(config => {
    Object.values(SupportedLanguage).forEach(lang => {
      const langPath = lang === SupportedLanguage.En ? "" : `?lang=${lang}`;
      it(`should generate proper link for language ${lang}`, () => {
        expect(createPath(PAGE_PATHS[config.targetPage], config.routeParams, lang)).toBe(`${config.targetPath}${langPath}`);
      });

      it(`should generate proper link for default language`, () => {
        expect(createPath(PAGE_PATHS[config.targetPage], config.routeParams)).toBe(`${config.targetPath}`);
      });
    });
  });
});
