import { BasePath, FeedbackPath, getAppRoute, Loader, LoaderType, PagePath } from "@patronage-web/shared";
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
  route: PagePath,
  component: JSX.Element,
  fallback: SuspenseProps["fallback"],
  children?: ((fallback: SuspenseProps["fallback"]) => RouteObject)[]
): RouteObject => ({
  path: getAppRoute(route),
  element: <Suspense fallback={fallback}>{component}</Suspense>,
  children: children?.length ? children.map(itemFn => itemFn(fallback)) : undefined
});

const createChildrenRoute = (route: PagePath, component: JSX.Element) => (fallback: SuspenseProps["fallback"]) =>
  createRoute(route, component, fallback);

export const Routing: React.FC = () =>
  useRoutes([
    createRoute(BasePath.Home, <Homepage />, <Loader type={LoaderType.Circular} />),
    createRoute(FeedbackPath.Dashboard, <Dashboard />, <Loader type={LoaderType.Circular} />),
    createRoute(
      FeedbackPath.Presentation,
      <>
        <PresentationPage />
        <Outlet />
      </>,
      <Loader type={LoaderType.Circular} />,
      [
        createChildrenRoute(FeedbackPath.AddPresentation, <AddPresentationPage />),
        createChildrenRoute(FeedbackPath.EditPresentation, <EditPresentationPage />),
        createChildrenRoute(FeedbackPath.ExternalUserPresentation, <ExternalUserPresentationPage />)
      ]
    ),
    createRoute(BasePath.NotFound, <NotFoundPage />, <Loader type={LoaderType.Circular} />)
  ]);
