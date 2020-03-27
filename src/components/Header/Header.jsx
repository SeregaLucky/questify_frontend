import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { routes } from '../../routes';
import cubok from './../../assets/icons/cubok.png';
import logout_icon from './../../assets/icons/logout_icon.png';
import * as style from './Header.module.css';

function Header({ user, onLogOut, onModal }) {
  return user ? (
    <div className={style.fluid}>
      <div className={style.container}>
        {/* Logo */}
        <Link className={style.logo_link}>Questify</Link>

        {/* Name */}
        <div className={style.user}>
          <p className={style.firstLetter}>{user[0]}</p>
          <p className={style.name}>{user}</p>
        </div>

        {/* Future */}
        <div className={style.icon}>
          <button type="button" className={style.img_wrp} onClick={onModal}>
            <img src={cubok} alt="cubok" className={style.img} />
          </button>

          <button type="button" className={style.btnLogout} onClick={onLogOut}>
            <img src={logout_icon} alt="cubok" className={style.img} />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to={routes.AUTH_PAGE} />
  );
}

export default Header;
