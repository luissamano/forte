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
    estatusClienteId: 0,
  },
  reload: false,
  loading: false,
  error: null,
};

export const dialogInitialState = {
  visible: false,
};
