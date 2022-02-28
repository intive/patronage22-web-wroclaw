import { AppRouteType, BaseRoute, FeedbackRoute, getAppRoute } from "@patronage-web/shared";
import { generatePath } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface RoutesConfigProps {
  targetRoute: AppRouteType;
  hasIdParam: boolean;
}

const routesConfig: RoutesConfigProps[] = [{ targetRoute: BaseRoute.Home, hasIdParam: false }];

describe("Base routing", () => {
  routesConfig.forEach(config => {
    const { hasIdParam, targetRoute } = config;
    const route = getAppRoute(targetRoute);
    const path = hasIdParam ? generatePath(route, { id: uuidv4() }) : route;

    it(`should display <${targetRoute}> page`, () => {
      cy.visit(path).url().should("include", path);
    });
  });

  it(`should display <${BaseRoute.NotFound}> page`, () => {
    const route = getAppRoute(FeedbackRoute.Dashboard);
    cy.visit(`${route}/something`).url().should("include", `${route}/something`);
  });
});
