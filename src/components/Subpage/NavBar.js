import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import NavBarStyles from './NavBar.module.css';

const NavBar = () => {
    const activeStyle = {
        color: 'blue',
        fontWeight: 'bold',
    };

    const location = useLocation();

    // 상위 메뉴 항목이 활성화되어야 하는지 확인
    const isActiveAbout = ['/about', '/history', '/global', '/contact'].includes(location.pathname);
    const isActiveAs = ['/as', '/qna'].includes(location.pathname);
    const isActiveSupport = ['/support', '/guide'].includes(location.pathname);

    return (
        <div className={NavBarStyles.subnav}>
            <h1>
                <Link to="/Enoch">로고</Link>
            </h1>
            <nav>
                <ul className={NavBarStyles.menu}>
                    <li>
                        <NavLink
                            to="/about"
                            className={NavBarStyles.mainMenuItem}
                            style={isActiveAbout ? activeStyle : {}}
                        >
                            About
                        </NavLink>
                        <ol>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={NavBarStyles.subMenuItem}
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    회사소개
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/history"
                                    className={NavBarStyles.subMenuItem}
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    HISTORY
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/global"
                                    className={NavBarStyles.subMenuItem}
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    해외법인
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={NavBarStyles.subMenuItem}
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    CONTACT US
                                </NavLink>
                            </li>
                        </ol>
                    </li>

                    <li>
                        <NavLink to="/as" className={NavBarStyles.mainMenuItem} style={isActiveAs ? activeStyle : {}}>
                            A/S
                        </NavLink>
                        <ol>
                            <li>
                                <NavLink
                                    className={NavBarStyles.subMenuItem}
                                    to="/as"
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    A/S 접수
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/qna"
                                    className={NavBarStyles.subMenuItem}
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    자주 묻는 질문
                                </NavLink>
                            </li>
                        </ol>
                    </li>

                    <li>
                        <NavLink
                            to="/support"
                            className={NavBarStyles.mainMenuItem}
                            style={isActiveSupport ? activeStyle : {}}
                        >
                            Support
                        </NavLink>
                        <ol>
                            <li>
                                <NavLink
                                    to="/support"
                                    className={NavBarStyles.subMenuItem}
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    Download File
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/guide"
                                    className={NavBarStyles.subMenuItem}
                                    style={({ isActive }) => (isActive ? activeStyle : {})}
                                >
                                    사용 설명법
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
