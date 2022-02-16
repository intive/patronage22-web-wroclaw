import { AppRoute, Loader, LoaderType } from "@patronage-web/shared";
import { lazy, Suspense, SuspenseProps } from "react";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";

const Homepage = lazy(() => import("../pages/homepage"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const PresentationPage = lazy(() => import("../pages/presentation"));
const AddPresentationPage = lazy(() => import("../pages/add-presentation"));
const EditPresentationPage = lazy(() => import("../pages/edit-presentation"));
const ExternalUserPresentationPage = lazy(() => import("../pages/external-user-presentation"));
const NotFoundPage = lazy(() => import("../pages/not-found"));

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
    createRoute(AppRoute.Home, <Homepage />, <Loader type={LoaderType.Circular} />),
    createRoute(AppRoute.Dashboard, <Dashboard />, <Loader type={LoaderType.Circular} />),
    createRoute(
      AppRoute.Presentation,
      <>
        <PresentationPage />
        <Outlet />
      </>,
      <Loader type={LoaderType.Circular} />,
      [
        createChildrenRoute(AppRoute.AddPresentation, <AddPresentationPage />),
        createChildrenRoute(AppRoute.EditPresentation, <EditPresentationPage />),
        createChildrenRoute(AppRoute.ExternalUserPresentation, <ExternalUserPresentationPage />)
      ]
    ),
    createRoute(AppRoute.NotFound, <NotFoundPage />, <Loader type={LoaderType.Circular} />)
  ]);
