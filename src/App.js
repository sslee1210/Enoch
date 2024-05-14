import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import TopNav from './components/Main/TopNav';
import About from './components/About/About';
import History from './components/About/History';
import Global from './components/About/Global';
import Contact from './components/About/Contact';
import As from './components/As/As';
import Qna from './components/As/Qna';
import Support from './components/Support/Support';
import Guide from './components/Support/Guide';

const App = () => {
    return (
        <Router>
            <>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <NavigationWrapper />
                                <Main />
                            </>
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            <>
                                <NavigationWrapper />
                                <About />
                            </>
                        }
                    />
                    <Route
                        path="/history"
                        element={
                            <>
                                <NavigationWrapper />
                                <History />
                            </>
                        }
                    />
                    <Route
                        path="/global"
                        element={
                            <>
                                <NavigationWrapper />
                                <Global />
                            </>
                        }
                    />

                    <Route
                        path="/contact"
                        element={
                            <>
                                <NavigationWrapper />
                                <Contact />
                            </>
                        }
                    />

                    <Route
                        path="/as"
                        element={
                            <>
                                <NavigationWrapper />
                                <As />
                            </>
                        }
                    />

                    <Route
                        path="/qna"
                        element={
                            <>
                                <NavigationWrapper />
                                <Qna />
                            </>
                        }
                    />

                    <Route
                        path="/guide"
                        element={
                            <>
                                <NavigationWrapper />
                                <Guide />
                            </>
                        }
                    />

                    <Route
                        path="/support"
                        element={
                            <>
                                <NavigationWrapper />
                                <Support />
                            </>
                        }
                    />
                </Routes>
            </>
        </Router>
    );
};

const NavigationWrapper = () => {
    let location = useLocation(); // 현재 경로를 가져옴

    // TopNav를 렌더링하지 않을 경로 목록
    const pathsWithoutTopNav = ['/about', '/history', '/global', '/contact', '/as', '/qna', '/guide', '/support'];

    // 현재 경로가 TopNav를 렌더링하지 않을 경로 목록에 속한다면, NavBar만 렌더링
    if (pathsWithoutTopNav.includes(location.pathname)) {
        return <NavBar />;
    } else {
        // 그 외의 경우에는 TopNav와 NavBar 모두 렌더링 (단, 메인 페이지('/')에서는 NavBar를 제외)
        return (
            <>
                <TopNav />
                {location.pathname !== '/' && <NavBar />}
            </>
        );
    }
};

export default App;
