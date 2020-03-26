import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';

//auth
import authFormSchema from './validationAuthForm';
import authOperations from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';

import { routes } from '../../routes';

import styles from './AuthForm.module.css';

class AuthForm extends Component {
  render() {
    if (this.props.isAuth) {
      return <Redirect to={routes.DASHBOARD_PAGE} />;
    }
    return (
      <div>
        <Formik
          initialValues={{ nickname: '' }}
          validationSchema={authFormSchema}
          onSubmit={async (nickname, { resetForm }) => {
            this.props.onRegister(nickname);
            resetForm();
          }}
        >
          <Form className={styles.authFormWrapper}>
            <p className={styles.authFormTitle}>
              Choose your name to sign up or log in
            </p>
            <div className={styles.formContainer}>
              <div className={styles.inputWrapper}>
                <Field
                  type="text"
                  name="nickname"
                  className={styles.authInput}
                />
                <ErrorMessage
                  name="nickname"
                  component="p"
                  className={styles.invalidFeedback}
                />
              </div>
              <button type="submit" className={styles.authButton}>
                go!
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: authSelectors.isAuth(state),
});

const mapDispatchToProps = dispatch => ({
  onRegister: credentials => dispatch(authOperations.registerUser(credentials)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
