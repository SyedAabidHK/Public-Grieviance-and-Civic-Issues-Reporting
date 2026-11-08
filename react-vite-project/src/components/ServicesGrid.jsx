import React from 'react';

export default function ServicesGrid({ onSelectCategory, onOpenFullReport, stats }) {
  const categories = [
    { title: "Potholes & Roads", desc: "Damaged asphalt, craters", icon: "🛣️", bg: "bg-amber-50 hover:bg-amber-100", border: "hover:border-amber-400", cat: "Pothole & Roads" },
    { title: "Garbage & Waste", desc: "Overflowing bins, litter", icon: "🗑️", bg: "bg-emerald-50 hover:bg-emerald-100", border: "hover:border-emerald-400", cat: "Garbage & Waste" },
    { title: "Streetlights", desc: "Dark streets, blown bulb", icon: "💡", bg: "bg-yellow-50 hover:bg-yellow-100", border: "hover:border-yellow-400", cat: "Streetlight Fault" },
    { title: "Water Leaks", desc: "Burst pipe, low pressure", icon: "💧", bg: "bg-sky-50 hover:bg-sky-100", border: "hover:border-sky-400", cat: "Water Supply Leak" },
    { title: "Drainage & Sewage", desc: "Blocked storm drains", icon: "🚰", bg: "bg-indigo-50 hover:bg-indigo-100", border: "hover:border-indigo-400", cat: "Drainage & Sewage" },
    { title: "Sanitation & Other", desc: "Stray menace, tree fall", icon: "🛡️", bg: "bg-rose-50 hover:bg-rose-100", border: "hover:border-rose-400", cat: "Public Sanitation & Others" },
  ];

  return (
    <div className="space-y-8">
      {/* Category Tiles */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#0f2444] font-serif">What Civic Issue Do You Need Resolved?</h3>
            <p className="text-xs text-slate-500">Select any category to quickly lodge a grievance in your area</p>
          </div>
          <button 
            onClick={onOpenFullReport}
            className="mt-2 sm:mt-0 text-xs font-semibold text-sky-700 hover:text-sky-900 flex items-center"
          >
            Open full reporting form →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((c, idx) => (
            <div
              key={idx}
              onClick={() => onSelectCategory(c.cat)}
              className={`bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition border border-slate-200 ${c.border} cursor-pointer text-center group`}
            >
              <div className={`w-12 h-12 mx-auto rounded-full ${c.bg} flex items-center justify-center text-2xl mb-2.5 transition`}>
                {c.icon}
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-800">{c.title}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Two-Column Section: Bulletins & Live Statistics (From reference image) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 7 cols: Latest Announcements & Notices */}
        <div className="lg:col-span-7 bg-white rounded-xl p-5 shadow-sm border border-slate-200 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <h3 className="font-bold text-[#0f2444] text-base">Latest Civic Bulletins & Notices</h3>
            </div>
            <span className="text-xs text-slate-400 font-medium">Updated 30 mins ago</span>
          </div>

          <div className="space-y-3">
            <div className="p-3 bg-slate-50 rounded-lg border-l-4 border-emerald-500 hover:bg-slate-100/70 transition">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Completed Drive</span>
                <span className="text-[11px] text-slate-400">Nov 7, 2026</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-800 mt-1">Ward 4 Storm-Drain Desilting Finished</h4>
              <p className="text-xs text-slate-600 mt-0.5">Culverts and underground channels cleaned near College South Gate in preparation for monsoon showers.</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border-l-4 border-sky-500 hover:bg-slate-100/70 transition">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-sky-800 uppercase tracking-wider">Public Work Underway</span>
                <span className="text-[11px] text-slate-400">Nov 6, 2026</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-800 mt-1">LED Streetlight Replacement on Vidyanagar Main Road</h4>
              <p className="text-xs text-slate-600 mt-0.5">42 energy-efficient 65W LED streetlamps being mounted to resolve night visibility and safety issues.</p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border-l-4 border-amber-500 hover:bg-slate-100/70 transition">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Citizen Advisory</span>
                <span className="text-[11px] text-slate-400">Nov 5, 2026</span>
              </div>
              <h4 className="text-sm font-semibold text-slate-800 mt-1">Door-to-Door Waste Segregation Inspection</h4>
              <p className="text-xs text-slate-600 mt-0.5">Municipal sanitation wardens will assist households with color-coded wet/dry bins from Monday.</p>
            </div>
          </div>
        </div>

        {/* Right 5 cols: Live Performance Metrics & Helpline */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#0f2444] text-white rounded-xl p-5 shadow-sm space-y-4">
            <h3 className="font-bold text-sm tracking-wide uppercase text-amber-400 flex items-center">
              📊 Civic Performance Metrics
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0a1931]/90 p-3.5 rounded-lg border border-slate-700">
                <p className="text-xs text-slate-400">Total Registered</p>
                <p className="text-2xl font-extrabold text-white mt-1">{stats.total}</p>
                <p className="text-[10px] text-emerald-400 mt-0.5">↑ 12 this week</p>
              </div>

              <div className="bg-[#0a1931]/90 p-3.5 rounded-lg border border-slate-700">
                <p className="text-xs text-slate-400">Resolved Issues</p>
                <p className="text-2xl font-extrabold text-emerald-400 mt-1">{stats.resolved}</p>
                <p className="text-[10px] text-slate-300 mt-0.5">Verified complete</p>
              </div>

              <div className="bg-[#0a1931]/90 p-3.5 rounded-lg border border-slate-700">
                <p className="text-xs text-slate-400">In Progress</p>
                <p className="text-2xl font-extrabold text-sky-400 mt-1">{stats.inProgress}</p>
                <p className="text-[10px] text-slate-300 mt-0.5">Crew dispatched</p>
              </div>

              <div className="bg-[#0a1931]/90 p-3.5 rounded-lg border border-slate-700">
                <p className="text-xs text-slate-400">Under Review</p>
                <p className="text-2xl font-extrabold text-amber-400 mt-1">{stats.submitted}</p>
                <p className="text-[10px] text-slate-300 mt-0.5">Pending inspection</p>
              </div>
            </div>
          </div>

          {/* Citizen Helpdesk & Toll-Free */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 space-y-3">
            <h3 className="font-bold text-[#0f2444] text-sm flex items-center">
              🎧 Citizen Helpdesk & Emergency
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-slate-50 rounded-lg">
                <p className="text-slate-500">Municipal Helpline</p>
                <p className="font-bold text-[#0f2444] text-sm">1916 (Toll Free)</p>
              </div>
              <div className="p-2.5 bg-slate-50 rounded-lg">
                <p className="text-slate-500">Electricity Emergency</p>
                <p className="font-bold text-[#0f2444] text-sm">1912 (BESCOM/CESC)</p>
              </div>
            </div>
            <p className="text-[11px] text-slate-500">
              🔒 No personal phone numbers or private resident home addresses are stored or displayed publicly.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
