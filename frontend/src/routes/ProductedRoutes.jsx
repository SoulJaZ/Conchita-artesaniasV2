import { Navigate } from "react-router-dom";

// RUTA ADMIN
function AdminProtectedRoute({
      children
}){
  // TOKEN
  const token = localStorage.getItem("token");
  // USUARIO
  const userStorage = JSON.parse(localStorage.getItem("user"));

  const
}