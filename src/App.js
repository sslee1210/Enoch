import React, { useState, useEffect } from 'react';
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
import Electronics from './components/Product/Electronics';
import Etc from './components/Product/Etc';
import Footer from './components/Subpage/Footer';
import NewsDetail from './components/Community/NewsDetail';

const TopNavLayout = ({ children }) => (
    <div>
        <TopNav />
        {children}
    </div>
);

const NavBarLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile ? (
        <TopNavLayout>{children}</TopNavLayout>
    ) : (
        <div style={{ display: 'flex', height: '100vh' }}>
            <NavBar />
            <div style={{ flex: 1 }}>
                {children}
                <Footer />
            </div>
        </div>
    );
};

const App = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <TopNavLayout>
                            <Main />
                            <Footer />
                        </TopNavLayout>
                    }
                />
                <Route
                    path="/about/*"
                    element={
                        <NavBarLayout>
                            <Routes>
                                <Route path="/intro" element={<About />} />
                                <Route path="/history" element={<History />} />
                                <Route path="/global" element={<Global />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                            <Footer />
                        </NavBarLayout>
                    }
                />
                <Route
                    path="/community/*"
                    element={
                        <NavBarLayout>
                            <Routes>
                                <Route path="news" element={<News />} />
                                <Route path="news/:id" element={<NewsDetail />} />
                                <Route path="qna" element={<Qna />} />
                            </Routes>
                            <Footer />
                        </NavBarLayout>
                    }
                />
                <Route
                    path="/support/*"
                    element={
                        <NavBarLayout>
                            <Routes>
                                <Route path="" element={<Support />} />
                                <Route path="/guide" element={<Guide />} />
                            </Routes>
                            <Footer />
                        </NavBarLayout>
                    }
                />
                <Route
                    path="/product/*"
                    element={
                        <TopNavLayout>
                            <Routes>
                                <Route path="/robot" element={<Robot />} />
                                <Route path="/pc" element={<Pc />} />
                                <Route path="/living" element={<Living />} />
                                <Route path="/Electronics" element={<Electronics />} />
                                <Route path="/etc" element={<Etc />} />
                            </Routes>
                        </TopNavLayout>
                    }
                />
            </Routes>
        </>
    );
};

export default App;
