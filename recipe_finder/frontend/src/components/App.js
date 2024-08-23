import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';
import HomePage from "./HomePage";


const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </div>
    );
};

const container = document.getElementById('app');
const root = createRoot(container); 
root.render(<App />);
