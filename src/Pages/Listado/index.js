import React, { useEffect, useReducer, createContext, useState } from 'react';

import { reducer } from './reducer';
import { actions } from './actions';
import { dateFormat } from '../../Utils/dateFormat';
import { axiosAuth } from '../../Utils/axiosAuth';
import {
  initialState,
  dialogInitialState,
  dialogTypeDefault,
} from './constants';

import Formulario from './form';
import List from '../../components/List';
import Loading from '../../components/Loading';
import ErrorMsg from '../Error';

import styles from './styles.module.css';
import { Button } from 'react-md';

export const ClienteContext = createContext();

const Listado = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [dialog, setDialog] = useState(dialogInitialState);
  const [dialogType, setDialogType] = useState(dialogTypeDefault);

  useEffect(() => {
    const { fetchClientes, fetchClientesError, fetchClientesSuccess } = actions;
    let mounted = true;

    const fetchData = async () => {
      dispatch({ type: fetchClientes });

      try {
        const result = await axiosAuth.get(
          `http://forteinnovation.mx:8590/api/clientes`
        );

        if (mounted) {
          dispatch({ type: fetchClientesSuccess, payload: result.data.data });
        }
      } catch (error) {
        if (mounted) {
          dispatch({ type: fetchClientesError, payload: error });
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [state.reload]);

  const setter = name => value => {
    dispatch({ type: actions.setterCliente, name, payload: value });
  };

  const showForm = () => {
    setDialog({ visible: true });
    setDialogType('save');
  };

  const hideForm = () => {
    setDialog(dialogInitialState);
    dispatch({
      type: actions.setNewCliente,
      payload: {
        nombreCompleto: '',
        rfc: '',
        fechaNacimiento: '',
        correoElectronico: '',
        telefonoMovil: '',
        domicilio: '',
        limiteCredito: 0,
        estatusClienteId: 0,
      },
    });
  };

  const saveForm = async () => {
    const { cliente } = state;
    const {
      saveCliente,
      saveClienteSuccess,
      saveClienteError,
      setReload,
    } = actions;

    const data = {
      nombreCompleto: cliente.nombreCompleto,
      rfc: cliente.rfc,
      fechaNacimiento: dateFormat(cliente.fechaNacimiento),
      correoElectronico: cliente.correoElectronico,
      telefonoMovil: cliente.telefonoMovil,
      domicilio: cliente.domicilio,
      limiteCredito: parseFloat(cliente.limiteCredito),
      estatusClienteId: parseInt(cliente.estatusClienteId),
    };

    dispatch({ type: saveCliente });
    try {
      await axiosAuth.post('http://forteinnovation.mx:8590/api/cliente', data);
      dispatch({ type: saveClienteSuccess });
      dispatch({ type: setReload });
      setDialog(dialogInitialState);
    } catch (error) {
      dispatch({ type: saveClienteError, payload: error });
    }
  };

  const handleDelete = async id => {
    const {
      deleteCliente,
      deleteClienteSuccess,
      deleteClienteError,
      setReload,
    } = actions;

    dispatch({ type: deleteCliente });
    try {
      await axiosAuth.delete(
        `http://forteinnovation.mx:8590/api/cliente/${id}`
      );
      dispatch({ type: deleteClienteSuccess });
      dispatch({ type: setReload });
    } catch (error) {
      dispatch({ type: deleteClienteError, payload: error });
    }
  };

  const handleUpdate = async (event, id) => {
    const {
      fetchClienteId,
      fetchClienteIdSuccess,
      fetchClienteIdError,
    } = actions;

    dispatch({ type: fetchClienteId });

    try {
      const res = await axiosAuth.get(
        `http://forteinnovation.mx:8590/api/cliente/${id}`
      );
      setDialog({ visible: true });
      setDialogType('update');
      dispatch({ type: fetchClienteIdSuccess, payload: res.data.data });
    } catch (error) {
      dispatch({ type: fetchClienteIdError, payload: error });
    }
  };

  const handleUpdateForm = async () => {
    const {
      setReload,
      updateCliente,
      updateClienteSuccess,
      updateClienteError,
    } = actions;
    dispatch({ type: updateCliente });

    const { cliente } = state;

    const data = {
      clienteId: parseInt(cliente.clienteId),
      nombreCompleto: cliente.nombreCompleto,
      rfc: cliente.rfc,
      fechaNacimiento: dateFormat(cliente.fechaNacimiento),
      correoElectronico: cliente.correoElectronico,
      telefonoMovil: cliente.telefonoMovil,
      domicilio: cliente.domicilio,
      limiteCredito: parseFloat(cliente.limiteCredito),
      estatusClienteId: parseInt(cliente.estatusClienteId),
    };

    try {
      await axiosAuth.put(
        `http://forteinnovation.mx:8590/api/cliente/${cliente.clienteId}`,
        data
      );
      dispatch({ type: updateClienteSuccess });
      setDialog({ visible: false });
      dispatch({ type: setReload });
    } catch (error) {
      dispatch({ type: updateClienteError, payload: error });
    }
  };

  const { clientes, loading, error } = state;

  const dataTable = {
    row: [
      { title: 'ID', key: 'clienteId' },
      { title: 'Nombre', key: 'nombreCompleto' },
      { title: 'Correo', key: 'correoElectronico' },
      { title: 'Edad', key: 'edad' },
      { title: 'Credito', key: 'limiteCredito' },
    ],
    column: clientes,
  };

  const showTable = !loading && clientes && !error;

  return (
    <div style={{ background: 'white' }}>
      {loading && <Loading />}
      {error && <ErrorMsg errorMsg='Hubo un error al obtener los datos' />}
      {showTable && (
        <div className={styles.root}>
          <ClienteContext.Provider
            value={{
              state,
              dialog,
              showForm,
              hideForm,
              saveForm,
              dialogType,
              handleDelete,
              handleUpdateForm,
              onChange: setter,
            }}
          >
            <Formulario />
          </ClienteContext.Provider>
          <div className={styles.btn}>
            <Button label='Agregar' onClick={showForm} raised primary />
          </div>
          <div class='table-responsive'>
            <List
              data={dataTable}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </div>
        </div>
      )}
      {/* {error && <ErrorMsg errorMsg='Hubo un error al obtener los datos' />} */}
    </div>
  );
};

export default Listado;
