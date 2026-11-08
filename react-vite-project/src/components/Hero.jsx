import React from 'react';

export default function Hero({ onReportClick, onTrackClick, onViewFeedClick, issues }) {
  const recentIssues = issues.slice(0, 2);

  return (
    <div className="bg-gradient-to-r from-[#0f2444] via-[#183b6b] to-slate-900 rounded-2xl shadow-xl overflow-hidden text-white border border-slate-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* Left Column: Hero Text */}
        <div className="p-6 sm:p-10 lg:col-span-7 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-amber-400/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-400/30">
            <span>🛡️ Empowering Residents & Students</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight font-serif">
            Serving Citizens with <br />
            <span className="text-amber-400">Transparency and Trust</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            A transparent civic initiative bridging local residents, neighborhoods, and municipal authorities. 
            Report potholes, garbage dumps, dark streetlights, or drainage overflow in seconds and track real-time resolution.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={onReportClick}
              className="bg-amber-500 hover:bg-amber-600 text-[#0f2444] font-bold px-5 py-3 rounded-lg text-sm shadow-lg transition flex items-center"
            >
              ⚠️ Report Civic Problem
            </button>
            <button
              onClick={onTrackClick}
              className="bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 rounded-lg text-sm border border-white/20 transition flex items-center"
            >
              🔍 Track Existing Issue
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700/60 text-xs text-slate-300">
            <div>
              <p className="font-bold text-white text-base">100% Free</p>
              <p className="text-slate-400">Citizen Service</p>
            </div>
            <div>
              <p className="font-bold text-amber-400 text-base">&lt; 48 Hrs</p>
              <p className="text-slate-400">Avg. Response</p>
            </div>
            <div>
              <p className="font-bold text-emerald-400 text-base">Verified</p>
              <p className="text-slate-400">Officer Redressal</p>
            </div>
          </div>
        </div>

        {/* Right Column: Ward Control Room Card */}
        <div className="p-6 sm:p-8 lg:col-span-5 flex justify-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 w-full max-w-md shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm">
                  🏢
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Ward Civic Control Room</h3>
                  <p className="text-[11px] text-slate-300">Local Area Redressal Cell</p>
                </div>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-white">
                ● LIVE
              </span>
            </div>

            {/* Live Cards */}
            <div className="space-y-2.5 text-xs">
              {recentIssues.map((issue) => (
                <div key={issue.id} className="bg-[#0a1931]/80 p-3 rounded-lg flex items-center justify-between border border-slate-700">
                  <div className="flex items-center space-x-2 overflow-hidden mr-2">
                    <span className="text-sm flex-shrink-0">
                      {issue.status === 'Resolved' ? '✅' : '🚧'}
                    </span>
                    <div className="truncate">
                      <p className="font-medium text-slate-200 truncate">{issue.title}</p>
                      <p className="text-[10px] text-slate-400 font-mono">{issue.id} • {issue.date}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-semibold whitespace-nowrap ${
                    issue.status === 'Resolved' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                      : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  }`}>
                    {issue.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <button 
                onClick={onViewFeedClick}
                className="text-xs text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-4"
              >
                View all public complaints →
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
