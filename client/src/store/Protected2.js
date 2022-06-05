import { Navigate, Outlet } from "react-router";

const Pro2 = () => {
  return localStorage.getItem("logi") == 0 ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default Pro2;
