import { BaseRoute, FeedbackRoute, Loader, LoaderType, Route, ROUTES } from "@patronage-web/shared";
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
  route: Route,
  component: JSX.Element,
  fallback: SuspenseProps["fallback"],
  children?: ((fallback: SuspenseProps["fallback"]) => RouteObject)[]
): RouteObject => ({
  path: route,
  element: <Suspense fallback={fallback}>{component}</Suspense>,
  children: children?.length ? children.map(itemFn => itemFn(fallback)) : undefined
});

const createChildrenRoute = (route: Route, component: JSX.Element) => (fallback: SuspenseProps["fallback"]) =>
  createRoute(route, component, fallback);

export const Routing: React.FC = () =>
  useRoutes([
    createRoute(ROUTES[BaseRoute.Home], <Homepage />, <Loader type={LoaderType.Circular} />),
    createRoute(ROUTES[FeedbackRoute.Dashboard], <Dashboard />, <Loader type={LoaderType.Circular} />),
    createRoute(
      ROUTES[FeedbackRoute.Presentation],
      <>
        <PresentationPage />
        <Outlet />
      </>,
      <Loader type={LoaderType.Circular} />,
      [
        createChildrenRoute(ROUTES[FeedbackRoute.AddPresentation], <AddPresentationPage />),
        createChildrenRoute(ROUTES[FeedbackRoute.EditPresentation], <EditPresentationPage />),
        createChildrenRoute(ROUTES[FeedbackRoute.ExternalUserPresentation], <ExternalUserPresentationPage />)
      ]
    ),
    createRoute(ROUTES[BaseRoute.NotFound], <NotFoundPage />, <Loader type={LoaderType.Circular} />)
  ]);
