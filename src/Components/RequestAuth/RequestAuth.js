import React from 'react';
import { useLocation, Navigate, Outlet } from "react-router-dom";

function RequestAuth ({ isAuthenticated }) {
    const location = useLocation();
    // https://www.youtube.com/watch?v=oUZjO00NkhY
    // https://github.com/gitdagray/react_protected_routes/blob/main/src/components/RequireAuth.js
  return (isAuthenticated ? <Outlet/> : <Navigate to="/login" state={{ from: location }} replace />)
};


export default RequestAuth;