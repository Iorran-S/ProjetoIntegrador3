// components/PrivateRoute.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  // Verifica apenas se existe um token (não valida JWT)
  const token = localStorage.getItem('authToken');
  return token ? <Outlet /> : <Navigate to="/admin" replace />;
};

export default PrivateRoute;