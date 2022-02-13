import { AppRoute, Loader } from "@patronage-web/shared";
import { lazy, Suspense, SuspenseProps } from "react";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";

const Homepage = lazy(() => import("../pages").then(module => ({ default: module.Homepage })));
const Dashboard = lazy(() => import("../pages").then(module => ({ default: module.Dashboard })));
const PresentationPage = lazy(() => import("../pages").then(module => ({ default: module.PresentationPage })));
const AddPresentationPage = lazy(() => import("../pages").then(module => ({ default: module.AddPresentationPage })));
const EditPresentationPage = lazy(() => import("../pages").then(module => ({ default: module.EditPresentationPage })));
const PresentationForExternalUserPage = lazy(() =>
  import("../pages").then(module => ({ default: module.PresentationForExternalUserPage }))
);
const NotFoundPage = lazy(() => import("../pages").then(module => ({ default: module.NotFoundPage })));

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
    createRoute(AppRoute.Home, <Homepage />, <Loader />),
    createRoute(AppRoute.Dashboard, <Dashboard />, <Loader />),
    createRoute(
      AppRoute.Presentation,
      <>
        <PresentationPage />
        <Outlet />
      </>,
      <Loader />,
      [
        createChildrenRoute(AppRoute.AddPresentation, <AddPresentationPage />),
        createChildrenRoute(AppRoute.EditPresentation, <EditPresentationPage />),
        createChildrenRoute(AppRoute.PresentationForExternalUser, <PresentationForExternalUserPage />)
      ]
    ),
    createRoute(AppRoute.NotFound, <NotFoundPage />, <Loader />)
  ]);
