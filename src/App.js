import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Main from './components/Main/Main';
import NavBar from './components/Subpage/NavBar';
import TopNav from './components/Main/TopNav';
import About from './components/About/About';
import History from './components/About/History';
import Global from './components/About/Global';
import Contact from './components/About/Contact';
import As from './components/As/As';
import Qna from './components/As/Qna';
import Support from './components/Support/Support';
import Guide from './components/Support/Guide';
import Robot from './components/Product/Robot';
import Pc from './components/Product/Pc';
import Living from './components/Product/Living';
import Appliance from './components/Product/Appliance';
import Etc from './components/Product/Etc';
// import Header from './components/Subpage/Header';

const App = () => {
    return (
        <Router>
            <>
                <Routes>
                    <Route
                        path="/Enoch"
                        element={
                            <>
                                <NavigationWrapper />
                                <Main />
                            </>
                        }
                    />

                    {/* <Route
                        path="/header"
                        element={
                            <>
                                <NavigationWrapper />
                                <Header />
                            </>
                        }
                    /> */}

                    <Route
                        path="/about"
                        element={
                            <FlexWrapper>
                                <NavigationWrapper />
                                <About />
                            </FlexWrapper>
                        }
                    />
                    <Route
                        path="/history"
                        element={
                            <FlexWrapper>
                                <NavigationWrapper />
                                <History />
                            </FlexWrapper>
                        }
                    />
                    <Route
                        path="/global"
                        element={
                            <FlexWrapper>
                                <NavigationWrapper />
                                <Global />
                            </FlexWrapper>
                        }
                    />

                    <Route
                        path="/contact"
                        element={
                            <FlexWrapper>
                                <NavigationWrapper />
                                <Contact />
                            </FlexWrapper>
                        }
                    />

                    <Route
                        path="/as"
                        element={
                            <FlexWrapper>
                                <NavigationWrapper />
                                <As />
                            </FlexWrapper>
                        }
                    />

                    <Route
                        path="/qna"
                        element={
                            <FlexWrapper>
                                <NavigationWrapper />
                                <Qna />
                            </FlexWrapper>
                        }
                    />

                    <Route
                        path="/guide"
                        element={
                            <FlexWrapper>
                                <NavigationWrapper />
                                <Guide />
                            </FlexWrapper>
                        }
                    />

                    <Route
                        path="/support"
                        element={
                            <FlexWrapper>
                                <NavigationWrapper />
                                <Support />
                            </FlexWrapper>
                        }
                    />
                    <Route
                        path="/robot"
                        element={
                            <>
                                <NavigationWrapper />
                                <Robot />
                            </>
                        }
                    />

                    <Route
                        path="/pc"
                        element={
                            <>
                                <NavigationWrapper />
                                <Pc />
                            </>
                        }
                    />

                    <Route
                        path="/living"
                        element={
                            <>
                                <NavigationWrapper />
                                <Living />
                            </>
                        }
                    />

                    <Route
                        path="/appliance"
                        element={
                            <>
                                <NavigationWrapper />
                                <Appliance />
                            </>
                        }
                    />

                    <Route
                        path="/etc"
                        element={
                            <>
                                <NavigationWrapper />
                                <Etc />
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

    // NavBar를 렌더링하지 않을 경로 목록
    const pathsWithoutNavBar = ['/robot', '/pc', '/living', '/appliance', '/etc'];

    // TopNav를 렌더링하지 않을 경로 목록
    const pathsWithoutTopNav = ['/about', '/history', '/global', '/contact', '/as', '/qna', '/guide', '/support'];

    // Header 컴포넌트를 렌더링할 경로 목록
    const pathsWithHeader = ['/about', '/history', '/global', '/contact', '/as', '/qna', '/guide', '/support'];

    // Header 컴포넌트를 조건부로 렌더링
    const renderHeader = pathsWithHeader.includes(location.pathname);

    // 현재 경로가 NavBar를 렌더링하지 않을 경로 목록에 속한다면, TopNav만 렌더링 (Header 조건부 포함)
    if (pathsWithoutNavBar.includes(location.pathname)) {
        return (
            <>
                {/* {renderHeader && <Header />} */}
                <TopNav />
            </>
        );
    }

    // 현재 경로가 TopNav를 렌더링하지 않을 경로 목록에 속한다면, NavBar만 렌더링 (Header 조건부 포함)
    if (pathsWithoutTopNav.includes(location.pathname)) {
        return (
            <>
                {/* {renderHeader && <Header />} */}
                <NavBar />
            </>
        );
    }

    // 그 외의 경우에는 TopNav와 NavBar 모두 렌더링 (단, 메인 페이지('/')에서는 NavBar를 제외) (Header 조건부 포함)
    return (
        <>
            {/* {renderHeader && <Header />} */}
            <TopNav />
            {/* 메인 페이지가 아닌 경우 NavBar 추가 */}
            {location.pathname !== '/Enoch' && <NavBar />}
        </>
    );
};

const FlexWrapper = ({ children }) => {
    return <div style={{ display: 'flex', height: '100vh' }}>{children}</div>;
};

export default App;
