import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Scalable from './pages/Scalable';
import NonScalable from './pages/NonScalable';
import './styles/App.css';

export default function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/scalable" className={({ isActive }) => isActive ? 'active' : ''}>
          Scalable
        </NavLink>
        <NavLink to="/non-scalable" className={({ isActive }) => isActive ? 'active' : ''}>
          Non-Scalable
        </NavLink>
      </nav>

      <h1>React Virtualized Demo</h1>

      <Routes>
        <Route path="/scalable" element={<Scalable />} />
        <Route path="/non-scalable" element={<NonScalable />} />
        <Route path="*" element={<Scalable />} /> {/* default route */}
      </Routes>
    </Router>
  );
}
