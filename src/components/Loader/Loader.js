import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const loaderSpinner = () => {
  return <Loader type="TailSpin" color="#somecolor" height={80} width={80} />;
};

export default loaderSpinner;
