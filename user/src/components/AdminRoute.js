import React from "react";

import { Route, Navigate } from "react-router-dom";

import { isAuthenticated } from "../helper/auth";

const AdminRoute = ({ element: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthenticated().role === 1 ? (
          <Component {...props} />
        ) : (
          <Navigate to="/signin" />
        )
      }
    />
  );
};

export default AdminRoute;
