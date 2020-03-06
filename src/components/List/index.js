import React from 'react';
import Loading from '../Loading';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import {} from 'react-md';

const List = ({ data }) => {
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
};

export default List;
