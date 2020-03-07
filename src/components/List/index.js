import React from 'react';
import Loading from '../Loading';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { Button } from 'react-md';

const styles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  marginTop: '.3rem',
};

const List = ({ data, handleDelete, handleUpdate }) => {
  const { row, column } = data;

  if (column === undefined) {
    return <Loading />;
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
            <div style={styles}>
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
      {/* {Object.keys(clientes).map(key => {
        return (
          <div className={styles.item}>
            Id: {clientes[key].clienteId}
            Nombre: {clientes[key].nombreCompleto}
          </div>
        );
      })} */}
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
