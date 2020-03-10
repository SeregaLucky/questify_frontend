import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../routes';
import AuthPage from '../pages/AuthPage/AuthPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.AUTH_PAGE} component={AuthPage} />

        <Route path={routes.DASHBOARD_PAGE} component={DashboardPage} />

        <Redirect to={routes.AUTH_PAGE} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
