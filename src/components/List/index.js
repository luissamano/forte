import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { Button } from 'react-md';

const List = ({ data, handleDelete, handleUpdate }) => {
  const { row, column } = data;

  if (column === undefined) {
    return (
      <Table>
        <thead>
          <tr>
            {row.map(({ title }, idx) => (
              <th key={idx}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr
            style={{ textAlign: 'center', color: 'black' }}
            colSpan={row.length + 1}
          >
            <td>No hay datos que mostrar!</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  return (
    <Table striped>
      <thead>
        <tr>
          {row.map(({ title }, idx) => (
            <th key={idx}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {column.map(item => (
          <tr key={item.clienteId}>
            {row.map(({ key }) => (
              <td key={key}>{item[key]}</td>
            ))}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                marginTop: '.3rem',
              }}
            >
              <Button
                flat
                primary
                // swapTheming
                label='Editar'
                onClick={event => handleUpdate(event, item.clienteId)}
              />
              <Button
                flat
                secondary
                // swapTheming
                label='Eliminar'
                onClick={() => handleDelete(item.clienteId)}
              />
            </div>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

List.propTypes = {
  data: PropTypes.shape({
    row: PropTypes.array.isRequired,
    column: PropTypes.array,
  }),
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default List;
