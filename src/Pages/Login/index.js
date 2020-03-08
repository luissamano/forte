import React, { useReducer, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { actions } from './actions';
import { reducer } from './reducer';
import { useAuth } from '../../App/useAuth';
import { initialState } from './constants';
import { TextField, Button } from 'react-md';

import axios from 'axios';
import styles from './styles.module.css';

const Login = () => {
  // let history = useHistory();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setAuthToken } = useAuth();

  const setlogin = async () => {
    const { login } = state;
    const { loginSuccess } = actions;

    try {
      const res = await axios.post(
        'http://forteinnovation.mx:8590/api/auth/login',
        login
      );
      dispatch({ type: loginSuccess, payload: res.data.data });
      setLoggedIn(true);
      setAuthToken(res.data.data);
    } catch (error) {
      alert('Algo salio mal, revisa de nuevo las credenciales');
    }
  };

  const setter = name => value => {
    dispatch({ type: actions.set_Login, name, payload: value });
  };

  if (isLoggedIn || localStorage.getItem('token')) {
    return <Redirect to='/listado' />;
  }

  return (
    <div className={styles.form}>
      <TextField id='usuario' label='Usaurio' onChange={setter('usuario')} />

      <TextField
        id='password'
        onChange={setter('password')}
        label='Ingresa tu password'
        type='password'
      />

      <br />
      <Button raised primary label='Entrar' onClick={setlogin} />
    </div>
  );
};

export default Login;
