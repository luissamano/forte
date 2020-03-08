import { actions } from './actions';
import { dateFormat, dateFormat2 } from '../../Utils/dateFormat';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.fetchClientes:
      return {
        ...state,
        loadingClientes: true,
        errorClientes: null,
      };
    case actions.fetchClientesSuccess:
      return {
        ...state,
        loadingClientes: false,
        clientes: action.payload,
        errorClientes: null,
      };
    case actions.fetchClientesError:
      return {
        ...state,
        clientes: [],
        loadingClientes: false,
        errorClientes: action.payload,
      };

    case actions.fetchClienteId:
      return {
        ...state,
        loadingCliente: true,
        errorCliente: null,
      };
    case actions.fetchClienteIdSuccess:
      return {
        ...state,
        loadingCliente: false,
        errorCliente: null,
        cliente: {
          clienteId: action.payload.clienteId,
          nombreCompleto: action.payload.nombreCompleto,
          rfc: action.payload.rfc,
          fechaNacimiento: dateFormat2(action.payload.fechaNacimiento),
          correoElectronico: action.payload.correoElectronico,
          telefonoMovil: action.payload.telefonoMovil,
          domicilio: action.payload.domicilio,
          limiteCredito: action.payload.limiteCredito,
          estatusClienteId: action.payload.estatusClienteId,
        },
      };
    case actions.fetchClienteIdError:
      return {
        ...state,
        cliente: {
          nombreCompleto: '',
          rfc: '',
          fechaNacimiento: '',
          correoElectronico: '',
          telefonoMovil: '',
          domicilio: '',
          limiteCredito: 0,
          estatusClienteId: 1,
        },
        loadingCliente: false,
        errorCliente: action.payload,
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
          fechaNacimiento: dateFormat(action.payload.fechaNacimiento),
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
        saveClienteLoading: true,
        saveClienteError: null,
      };
    case actions.saveClienteSuccess:
      return {
        ...state,
        saveClienteLoading: false,
        saveClienteError: null,
        cliente: {
          nombreCompleto: '',
          rfc: '',
          fechaNacimiento: '',
          correoElectronico: '',
          telefonoMovil: '',
          domicilio: '',
          limiteCredito: 0,
          estatusClienteId: 1,
        },
      };
    case actions.saveClienteError:
      return {
        ...state,
        saveClienteLoading: false,
        saveClienteError: action.payload,
      };

    case actions.updateCliente:
      return {
        ...state,
        updateClienteLoading: true,
        updateClienteError: null,
      };
    case actions.updateClienteSuccess:
      return {
        ...state,
        updateClienteLoading: false,
        updateClienteError: null,
      };
    case actions.updateClienteError:
      return {
        ...state,
        updateClienteLoading: false,
        updateClienteError: action.payload,
      };

    case actions.deleteCliente:
      return {
        ...state,
        deleteClienteLoading: true,
        deleteClienteError: null,
      };
    case actions.deleteClienteSuccess:
      return {
        ...state,
        deleteClienteLoading: false,
        deleteClienteError: null,
      };
    case actions.deleteClienteError:
      return {
        ...state,
        deleteClienteLoading: false,
        deleteClienteError: action.payload,
      };
    default:
      break;
  }
};
