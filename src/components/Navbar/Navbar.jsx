import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={s.nav} >
        <a className={s.a}>Profile </a>
        <a className={s.a}>Messages </a>
        <a className={s.a}>News </a>
        <a className={s.a}>Music </a>
        <a className={s.a}>Settings </a>
    </div>
  )
}

export default Navbar;

