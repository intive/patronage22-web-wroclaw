import { AppRoute } from "@patronage-web/shared";
import React, { Suspense, SuspenseProps } from "react";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";

const createChildrenRoute = (route: AppRoute, component: JSX.Element): RouteObject => {
  return { path: route, element: component };
};

const createRoute = (
  route: AppRoute,
  component: JSX.Element,
  fallback: SuspenseProps["fallback"],
  children?: RouteObject[]
): RouteObject => {
  let wrappedChildren: RouteObject[] | undefined;
  if (children) {
    wrappedChildren = children.map(child => {
      return {
        path: child.path,
        element: <Suspense fallback={fallback}>{child.element}</Suspense>
      };
    });
  }
  return {
    path: route,
    element: <Suspense fallback={fallback}>{component}</Suspense>,
    children: wrappedChildren
  };
};

export const Routing: React.FC = () => {
  return useRoutes([
    createRoute(AppRoute.Home, <h1>Home page</h1>, <h1>...loading</h1>),
    createRoute(AppRoute.Dashboard, <h1>Dashboard page</h1>, <h1>...loading</h1>),
    createRoute(
      AppRoute.Presentation,
      <>
        <h1>Presentation page</h1>
        <Outlet />
      </>,
      <h1>...loading</h1>,
      [
        createChildrenRoute(AppRoute.AddPresentation, <h1>Add presentation page</h1>),
        createChildrenRoute(AppRoute.EditPresentation, <h1>Edit presentation page</h1>),
        createChildrenRoute(AppRoute.PresentationForExternalUser, <h1>Page for external user</h1>)
      ]
    ),
    createRoute(AppRoute.NotFound, <h1>You should not be here...</h1>, <h1>...loading</h1>)
  ]);
};
