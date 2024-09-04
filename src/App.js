import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import MainDashboard from './pages/mainDashboard.js';
import MiniGame from './components/MiniGames.js';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/games" element={<MiniGame />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
