import { Navigate } from "react-router-dom";

// ADMIN PROTECTED ROUTE
function AdminProtectedRoute({ 
    children 
}) {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    // NO LOGIN
    if (!token) {
        return <Navigate to="/login" />;
    }
    // NO ADMIN
    if (user?.role !== "admin") {
        return <Navigate to="/" />;
    }
    return children;
}
export default AdminProtectedRoute;