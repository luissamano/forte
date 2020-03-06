import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.set_Login:
      return {
        ...state,
        login: {
          ...state.login,
          [action.name]: action.payload,
        },
      };
    case actions.loginSuccess:
      return {
        ...state,
        responseLogin: action.payload,
      };
    case actions.loginError:
      return {
        ...state,
        errorLogin: true,
        responseLogin: action.payload,
      };

    default:
      break;
  }
};
