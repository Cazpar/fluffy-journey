import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";


const App = () => {
    return (
        <div>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </Router>
        </div>
    );
};

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App />);
