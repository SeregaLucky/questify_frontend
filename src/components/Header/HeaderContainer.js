import Header from './Header';
import { getNickName } from '../../redux/auth/authSelectors';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import authActions from '../../redux/auth/authActions';

const mapStateToProps = state => ({ userName: getNickName(state) });

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(authActions.logOutSuccess),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
