import React from 'react';
import { useFormik } from 'formik';
import styles from './AuthForm.module.css';

export default function AuthForm() {
  return (
    <div>
      <form className={styles.authFormWrapper}>
        <p className={styles.authFormTitle}>
          Choose your name to sign up or log in
        </p>
        <input type="text" className={styles.authInput} />
        <button className={styles.authButton}>go!</button>
      </form>
    </div>
  );
}
