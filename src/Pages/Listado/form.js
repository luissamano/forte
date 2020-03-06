import React, { useContext } from 'react';
import { TextField, DialogContainer, DatePicker } from 'react-md';
import { ClienteContext } from './index';

const Formulario = () => {
  const { dialog, hideForm, saveForm, onChange } = useContext(ClienteContext);

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
      children: 'Guaradar',
      onClick: () => {
        saveForm();
      },
    },
  ];

  return (
    <div>
      <DialogContainer
        id='modal'
        visible={dialog.visible}
        title='Nuevo cliente'
        onHide={hideForm}
        aria-describedby='speed-boost-description'
        actions={actions}
        modal
        width={1000}
      >
        <TextField
          label='Id del cliente'
          className='mx-2'
          type='number'
          id='clienteId'
          onChange={onChange('clienteId')}
        />
        <TextField
          type='text'
          label='Nombre'
          id='nombreCompleto'
          onChange={onChange('nombreCompleto')}
        />
        <TextField
          label='RFC'
          className='mx-2'
          type='text'
          id='rfc'
          onChange={onChange('rfc')}
        />

        <DatePicker
          id='fechaNacimiento'
          inline
          fullWidth={false}
          label='Nacimiento'
          type='text'
          onChange={onChange('fechaNacimiento')}
        />

        <TextField
          label='Correo'
          className='mx-2'
          type='text'
          id='correoElectronico'
          onChange={onChange('correoElectronico')}
        />

        <TextField
          label='Telefono'
          className='mx-2'
          type='text'
          id='telefonoMovil'
          onChange={onChange('telefonoMovil')}
        />

        <TextField
          label='Domicilio'
          className='mx-2'
          type='text'
          id='domicilio'
          onChange={onChange('domicilio')}
        />

        <TextField
          label='Credito'
          className='mx-2'
          type='number'
          id='limiteCredito'
          onChange={onChange('limiteCredito')}
        />
      </DialogContainer>
    </div>
  );
};

export default Formulario;
