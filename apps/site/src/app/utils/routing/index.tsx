import { AppRoute } from "@patronage-web/shared";
import { Navigate, Outlet, useRoutes } from "react-router-dom";

export const Routing: React.FC = () => {
  const element = useRoutes([
    { path: AppRoute.Home, element: <h1>Home page</h1> },
    { path: AppRoute.Dashboard, element: <h1>Dashboard page</h1> },
    {
      path: AppRoute.Presentation,
      element: (
        <>
          <h1>Presentation page</h1>
          <Outlet />
        </>
      ),
      children: [
        { path: AppRoute.Add, element: <h1>Add presentation page</h1> },
        { path: AppRoute.Edit, element: <h1>Edit presentation page</h1> },
        { path: AppRoute.External, element: <h1>Page for external user</h1> }
      ]
    },
    { path: AppRoute.Fallback, element: <Navigate replace to={AppRoute.NotFound} /> },
    { path: AppRoute.NotFound, element: <h1>You should not be here...</h1> }
  ]);

  return element;
};
