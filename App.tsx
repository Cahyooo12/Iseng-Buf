import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Analysis from './components/Analysis';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Enforce dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    // Simulate loading time for resources
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-colors duration-500">
        <img
          src="https://uploads.onecompiler.io/43w9rf9r9/447d456ee/P%20DATABASE%20BUF.png"
          alt="Loading Logo"
          className="w-32 h-32 md:w-64 md:h-64 animate-pulse object-contain"
        />
        <div className="w-40 h-1.5 bg-zinc-800 mt-4 rounded-full overflow-hidden">
          <div className="h-full bg-blue-600 animate-[width_2s_ease-in-out_infinite]" style={{ width: '0%' }}></div>
        </div>
        <style>{`
          @keyframes width {
            0% { width: 0%; }
            50% { width: 100%; }
            100% { width: 0%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-black text-slate-100 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;