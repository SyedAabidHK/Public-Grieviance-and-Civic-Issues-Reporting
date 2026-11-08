import React, { useState } from 'react';

export default function TrackIssue({ issues, initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const [searchedIssue, setSearchedIssue] = useState(
    initialQuery ? issues.find(i => i.id.toUpperCase() === initialQuery.toUpperCase()) : null
  );
  const [hasSearched, setHasSearched] = useState(Boolean(initialQuery));

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    if (!query.trim()) {
      alert("Please enter a ticket ID to track.");
      return;
    }
    const found = issues.find(i => i.id.toUpperCase() === query.trim().toUpperCase());
    setSearchedIssue(found || null);
    setHasSearched(true);
  };

  const handlePresetClick = (id) => {
    setQuery(id);
    const found = issues.find(i => i.id.toUpperCase() === id.toUpperCase());
    setSearchedIssue(found || null);
    setHasSearched(true);
  };

  const getStatusBadge = (status) => {
    if (status === "Resolved") return "bg-emerald-100 text-emerald-800 border border-emerald-300";
    if (status === "In Progress") return "bg-sky-100 text-sky-800 border border-sky-300";
    return "bg-amber-100 text-amber-800 border border-amber-300";
  };

  const getStep = (status) => {
    if (status === "Resolved") return 3;
    if (status === "In Progress") return 2;
    return 1;
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Search Header */}
      <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 text-center space-y-4">
        <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-full flex items-center justify-center mx-auto text-xl">
          🔍
        </div>
        <h2 className="text-2xl font-bold text-[#0f2444] font-serif">Track Grievance Status</h2>
        <p className="text-xs text-slate-500 max-w-md mx-auto">
          Enter your unique Tracking Ticket ID (e.g.,{' '}
          <span className="font-mono text-sky-700 font-semibold cursor-pointer underline" onClick={() => handlePresetClick('TKT-8941')}>TKT-8941</span> or{' '}
          <span className="font-mono text-sky-700 font-semibold cursor-pointer underline" onClick={() => handlePresetClick('TKT-8938')}>TKT-8938</span>) to inspect real-time progress and departmental remarks.
        </p>

        <form onSubmit={handleSearch} className="flex max-w-md mx-auto mt-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. TKT-8941"
            className="flex-1 px-4 py-2.5 rounded-l-lg border border-slate-300 uppercase font-mono text-sm focus:ring-2 focus:ring-[#0f2444] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#0f2444] hover:bg-[#183b6b] text-white px-5 py-2.5 rounded-r-lg font-bold text-sm transition"
          >
            Track
          </button>
        </form>
      </div>

      {/* Search Result */}
      {hasSearched && (
        <div>
          {!searchedIssue ? (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 p-5 rounded-xl text-center space-y-2">
              <span className="text-2xl">⚠️</span>
              <h4 className="font-bold text-sm">Ticket ID "{query}" Not Found</h4>
              <p className="text-xs text-rose-600">
                Please check the ticket number. Try searching for{' '}
                <span className="font-mono font-bold underline cursor-pointer" onClick={() => handlePresetClick('TKT-8941')}>
                  TKT-8941
                </span>.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs text-slate-400 font-mono">TICKET NUMBER</span>
                  <h3 className="text-xl font-bold font-mono text-[#0f2444]">{searchedIssue.id}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2.5 py-1 rounded font-semibold ${getStatusBadge(searchedIssue.status)}`}>
                    ● {searchedIssue.status}
                  </span>
                </div>
              </div>

              {/* Progress Stepper */}
              <div className="py-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Resolution Progress</p>
                <div className="relative flex items-center justify-between">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 -z-0"></div>
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-500 -z-0 transition-all duration-500"
                    style={{ width: getStep(searchedIssue.status) === 1 ? '10%' : getStep(searchedIssue.status) === 2 ? '50%' : '100%' }}
                  ></div>

                  {/* Step 1 */}
                  <div className="relative z-10 text-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${getStep(searchedIssue.status) >= 1 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'} mx-auto`}>
                      ✓
                    </div>
                    <p className="text-[11px] font-semibold text-slate-700 mt-1.5">Submitted</p>
                    <p className="text-[10px] text-slate-400">Issue Logged</p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative z-10 text-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${getStep(searchedIssue.status) >= 2 ? 'bg-sky-600 text-white' : 'bg-slate-200 text-slate-500'} mx-auto`}>
                      {getStep(searchedIssue.status) >= 2 ? '🔧' : '2'}
                    </div>
                    <p className="text-[11px] font-semibold text-slate-700 mt-1.5">In Progress</p>
                    <p className="text-[10px] text-slate-400">Crew Assigned</p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative z-10 text-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${getStep(searchedIssue.status) === 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'} mx-auto`}>
                      {getStep(searchedIssue.status) === 3 ? '✓' : '3'}
                    </div>
                    <p className="text-[11px] font-semibold text-slate-700 mt-1.5">Resolved</p>
                    <p className="text-[10px] text-slate-400">Fixed & Verified</p>
                  </div>
                </div>
              </div>

              {/* Grievance Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <p className="text-slate-400 font-semibold uppercase">Category</p>
                  <p className="font-bold text-slate-800 text-sm mt-0.5">{searchedIssue.category}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold uppercase">Landmark / Location</p>
                  <p className="font-bold text-slate-800 text-sm mt-0.5">{searchedIssue.landmark}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-slate-400 font-semibold uppercase">Issue Summary</p>
                  <p className="text-slate-700 mt-0.5">{searchedIssue.title}</p>
                  <p className="text-slate-500 text-[11px] mt-1">{searchedIssue.description}</p>
                </div>
              </div>

              {searchedIssue.photo && (
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Attached Site Evidence</p>
                  <img src={searchedIssue.photo} alt="Site Evidence" className="h-48 w-full object-cover rounded-xl border border-slate-200" />
                </div>
              )}

              {/* Official Remarks */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs space-y-1">
                <div className="flex items-center space-x-1.5 text-amber-900 font-bold">
                  <span>📋</span>
                  <span>Municipal / Ward Officer Action Note:</span>
                </div>
                <p className="text-amber-800 leading-relaxed">{searchedIssue.remarks || "Under inspection by ward maintenance squad."}</p>
              </div>

            </div>
          )}
        </div>
      )}
    </div>
  );
}
