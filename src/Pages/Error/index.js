import React from 'react';
import PropTypes from 'prop-types';
import './styles.moudle.css';

const ErrorMsg = ({ errorMsg }) => {
  return (
    <div class='mx-auto' style={{ width: '600px' }}>
      <h1>{errorMsg}</h1>
    </div>
  );
};

ErrorMsg.defaultProps = {
  errorMsg: 'Error',
};

ErrorMsg.propTypes = {
  errorMsg: PropTypes.string,
};

export default ErrorMsg;
