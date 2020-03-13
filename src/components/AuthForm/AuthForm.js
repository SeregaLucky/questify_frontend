import React from 'react';
import styles from './AuthForm.module.css';

export default function AuthForm() {
  return (
    <div className={styles.authFormWrapper}>
      <p className={styles.authFormTitle}>
        Choose your name to sign up or log in
      </p>
      <input type="text" className={styles.authInput} />
      <button className={styles.authButton}>go!</button>
    </div>
  );
}
