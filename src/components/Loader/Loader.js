import React from 'react';
import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

const LOADER_ROOT = document.getElementById('loader-root');

const loaderSpinner = () =>
  createPortal(
    <div className={styles.loaderWrapper}>
      <Loader type="Bars" color="#15395A" height={80} width={80} />
    </div>,
    LOADER_ROOT,
  );

export default loaderSpinner;
