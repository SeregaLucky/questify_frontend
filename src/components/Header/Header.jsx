import React from 'react';
import * as style from './Header.module.css';
import { Link } from 'react-router-dom';

function Header({ userName = 'Jorem Ipsum' }) {
  return (
    <div className={style.fluid}>
      <div className={style.container}>
        {/* Logo */}
        <Link className={style.logo_link}>Questify</Link>

        {/* Name */}
        <div className={style.user}>
          <div className={style.firstLetter}>{userName[0]}</div>
          <p className={style.name}>{userName}</p>
        </div>

        {/* Future */}
        <div className={style.icon}></div>
      </div>
    </div>
  );
}

export default Header;
