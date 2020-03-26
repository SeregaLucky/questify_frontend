import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../routes';
import AuthPage from '../pages/AuthPage/AuthPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';

import tasksOperations from '../redux/tasks/tasksOperations';

class App extends Component {
  componentDidMount() {
    this.props.onGetQuests();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.AUTH_PAGE} component={AuthPage} />

          <Route path={routes.DASHBOARD_PAGE} component={DashboardPage} />

          <Redirect to={routes.AUTH_PAGE} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetQuests: () => dispatch(tasksOperations.getQuestsByUser()),
});

export default connect(null, mapDispatchToProps)(App);
