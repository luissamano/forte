import React, { useState } from 'react';
import { AuthContext } from './useAuth';
import PrivateRoute from './PrivateRoute';
import { Route, Switch, useHistory } from 'react-router-dom';

import Login from '../Pages/Login';
import Error from '../Pages/Error';
import Listado from '../Pages/Listado';

import './styles.module.css';

const App = () => {
  let history = useHistory();
  const [authToken, setAuthToken] = useState();

  const setToken = res => {
    localStorage.setItem('token', res.token);
    localStorage.setItem('expiration', res.expiration);
    setAuthToken(res);
  };

  const logout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <>
      <AuthContext.Provider
        value={{ authToken, setAuthToken: setToken, logout }}
      >
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/listado' component={Listado} />
          <Route path='**' component={Error} />
        </Switch>
      </AuthContext.Provider>
    </>
  );
};

export default App;
