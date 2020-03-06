import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.moudle.css';

const ErrorMsg = ({ errorMsg }) => {
  return <h1 className={styles.msg}>{errorMsg}</h1>;
};

ErrorMsg.defaultProps = {
  errorMsg: 'Error',
};

ErrorMsg.propTypes = {
  errorMsg: PropTypes.string,
};

export default ErrorMsg;
