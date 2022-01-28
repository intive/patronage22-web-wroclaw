import { Navigate, Outlet, Route, Routes } from "react-router-dom";

export enum AppRoute {
  home = "/home",
  dashboard = "/dashboard",
  presentation = "/presentation",
  add = "add",
  edit = "edit/:id",
  external = ":id",
  notFound = "*",
  error = "error"
}

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to={AppRoute.home} />} />
      <Route path={AppRoute.home} element={<h1>Home page</h1>} />
      <Route path={AppRoute.dashboard} element={<h1>Dashboard page</h1>} />
      <Route
        path={AppRoute.presentation}
        element={
          <>
            <h1>Presentation page</h1>
            <Outlet />
          </>
        }
      >
        <Route path={AppRoute.add} element={<h1>Add presentation page</h1>} />
        <Route path={AppRoute.edit} element={<h1>Edit presentation page</h1>} />
        <Route path={AppRoute.external} element={<h1>Page for external user</h1>} />
      </Route>
      <Route path={AppRoute.notFound} element={<Navigate replace to={AppRoute.error} />} />
      <Route path={AppRoute.error} element={<h1>You should not be here...</h1>} />
    </Routes>
  );
};
