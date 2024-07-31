import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Navbar from './components/navbar.js';
import MainDashboard from './pages/mainDashboard.js';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
