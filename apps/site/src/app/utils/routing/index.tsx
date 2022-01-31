import { AppRoute } from "@patronage-web/shared";
import { Suspense } from "react";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";

const createChildrenRoute = (route: AppRoute, component: JSX.Element): RouteObject => {
  return { path: route, element: component };
};

const createRoute = (
  route: AppRoute,
  component: JSX.Element,
  fallback: NonNullable<React.ReactNode> | null,
  children?: RouteObject[]
): RouteObject => {
  return {
    path: route,
    element: (
      <Suspense fallback={fallback}>
        {component}
        <Outlet />
      </Suspense>
    ),
    children
  };
};

export const Routing: React.FC = () => {
  return useRoutes([
    createRoute(AppRoute.Home, <h1>Home page</h1>, <h1>...loading</h1>),
    createRoute(AppRoute.Dashboard, <h1>Dashboard page</h1>, <h1>...loading</h1>),
    createRoute(AppRoute.Presentation, <h1>Presentation page</h1>, <h1>...loading</h1>, [
      createChildrenRoute(AppRoute.AddPresentation, <h1>Add presentation page</h1>),
      createChildrenRoute(AppRoute.EditPresentation, <h1>Edit presentation page</h1>),
      createChildrenRoute(AppRoute.PresentationForExternalUser, <h1>Page for external user</h1>)
    ]),
    createRoute(AppRoute.NotFound, <h1>You should not be here...</h1>, <h1>...loading</h1>)
  ]);
};
