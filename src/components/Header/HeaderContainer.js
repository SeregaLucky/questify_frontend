import { connect } from 'react-redux';
import { showModal } from '../../redux/modal/modalActions';
import authOperations from './../../redux/auth/authOperations';
import auth from './../../redux/auth/authSelectors';
import Header from './Header';

const { isAuth } = auth;

const mapStateToProps = store => ({ user: isAuth(store) });

// const mapDispatchToProps = {
//   onLogOut: authOperations.logoutUser,
//   onModal: dispatch(),
// };

const mapDispatchToProps = dispatch => ({
  onLogOut: () => dispatch(authOperations.logoutUser()),
  onModal: () => dispatch(showModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default connect(mapStateToProps)(Header);
