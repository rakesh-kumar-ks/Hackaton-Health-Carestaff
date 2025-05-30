import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import AdminPage from './pages/AdminPage.jsx';

export default function App() {
  const isLoggedIn = true; // TODO: replace with real auth logic

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route
          path="/admin"
          element={isLoggedIn ? <AdminPage /> : <Navigate to="/login" replace />}
        /> */}
        <Route path='/admin' element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}
