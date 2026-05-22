import { Navigate } from "react-router-dom";

// ADMIN PROTECTED ROUTE

function AdminProtectedRoute({ children }) {

  const token = localStorage.getItem("token");

  const userData = localStorage.getItem("user");

  const user = userData
    ? JSON.parse(userData)
    : null;

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