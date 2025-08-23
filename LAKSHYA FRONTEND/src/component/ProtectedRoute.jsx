import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{ from: location, message: "Please log in or sign up to access this page." }}
        replace
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
