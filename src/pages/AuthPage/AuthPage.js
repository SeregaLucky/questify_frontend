import React from 'react';
import clsx from 'clsx';

import styles from './AuthPage.module.css';

// import image__1 from '../../assets/images/landing-layer1.png';
// import image__2 from '../../assets/images/landing-layer2.png';

import AuthForm from '../../components/AuthForm';

const AuthPage = () => {
  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.blockWrapper}>
          <h1 className={styles.title}>Questify</h1>
          <p className={styles.desc}>
            Questify will turn your life into a&nbsp;thrilling game full of
            amazing quests and exciting challenges.
          </p>

          <AuthForm />

          {/* <img
            className={clsx(styles.image, styles.image__1)}
            src={image__1}
            alt="Questify 1"
          /> */}
          {/* <img
            className={clsx(styles.image, styles.image__2)}
            src={image__2}
            alt="Questify 2"
          /> */}
          <div className={clsx(styles.rectangle, styles.rectangle__grey)}></div>
          <div className={clsx(styles.rectangle, styles.rectangle__blue)}></div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
