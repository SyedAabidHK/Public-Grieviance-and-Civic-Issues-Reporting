import React, { useState } from 'react';

export default function Header({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Gov Strip */}
      <div className="bg-[#0a1931] text-slate-300 text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center text-amber-400 font-medium">
            📢 Citizen Civic Support Cell
          </span>
          <span className="hidden md:inline text-slate-500">|</span>
          <span className="hidden md:inline text-slate-400">Citizen Civic Issue Redressal Portal</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-slate-300">🌐 English</span>
          <span className="hidden sm:inline bg-emerald-800 text-emerald-200 px-2 py-0.5 rounded text-[11px] font-semibold">
            ● System Active
          </span>
        </div>
      </div>

      {/* Main Gov Header */}
      <header className="bg-[#0f2444] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center p-1.5 shadow-md border-2 border-amber-400/40">
                <span className="text-2xl text-[#0f2444]">🏛️</span>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-white font-serif">JanaSeva</h1>
                  <span className="bg-amber-500/20 text-amber-300 text-[11px] font-semibold px-2 py-0.5 rounded border border-amber-500/30">
                    Civic Portal
                  </span>
                </div>
                <p className="text-xs text-slate-300 hidden sm:block">Public Grievance and Civic Issue Reporting System</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === 'home' ? 'bg-[#183b6b] text-white font-semibold' : 'text-slate-200 hover:text-white hover:bg-[#183b6b]/60'
                }`}
              >
                🏠 Home
              </button>
              <button
                onClick={() => handleNavClick('report')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === 'report' ? 'bg-[#183b6b] text-white font-semibold' : 'text-slate-200 hover:text-white hover:bg-[#183b6b]/60'
                }`}
              >
                ➕ Report Issue
              </button>
              <button
                onClick={() => handleNavClick('track')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === 'track' ? 'bg-[#183b6b] text-white font-semibold' : 'text-slate-200 hover:text-white hover:bg-[#183b6b]/60'
                }`}
              >
                🔍 Track Status
              </button>
              <button
                onClick={() => handleNavClick('issues')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                  activeTab === 'issues' ? 'bg-[#183b6b] text-white font-semibold' : 'text-slate-200 hover:text-white hover:bg-[#183b6b]/60'
                }`}
              >
                📋 Public Feed
              </button>
            </nav>

            {/* Action Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleNavClick('report')}
                className="bg-amber-500 hover:bg-amber-600 text-[#0f2444] font-bold px-3.5 py-2 rounded-md text-xs sm:text-sm shadow-md transition"
              >
                📢 Report Now
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white p-2 text-xl focus:outline-none"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a1931] px-4 pt-2 pb-4 space-y-1 border-t border-slate-700">
            <button
              onClick={() => handleNavClick('home')}
              className="w-full text-left px-3 py-2 rounded text-sm text-white font-medium hover:bg-[#183b6b]"
            >
              🏠 Home
            </button>
            <button
              onClick={() => handleNavClick('report')}
              className="w-full text-left px-3 py-2 rounded text-sm text-slate-200 font-medium hover:bg-[#183b6b]"
            >
              ➕ Report Civic Issue
            </button>
            <button
              onClick={() => handleNavClick('track')}
              className="w-full text-left px-3 py-2 rounded text-sm text-slate-200 font-medium hover:bg-[#183b6b]"
            >
              🔍 Track Issue Status
            </button>
            <button
              onClick={() => handleNavClick('issues')}
              className="w-full text-left px-3 py-2 rounded text-sm text-slate-200 font-medium hover:bg-[#183b6b]"
            >
              📋 Public Issues Feed
            </button>
          </div>
        )}
      </header>
    </>
  );
}
