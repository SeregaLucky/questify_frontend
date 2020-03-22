import { connect } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import isAuth from '../../redux/auth/authSelectors';
import Header from './Header';

const mapStateToProps = state => ({ user: isAuth(state) });

const mapDispatchToProps = {
  onLogOut: authOperations.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
