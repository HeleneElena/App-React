import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header} >
      <div> 
        <img src="https://www.logolynx.com/images/logolynx/9e/9edc5d3290531039b78c53874fdcf740.png" alt="logo" />
      </div>
    </div>
  )
}

export default Header;