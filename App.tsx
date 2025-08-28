
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Research from './components/Research';
import Publications from './components/Publications';
import Projects from './components/Projects';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <div className="bg-[#0f0f1a] text-slate-200 overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Custom Keyframe Animations */}
      <style>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
            0% { opacity: 0; transform: translateX(-20px); }
            100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease;
        }
        .animate-pulse-slow {
            animation: pulse 2s infinite;
        }
        .animate-rotate {
            animation: rotate 30s linear infinite;
        }
        /* Custom scrollbar for chat window */
        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(15, 15, 26, 0.5);
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #4f46e5;
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #6366f1;
        }
      `}</style>
      
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Research />
        <Publications />
        <Projects />
        <AiAssistant />
      </main>
      <Footer />
    </div>
  );
};

export default App;