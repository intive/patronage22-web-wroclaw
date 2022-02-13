import { AppRoute, Loader } from "@patronage-web/shared";
import React, { Suspense, SuspenseProps } from "react";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";

const createRoute = (
  route: AppRoute,
  component: JSX.Element,
  fallback: SuspenseProps["fallback"],
  children?: ((fallback: SuspenseProps["fallback"]) => RouteObject)[]
): RouteObject => ({
  path: route,
  element: <Suspense fallback={fallback}>{component}</Suspense>,
  children: children?.length ? children.map(itemFn => itemFn(fallback)) : undefined
});

const createChildrenRoute = (route: AppRoute, component: JSX.Element) => (fallback: SuspenseProps["fallback"]) =>
  createRoute(route, component, fallback);

export const Routing: React.FC = () =>
  useRoutes([
    createRoute(AppRoute.Home, <h1>Home page</h1>, <Loader />),
    createRoute(AppRoute.Dashboard, <h1>Dashboard page</h1>, <Loader />),
    createRoute(
      AppRoute.Presentation,
      <>
        <h1>Presentation page</h1>
        <Outlet />
      </>,
      <Loader />,
      [
        createChildrenRoute(AppRoute.AddPresentation, <h1>Add presentation page</h1>),
        createChildrenRoute(AppRoute.EditPresentation, <h1>Edit presentation page</h1>),
        createChildrenRoute(AppRoute.PresentationForExternalUser, <h1>Page for external user</h1>)
      ]
    ),
    createRoute(AppRoute.NotFound, <h1>You should not be here...</h1>, <h1>...loading</h1>)
  ]);
