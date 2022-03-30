import { AppRouteType, BaseRoute, FeedbackRoute, getAppRoute, Loader, LoaderType } from "@patronage-web/shared";
import { lazy, Suspense, SuspenseProps } from "react";
import { Outlet, RouteObject, useRoutes } from "react-router-dom";

const Homepage = lazy(() => import("../pages/homepage"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const PresentationPage = lazy(() => import("../pages/presentation"));
const AddPresentationPage = lazy(() => import("../pages/add-presentation"));
const EditPresentationPage = lazy(() => import("../pages/edit-presentation"));
const ExternalUserPresentationPage = lazy(() => import("../pages/external-user-presentation"));
const Login = lazy(() => import("../pages/login"));
const NotFoundPage = lazy(() => import("../pages/not-found"));

const createRoute = (
  route: AppRouteType,
  component: JSX.Element,
  fallback: SuspenseProps["fallback"],
  childOnly?: boolean,
  children?: ((fallback: SuspenseProps["fallback"]) => RouteObject)[]
): RouteObject => ({
  path: getAppRoute(route, childOnly),
  element: <Suspense fallback={fallback}>{component}</Suspense>,
  children: children?.length ? children.map(itemFn => itemFn(fallback)) : undefined
});

const createChildrenRoute = (route: AppRouteType, component: JSX.Element) => (fallback: SuspenseProps["fallback"]) =>
  createRoute(route, component, fallback, true);

export const Routing: React.FC = () =>
  useRoutes([
    createRoute(BaseRoute.Home, <Homepage />, <Loader type={LoaderType.Circular} />),
    createRoute(FeedbackRoute.Dashboard, <Dashboard />, <Loader type={LoaderType.Circular} />),
    createRoute(
      FeedbackRoute.Presentation,
      <>
        <PresentationPage />
        <Outlet />
      </>,
      <Loader type={LoaderType.Circular} />,
      false,
      [
        createChildrenRoute(FeedbackRoute.AddPresentation, <AddPresentationPage />),
        createChildrenRoute(FeedbackRoute.EditPresentation, <EditPresentationPage />)
      ]
    ),
    createRoute(FeedbackRoute.ExternalUserPresentation, <ExternalUserPresentationPage />, <Loader type={LoaderType.Circular} />),
    createRoute(BaseRoute.Login, <Login />, <Loader type={LoaderType.Circular} />),
    createRoute(BaseRoute.NotFound, <NotFoundPage />, <Loader type={LoaderType.Circular} />)
  ]);
