import { AppRouteType, FeedbackRoute, getAppRoute } from "@patronage-web/shared";
import { generatePath } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface RoutesConfigProps {
  targetRoute: AppRouteType;
  hasIdParam: boolean;
}

const routesConfig: RoutesConfigProps[] = [
  { targetRoute: FeedbackRoute.Presentation, hasIdParam: false },
  { targetRoute: FeedbackRoute.Dashboard, hasIdParam: false },
  { targetRoute: FeedbackRoute.AddPresentation, hasIdParam: false },
  { targetRoute: FeedbackRoute.EditPresentation, hasIdParam: true },
  { targetRoute: FeedbackRoute.ExternalUserPresentation, hasIdParam: true }
];

describe("Base routing", () => {
  routesConfig.forEach(config => {
    const { hasIdParam, targetRoute } = config;
    const route = getAppRoute(targetRoute);
    const path = hasIdParam ? generatePath(route, { id: uuidv4() }) : route;

    it(`should display <${targetRoute}> page`, () => {
      cy.visit(path).url().should("include", path);
    });
  });
});
