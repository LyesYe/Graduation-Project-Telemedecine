import { Navigate, Outlet } from "react-router";

const Pro = () => {
  return localStorage.getItem("logi") != 0 ? <Outlet /> : <Navigate to="/" />;
};

export default Pro;
