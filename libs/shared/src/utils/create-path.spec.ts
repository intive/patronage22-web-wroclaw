import { Params } from "react-router-dom";

import { PAGE_PATHS } from "../constants";
import { PagePath, SupportedLanguage } from "../types";
import { createPath } from "./create-path";

interface RoutesConfigProps {
  routeParams?: Params;
  targetPage: PagePath;
  targetPath: string;
}
const routesConfig: RoutesConfigProps[] = [
  {
    routeParams: { id: "qwerty" },
    targetPage: PagePath.EditPresentation,
    targetPath: "/presentation/edit/qwerty"
  },
  {
    targetPage: PagePath.Home,
    targetPath: "/"
  },
  {
    targetPage: PagePath.Dashboard,
    targetPath: "/dashboard"
  },
  {
    targetPage: PagePath.Presentation,
    targetPath: "/presentation"
  },
  {
    targetPage: PagePath.AddPresentation,
    targetPath: "/presentation/add"
  },
  {
    routeParams: { id: "qwerty" },
    targetPage: PagePath.ExternalUserPresentation,
    targetPath: "/presentation/qwerty"
  }
];

const searchQueries = ["react", "adv%an=", "j$a#v&a"];

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

    searchQueries.forEach(querystring => {
      const espectedQueryString = encodeURIComponent(querystring);
      it(`should generate proper link for searched phrase ${querystring} with "en" language`, () => {
        expect(createPath(PAGE_PATHS[config.targetPage], config.routeParams, "en", querystring)).toBe(
          `${config.targetPath}?search=${espectedQueryString}`
        );
      });

      it(`should generate proper link for searched phrase ${querystring} with "pl" language`, () => {
        expect(createPath(PAGE_PATHS[config.targetPage], config.routeParams, "pl", querystring)).toBe(
          `${config.targetPath}?lang=pl&search=${espectedQueryString}`
        );
      });
    });
  });
});
