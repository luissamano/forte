import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { Button } from 'react-md';

const Header = ({ handleSession }) => {
  return (
    <div style={{ background: '#00838f', color: 'white', padding: '10px' }}>
      <ul class='nav justify-content-end'>
        <li class='nav-item'>
          <Button className={styles.logout} onClick={handleSession}>
            Cerrar Sesion
          </Button>
        </li>
      </ul>
    </div>
  );
};

Header.protoTypes = {
  handleSession: PropTypes.func.isRequired,
};

export default Header;
