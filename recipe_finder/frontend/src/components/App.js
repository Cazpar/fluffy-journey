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
                <Routes>
                    <Route path="/" element={<HomePage /> } />
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                </Routes>
            </Router>
            {/* <HomePage /> */}
        </div>
    );
};

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App />);
