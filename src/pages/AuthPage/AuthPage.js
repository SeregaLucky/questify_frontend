import React from 'react';
import styles from './AuthPage.module.css';
import AuthForm from '../../components/AuthForm';
const AuthPage = () => {
  return (
    <>
      <h1 className={styles.title}>AuthPage</h1>
      <AuthForm />
    </>
  );
};

export default AuthPage;
