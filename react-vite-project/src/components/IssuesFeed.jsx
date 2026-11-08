import React, { useState } from 'react';

export default function IssuesFeed({ issues, onInspectTicket }) {
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const filteredIssues = issues.filter((issue) => {
    const matchesStatus = (statusFilter === 'all') || (issue.status === statusFilter);
    const matchesCat = (categoryFilter === 'all') || (issue.category === categoryFilter);
    return matchesStatus && matchesCat;
  });

  const getStatusBadge = (status) => {
    if (status === "Resolved") return "bg-emerald-100 text-emerald-800 border border-emerald-300";
    if (status === "In Progress") return "bg-sky-100 text-sky-800 border border-sky-300";
    return "bg-amber-100 text-amber-800 border border-amber-300";
  };

  return (
    <div className="space-y-6">
      {/* Header & Filter Controls */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-[#0f2444] font-serif">Public Civic Transparency Board</h2>
          <p className="text-xs text-slate-500">Live community complaints lodged by residents across local wards</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Status Filter Buttons */}
          <div className="inline-flex rounded-lg bg-slate-100 p-1 text-xs font-semibold">
            {['all', 'Submitted', 'In Progress', 'Resolved'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`px-3 py-1.5 rounded-md transition ${
                  statusFilter === st ? 'bg-white text-[#0f2444] shadow-sm font-bold' : 'text-slate-600 hover:text-[#0f2444]'
                }`}
              >
                {st === 'all' ? 'All' : st}
              </button>
            ))}
          </div>

          {/* Category Dropdown */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="text-xs px-3 py-1.5 rounded-lg border border-slate-300 bg-white focus:ring-1 focus:ring-[#0f2444]"
          >
            <option value="all">All Categories</option>
            <option value="Pothole & Roads">Roads & Potholes</option>
            <option value="Garbage & Waste">Garbage & Waste</option>
            <option value="Streetlight Fault">Streetlights</option>
            <option value="Water Supply Leak">Water Supply</option>
            <option value="Drainage & Sewage">Drainage</option>
            <option value="Public Sanitation & Others">Sanitation</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {filteredIssues.length === 0 ? (
        <div className="py-12 text-center text-slate-400 bg-white rounded-xl border border-dashed border-slate-300">
          <span className="text-4xl">📭</span>
          <p className="text-sm font-semibold text-slate-600 mt-2">No issues found matching the selected filter</p>
          <p className="text-xs text-slate-400 mt-1">Try switching back to 'All' or choose another category</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredIssues.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition border border-slate-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {item.photo ? (
                  <div className="h-40 w-full overflow-hidden bg-slate-100">
                    <img src={item.photo} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="h-24 w-full bg-slate-50 flex items-center justify-center text-slate-300 border-b border-slate-100">
                    <span className="text-2xl">📷</span>
                  </div>
                )}

                <div className="p-4 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.id}
                    </span>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${getStatusBadge(item.status)}`}>
                      ● {item.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-800 text-sm leading-snug">{item.title}</h4>

                  <div className="flex items-center text-xs text-slate-500 space-x-1.5">
                    <span className="text-rose-500">📍</span>
                    <span className="truncate">{item.landmark}</span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{item.description}</p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>🕒 {item.date}</span>
                  <button
                    onClick={() => onInspectTicket(item.id)}
                    className="text-sky-700 hover:text-sky-900 font-semibold"
                  >
                    Inspect Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
