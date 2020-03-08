import React, { useContext } from 'react';
import { TextField, DialogContainer, DatePicker, SelectField } from 'react-md';
import { ClienteContext } from './index';

const Formulario = () => {
  const {
    state,
    dialog,
    hideForm,
    saveForm,
    dialogType,
    handleUpdateForm,
    onChange,
  } = useContext(ClienteContext);

  const STATUS_ITEMS = [
    { label: 'Activo', value: 1 },
    { label: 'Inactivo', value: 0 },
  ];

  const actions = [
    {
      secondary: true,
      children: 'Cancelar',
      onClick: () => {
        hideForm();
      },
    },
    {
      primary: true,
      children: 'Guardar',
      onClick: () => {
        dialogType === 'save' ? saveForm() : handleUpdateForm();
      },
    },
  ];

  return (
    <div>
      <DialogContainer
        id='modal'
        visible={dialog.visible}
        title={dialogType === 'save' ? 'Nuevo Cliente' : 'Actualizar Cliente'}
        onHide={hideForm}
        aria-describedby='speed-boost-description'
        actions={actions}
        modal
        width={1000}
      >
        <TextField
          type='text'
          label='Nombre'
          id='nombreCompleto'
          value={state.cliente.nombreCompleto}
          onChange={onChange('nombreCompleto')}
        />
        <TextField
          label='RFC'
          className='mx-2'
          type='text'
          id='rfc'
          value={state.cliente.rfc}
          onChange={onChange('rfc')}
        />

        <DatePicker
          id='fechaNacimiento'
          inline
          autoOk
          fullWidth={true}
          label='Nacimiento'
          value={state.cliente.fechaNacimiento}
          onChange={onChange('fechaNacimiento')}
        />

        <TextField
          label='Correo'
          className='md-cell'
          type='text'
          id='correoElectronico'
          value={state.cliente.correoElectronico}
          onChange={onChange('correoElectronico')}
        />

        <TextField
          label='Telefono'
          className='mx-2'
          type='text'
          id='telefonoMovil'
          value={state.cliente.telefonoMovil}
          onChange={onChange('telefonoMovil')}
        />

        <TextField
          label='Domicilio'
          className='mx-2'
          type='text'
          id='domicilio'
          value={state.cliente.domicilio}
          onChange={onChange('domicilio')}
        />

        <TextField
          label='Credito'
          className='mx-2'
          type='number'
          id='limiteCredito'
          value={state.cliente.limiteCredito}
          onChange={onChange('limiteCredito')}
        />
        <SelectField
          id='estatusClienteId'
          label='Estatus'
          placeholder='Estatus cliente ID'
          className='md-cell'
          menuItems={STATUS_ITEMS}
          position={SelectField.Positions.BELOW}
          value={state.cliente.estatusClienteId}
          onChange={onChange('estatusClienteId')}
        />
      </DialogContainer>
    </div>
  );
};

export default Formulario;
