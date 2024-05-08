import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Nav from './components/Nav';

const App = () => {
    return (
        <Router>
            <>
                <Nav />
                <Routes></Routes>
            </>
            <Main />
        </Router>
    );
};

export default App;
