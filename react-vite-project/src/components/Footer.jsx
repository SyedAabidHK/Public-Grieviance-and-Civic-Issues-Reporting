import React from 'react';

export default function Footer({ onNavClick }) {
  return (
    <footer className="bg-[#0a1931] text-slate-400 text-xs py-8 border-t border-slate-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-[#0f2444] text-xl">
              🏛️
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-serif">JanaSeva Civic Portal</h4>
              <p className="text-[11px] text-slate-400">Public Grievance and Civic Issue Reporting System</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <span className="hover:text-white cursor-pointer" onClick={() => onNavClick('home')}>Home</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => onNavClick('report')}>Report</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => onNavClick('track')}>Track</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => onNavClick('issues')}>Public Feed</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <p>© 2026 JanaSeva Public Grievance Portal • Citizen Civic Redressal System</p>
          <p>Privacy Protected: No real resident phone numbers or residential addresses stored.</p>
        </div>
      </div>
    </footer>
  );
}
