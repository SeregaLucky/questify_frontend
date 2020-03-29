import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../routes';
import AuthPage from '../pages/AuthPage/AuthPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import Loader from '../components/Loader';
import loadingSelectors from '../redux/loading/loadingSelectors';
import tasksOperations from '../redux/tasks/tasksOperations';

// console.log(loadingSelectors);

class App extends Component {
  componentDidMount() {
    this.props.onGetQuests();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <BrowserRouter>
        {isLoading && <Loader />}
        <Switch>
          <Route exact path={routes.AUTH_PAGE} component={AuthPage} />

          <Route path={routes.DASHBOARD_PAGE} component={DashboardPage} />

          <Redirect to={routes.AUTH_PAGE} />
        </Switch>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = state => ({
  isLoading: loadingSelectors.isLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onGetQuests: () => dispatch(tasksOperations.getQuestsByUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
