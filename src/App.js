import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import NavBar from './components/Subpage/NavBar';
import TopNav from './components/Main/TopNav';
import About from './components/About/About';
import History from './components/About/History';
import Global from './components/About/Global';
import Contact from './components/About/Contact';
import News from './components/Community/News';
import Qna from './components/Community/Qna';
import Support from './components/Support/Support';
import Guide from './components/Support/Guide';
import Robot from './components/Product/Robot';
import Pc from './components/Product/Pc';
import Living from './components/Product/Living';
import Appliance from './components/Product/Appliance';
import Etc from './components/Product/Etc';
import Footer from './components/Subpage/Footer';

const TopNavLayout = ({ children }) => (
    <div style={{ height: '100vh' }}>
        <TopNav />
        {children}
    </div>
);

const NavBarLayout = ({ children }) => (
    <div style={{ display: 'flex', height: '100vh' }}>
        <NavBar />
        {children}
    </div>
);

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/Enoch"
                    element={
                        <TopNavLayout>
                            <Main />
                            <Footer />
                        </TopNavLayout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <NavBarLayout>
                            <About />
                            <Footer />
                        </NavBarLayout>
                    }
                />
                <Route
                    path="/history"
                    element={
                        <NavBarLayout>
                            <History />
                            <Footer />
                        </NavBarLayout>
                    }
                />
                <Route
                    path="/global"
                    element={
                        <NavBarLayout>
                            <Global />
                            <Footer />
                        </NavBarLayout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <NavBarLayout>
                            <Contact />
                            <Footer />
                        </NavBarLayout>
                    }
                />
                <Route
                    path="/community"
                    element={
                        <NavBarLayout>
                            <News />
                            <Footer />
                        </NavBarLayout>
                    }
                />
                <Route
                    path="/qna"
                    element={
                        <NavBarLayout>
                            <Qna />
                            <Footer />
                        </NavBarLayout>
                    }
                />
                <Route
                    path="/guide"
                    element={
                        <NavBarLayout>
                            <Guide />
                            <Footer />
                        </NavBarLayout>
                    }
                />
                <Route
                    path="/support"
                    element={
                        <NavBarLayout>
                            <Support />
                            <Footer />
                        </NavBarLayout>
                    }
                />
                <Route
                    path="/robot"
                    element={
                        <TopNavLayout>
                            <Robot />
                        </TopNavLayout>
                    }
                />
                <Route
                    path="/pc"
                    element={
                        <TopNavLayout>
                            <Pc />
                        </TopNavLayout>
                    }
                />
                <Route
                    path="/living"
                    element={
                        <TopNavLayout>
                            <Living />
                        </TopNavLayout>
                    }
                />
                <Route
                    path="/appliance"
                    element={
                        <TopNavLayout>
                            <Appliance />
                        </TopNavLayout>
                    }
                />
                <Route
                    path="/etc"
                    element={
                        <TopNavLayout>
                            <Etc />
                        </TopNavLayout>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
