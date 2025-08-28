
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Research from './components/Research';
import AboutMe from './components/AboutMe';
import Publications from './components/Publications';
import Projects from './components/Projects';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const App: React.FC = () => {
  return (
    <div className="bg-[#0f0f1a] text-slate-200 overflow-x-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Custom Styles */}
      <style>{`
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
        /* Shine effect for buttons */
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        .btn-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: all 650ms;
        }
        .btn-shine:hover::before {
          left: 100%;
        }
        /* Custom focus outline for accessibility */
        :focus-visible {
          outline: 2px solid #6366f1;
          outline-offset: 2px;
          border-radius: 0.5rem;
        }
      `}</style>
      
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Research />
        <AboutMe />
        <Publications />
        <Projects />
        <AiAssistant />
      </main>
      <Footer />
    </div>
  );
};

export default App;