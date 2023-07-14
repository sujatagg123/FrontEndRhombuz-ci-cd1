import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();
  const data = useSelector((store) => {
    return store?.user?.data || {};
  });

  return allowedRoles.includes(data.role) ? (
    <Outlet />
  ) : data.token ? (
    <Navigate to={'/unauthorized'} state={{ from: location }} replace />
  ) : (
    <Navigate to={'/login'} state={{ from: location }} replace />
  );
};

RequireAuth.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default RequireAuth;
