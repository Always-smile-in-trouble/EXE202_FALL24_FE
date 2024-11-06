import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element }) => {
  const accessToken = localStorage.getItem("token");
  return accessToken ? element : <Navigate to="/login" />;
};

export const ValidRouteAdmin = ({ element }) => {
  const user = useSelector((store) => store.userLogin);
  const role = user.role || [];
  return role.includes("ADMIN") ? element : <Navigate to="/" />;
};
