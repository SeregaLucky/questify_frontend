import React from 'react';
import * as style from './Header.module.css';
import { Link, Redirect } from 'react-router-dom';

import cubok from './../../assets/icons/cubok.png';
import logout_icon from './../../assets/icons/logout_icon.png';
import { routes } from '../../routes';

function Header({ user, onLogOut }) {
  return user ? (
    <div className={style.fluid}>
      <div className={style.container}>
        {/* Logo */}
        <Link className={style.logo_link}>Questify</Link>

        {/* Name */}
        <div className={style.user}>
          <p className={style.firstLetter}>{user[0]}</p>
          {/* <p className={style.firstLetter}>s</p> */}
          <p className={style.name}>{user}</p>
        </div>

        {/* Future */}
        <div className={style.icon}>
          <div className={style.img_wrp}>
            <img src={cubok} alt="cubok" className={style.img} />
          </div>

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
