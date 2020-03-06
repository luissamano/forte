import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.fetchClientes:
      return {
        ...state,
        loading: true,
        error: null,
        clientes: action.payload,
      };
    case actions.fetchClientesSuccess:
      return {
        ...state,
        loading: false,
        error: null,
        clientes: action.payload,
      };
    case actions.fetchClientesError:
      return {
        ...state,
        clientes: [],
        loading: false,
        error: action.payload,
      };
    case actions.setReload:
      return {
        ...state,
        reload: !state.reload,
      };
    case actions.setterCliente:
      return {
        ...state,
        cliente: {
          ...state.cliente,
          [action.name]: action.payload,
        },
      };
    case actions.setNewCliente:
      return {
        ...state,
        cliente: {
          nombreCompleto: action.payload.nombreCompleto,
          rfc: action.payload.rfc,
          fechaNacimiento: action.payload.fechaNacimiento,
          correoElectronico: action.payload.correoElectronico,
          telefonoMovil: action.payload.telefonoMovil,
          domicilio: action.payload.domicilio,
          limiteCredito: action.payload.limiteCredito,
          estatusClienteId: action.payload.estatusClienteId,
        },
      };
    case actions.saveCliente:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.saveClienteSuccess:
      return {
        ...state,
        loading: true,
        error: null,
        clientes: {
          nombreCompleto: '',
          rfc: '',
          fechaNacimiento: '',
          correoElectronico: '',
          telefonoMovil: '',
          domicilio: '',
          limiteCredito: 0,
          estatusClienteId: 0,
        },
      };
    case actions.saveClienteError:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      break;
  }
};
