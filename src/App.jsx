import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/signup';
import HomePage from './pages/HomePage';

const App = () => {
    return (
        <BrowserRouter className="app">
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;