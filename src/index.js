import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { store, persistor } from './redux/store';
import App from './components/App';
import './stylesheet/main.css';
import Loader from './components/Loader';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loader />}>
      <App />
      <ToastContainer />
    </PersistGate>
  </Provider>,

  document.getElementById('root'),
);
