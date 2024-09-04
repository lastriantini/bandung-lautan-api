import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import MainDashboard from './pages/mainDashboard.js';
import MiniGame from './components/MiniGames.js';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/games" element={<MiniGame />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
