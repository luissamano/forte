import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './useAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('token') && isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

export default PrivateRoute;
