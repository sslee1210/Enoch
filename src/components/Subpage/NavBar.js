import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import NavBarStyles from './NavBar.module.css';
import i18n from '../../lacale/i18n';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t } = useTranslation();
    const activeStyle = {
        color: '#f1c40f',
        fontWeight: 'bold',
    };

    const location = useLocation();

    return (
        <div className={NavBarStyles.subnav}>
            <Link to="/" className={NavBarStyles.logo}>
                <img src="/images/enoch 2024 logo.png" alt="로고" />
            </Link>

            <nav>
                <ul className={NavBarStyles.menu}>
                    <li>
                        <NavLink
                            to="/about/intro"
                            className={NavBarStyles.mainMenuItem}
                            style={
                                ['/about/intro', '/about/history', '/about/global', '/about/contact'].includes(
                                    location.pathname
                                )
                                    ? activeStyle
                                    : {}
                            }
                        >
                            About
                        </NavLink>
                        <ol>
                            <li>
                                <NavLink
                                    to="/about/intro"
                                    className={NavBarStyles.subMenuItem}
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    {t('회사 소개')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about/history"
                                    className={NavBarStyles.subMenuItem}
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    HISTORY
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about/global"
                                    className={NavBarStyles.subMenuItem}
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    {t('해외 법인')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about/contact"
                                    className={NavBarStyles.subMenuItem}
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    CONTACT US
                                </NavLink>
                            </li>
                        </ol>
                    </li>

                    <li>
                        <NavLink
                            to="/support"
                            className={NavBarStyles.mainMenuItem}
                            style={['/support', '/support/guide'].includes(location.pathname) ? activeStyle : {}}
                        >
                            Support
                        </NavLink>
                        <ol>
                            <li>
                                <NavLink
                                    to="/support"
                                    className={NavBarStyles.subMenuItem}
                                    style={location.pathname === '/support' ? activeStyle : {}}
                                >
                                    {t('사용설명서')}
                                </NavLink>
                            </li>
                        </ol>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;
