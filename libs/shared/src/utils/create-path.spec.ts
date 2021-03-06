import { Params } from "react-router-dom";

import { AppRouteType, BaseRoute, FeedbackRoute, SupportedLanguage } from "../types";
import { createPath } from "./create-path";
import { isDefaultLanguage } from "./lang-fns";

interface RoutesConfigProps {
  routeParams?: Params;
  targetPage: AppRouteType;
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
    targetPath: "/feedback-external/presentation/qwerty"
  }
];

const searchQueries: Record<string, string> = {
  react: "react",
  "adv%an=": "adv%25an%3D",
  "j$a#v&a": "j%24a%23v%26a",
  "re act": "re+act"
};

describe("createPath generation test", () => {
  routesConfig.forEach(config => {
    Object.values(SupportedLanguage).forEach(lang => {
      const langPath = isDefaultLanguage(lang) ? "" : `?lang=${lang}`;
      it(`should generate proper link for language ${lang}`, () => {
        expect(createPath({ route: config.targetPage, params: config.routeParams, language: lang })).toBe(
          `${config.targetPath}${langPath}`
        );
      });

      it(`should generate proper link for default language`, () => {
        expect(createPath({ route: config.targetPage, params: config.routeParams })).toBe(`${config.targetPath}`);
      });
    });

    Object.keys(searchQueries).forEach(key => {
      it(`should generate proper link for searched phrase ${key} with ${SupportedLanguage.En} language`, () => {
        expect(
          createPath({ route: config.targetPage, params: config.routeParams, language: SupportedLanguage.En, search: key })
        ).toBe(`${config.targetPath}?search=${searchQueries[key]}`);
      });

      it(`should generate proper link for searched phrase ${key} with ${SupportedLanguage.Pl} language`, () => {
        expect(
          createPath({ route: config.targetPage, params: config.routeParams, language: SupportedLanguage.Pl, search: key })
        ).toBe(`${config.targetPath}?lang=pl&search=${searchQueries[key]}`);
      });
    });
  });
});
