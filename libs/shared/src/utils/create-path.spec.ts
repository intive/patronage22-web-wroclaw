import { Params } from "react-router-dom";

import { PAGE_PATHS } from "../constants";
import { PagePath, SupportedLanguage } from "../types";
import { createPath } from "./create-path";
import { isDefaultLanguage } from "./lang-fns";

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
        expect(createPath(PAGE_PATHS[config.targetPage], config.routeParams, lang)).toBe(`${config.targetPath}${langPath}`);
      });

      it(`should generate proper link for default language`, () => {
        expect(createPath(PAGE_PATHS[config.targetPage], config.routeParams)).toBe(`${config.targetPath}`);
      });
    });

    Object.keys(searchQueries).forEach(key => {
      it(`should generate proper link for searched phrase ${key} with ${SupportedLanguage.En} language`, () => {
        expect(createPath(PAGE_PATHS[config.targetPage], config.routeParams, SupportedLanguage.En, key)).toBe(
          `${config.targetPath}?search=${searchQueries[key]}`
        );
      });

      it(`should generate proper link for searched phrase ${key} with ${SupportedLanguage.Pl} language`, () => {
        expect(createPath(PAGE_PATHS[config.targetPage], config.routeParams, SupportedLanguage.Pl, key)).toBe(
          `${config.targetPath}?lang=pl&search=${searchQueries[key]}`
        );
      });
    });
  });
});
