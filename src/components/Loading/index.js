import React from 'react';
import { CircularProgress } from 'react-md';
import { loading, loadingIcon } from './styles.module.css';

const Loading = () => (
  <div className={loading}>
    <CircularProgress id='ok' className={loadingIcon} />
  </div>
);

export default Loading;
