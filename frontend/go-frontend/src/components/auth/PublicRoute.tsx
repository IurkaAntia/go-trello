import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const token = localStorage.getItem("token"); // Check if user is logged in

    return token ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default PublicRoute;
