import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NavBarStyles from './NavBar.module.css';

const NavBar = () => {
    const activeStyle = {
        color: 'rgb(8, 71, 8)',
        fontWeight: 'bold',
    };

    const location = useLocation();

    // 상위 메뉴 항목이 활성화되어야 하는지 확인
    const isActiveAbout = ['/about', '/history', '/global', '/contact'].includes(location.pathname);
    const isActiveAs = ['/as', '/qna'].includes(location.pathname);
    const isActiveSupport = ['/support', '/guide'].includes(location.pathname);

    return (
        <div className={NavBarStyles.subnav}>
            <nav>
                <ul className={NavBarStyles.menu}>
                    <li className={NavBarStyles.mainMenuItem}>
                        <NavLink to="/about" style={isActiveAbout ? activeStyle : {}}>
                            About
                        </NavLink>
                        <ol>
                            <li className={NavBarStyles.subMenuItem}>
                                <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : {})}>
                                    회사소개
                                </NavLink>
                            </li>
                            <li className={NavBarStyles.subMenuItem}>
                                <NavLink to="/history" style={({ isActive }) => (isActive ? activeStyle : {})}>
                                    HISTORY
                                </NavLink>
                            </li>
                            <li className={NavBarStyles.subMenuItem}>
                                <NavLink to="/global" style={({ isActive }) => (isActive ? activeStyle : {})}>
                                    해외법인
                                </NavLink>
                            </li>
                            <li className={NavBarStyles.subMenuItem}>
                                <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : {})}>
                                    CONTACT US
                                </NavLink>
                            </li>
                        </ol>
                    </li>
                    <hr />
                    <li className={NavBarStyles.mainMenuItem}>
                        <NavLink to="/as" style={isActiveAs ? activeStyle : {}}>
                            A/S
                        </NavLink>
                        <ol>
                            <li className={NavBarStyles.subMenuItem}>
                                <NavLink to="/as" style={({ isActive }) => (isActive ? activeStyle : {})}>
                                    A/S 접수
                                </NavLink>
                            </li>
                            <li className={NavBarStyles.subMenuItem}>
                                <NavLink to="/qna" style={({ isActive }) => (isActive ? activeStyle : {})}>
                                    자주 묻는 질문
                                </NavLink>
                            </li>
                        </ol>
                    </li>
                    <hr />
                    <li className={NavBarStyles.mainMenuItem}>
                        <NavLink to="/support" style={isActiveSupport ? activeStyle : {}}>
                            Support
                        </NavLink>
                        <ol>
                            <li className={NavBarStyles.subMenuItem}>
                                <NavLink to="/support" style={({ isActive }) => (isActive ? activeStyle : {})}>
                                    Download File
                                </NavLink>
                            </li>
                            <li className={NavBarStyles.subMenuItem}>
                                <NavLink to="/guide" style={({ isActive }) => (isActive ? activeStyle : {})}>
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
