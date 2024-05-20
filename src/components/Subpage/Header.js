import React from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyles from './Header.module.css';

const Header = () => {
    return (
        <div className={HeaderStyles.header}>
            <h1 className={HeaderStyles.logo}>
                <NavLink to="/Enoch">logo</NavLink>
            </h1>
        </div>
    );
};

export default Header;
