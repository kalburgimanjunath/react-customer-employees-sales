import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Customers, Employees, Sales } from './pages';
import { Navbar } from './components/';
export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/customers" element={<Customers />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}
