import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element, ...rest }) => {
  const accessToken = localStorage.getItem("token");
  return accessToken ? element : <Navigate to="/login1" />;
};
