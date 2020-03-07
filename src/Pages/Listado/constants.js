export const initialState = {
  clientes: [],
  cliente: {
    clienteId: 0,
    nombreCompleto: '',
    rfc: '',
    fechaNacimiento: '',
    correoElectronico: '',
    telefonoMovil: '',
    domicilio: '',
    limiteCredito: 0,
    estatusClienteId: 1,
  },
  reload: false,
  loadingClientes: false,
  errorClientes: null,
  loadingCliente: false,
  errorCliente: null,
  saveClienteLoading: false,
  saveClienteError: null,
  deleteClienteLoading: false,
  deleteClienteError: null,
  updateClienteLoading: false,
  updateClienteError: null,
};

export const dialogInitialState = {
  visible: false,
};

export const dialogTypeDefault = 'save';
