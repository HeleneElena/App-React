import React from 'react';
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={s.navbar}>
            <div className={s.nav}> 
                <a href='/profile' className={s.link}> Profile</a>
            </div>
            <div className={s.nav}> 
                <a href='/dialogs' className={s.link}> Messages</a>           
            </div>
            <div className={s.nav}> 
                <a href='/' className={s.link}> News</a>
            </div>
            <div className={s.nav}> 
                <a href='/' className={s.link}> Music</a>
            </div>
            <div className={s.nav}> 
                <a href='/' className={s.link}> Settings</a>
            </div>
        </div>
    )
}

export default Navbar;