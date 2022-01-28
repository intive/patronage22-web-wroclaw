import { Navigate, Outlet, Route, Routes } from "react-router-dom";

export enum ROUTES {
  home = "/home",
  dashboard = "/dashboard",
  presentation = "/presentation",
  add = "add",
  edit = "edit/:id",
  external = ":id",
  error = "*"
}

export const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate replace to={ROUTES.home} />} />
      <Route path={ROUTES.home} element={<h1>Home page</h1>} />
      <Route path={ROUTES.dashboard} element={<h1>Dashboard page</h1>} />
      <Route
        path={ROUTES.presentation}
        element={
          <>
            <h1>Presentation page</h1>
            <Outlet />
          </>
        }
      >
        <Route path={ROUTES.add} element={<h1>Add presentation page</h1>} />
        <Route path={ROUTES.edit} element={<h1>Edit presentation page</h1>} />
        <Route path={ROUTES.external} element={<h1>Page for external user</h1>} />
      </Route>
      <Route path={ROUTES.error} element={<h1>You should not be here...</h1>} />
    </Routes>
  );
};
