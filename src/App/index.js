import React, { useState } from 'react';
import { AuthContext } from './useAuth';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';

import Login from '../Pages/Login';
import Listado from '../Pages/Listado';

import './styles.module.css';

const App = () => {
  const [authToken, setAuthToken] = useState();

  const setToken = res => {
    localStorage.setItem('token', res.token);
    localStorage.setItem('expiration', res.expiration);
    setAuthToken(res);
  };

  return (
    <>
      <AuthContext.Provider value={{ authToken, setAuthToken: setToken }}>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/listado' component={Listado} />
        </Switch>
      </AuthContext.Provider>
    </>
  );
};

export default App;
