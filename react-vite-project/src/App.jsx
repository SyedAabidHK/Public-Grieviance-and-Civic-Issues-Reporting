import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import ReportIssueForm from './components/ReportIssueForm';
import TrackIssue from './components/TrackIssue';
import IssuesFeed from './components/IssuesFeed';
import Footer from './components/Footer';
import { initialIssues } from './data/sampleIssues';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [issues, setIssues] = useState(() => {
    const saved = localStorage.getItem('janaseva_issues');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return initialIssues;
      }
    }
    return initialIssues;
  });

  const [selectedCategory, setSelectedCategory] = useState('');
  const [trackingTicketId, setTrackingTicketId] = useState('');
  const [modalTicketId, setModalTicketId] = useState('');

  // Persist issues to localStorage
  useEffect(() => {
    localStorage.setItem('janaseva_issues', JSON.stringify(issues));
  }, [issues]);

  // Performance Stats
  const stats = {
    total: issues.length,
    resolved: issues.filter((i) => i.status === 'Resolved').length,
    inProgress: issues.filter((i) => i.status === 'In Progress').length,
    submitted: issues.filter((i) => i.status === 'Submitted').length,
  };

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    setActiveTab('report');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFullReport = () => {
    setSelectedCategory('');
    setActiveTab('report');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInspectTicket = (ticketId) => {
    setTrackingTicketId(ticketId);
    setActiveTab('track');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitGrievance = (newIssue) => {
    setIssues([newIssue, ...issues]);
    setModalTicketId(newIssue.id);
  };

  const handleModalTrack = () => {
    const id = modalTicketId;
    setModalTicketId('');
    handleInspectTicket(id);
  };

  return (
    <div className="text-slate-800 antialiased min-h-screen flex flex-col bg-[#f4f6fa]">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        {/* VIEW 1: HOME */}
        {activeTab === 'home' && (
          <div className="space-y-8">
            <Hero
              onReportClick={handleOpenFullReport}
              onTrackClick={() => setActiveTab('track')}
              onViewFeedClick={() => setActiveTab('issues')}
              issues={issues}
            />
            <ServicesGrid
              onSelectCategory={handleSelectCategory}
              onOpenFullReport={handleOpenFullReport}
              stats={stats}
            />
          </div>
        )}

        {/* VIEW 2: REPORT */}
        {activeTab === 'report' && (
          <ReportIssueForm
            selectedCategory={selectedCategory}
            onSubmitGrievance={handleSubmitGrievance}
          />
        )}

        {/* VIEW 3: TRACK */}
        {activeTab === 'track' && (
          <TrackIssue issues={issues} initialQuery={trackingTicketId} />
        )}

        {/* VIEW 4: ISSUES FEED */}
        {activeTab === 'issues' && (
          <IssuesFeed issues={issues} onInspectTicket={handleInspectTicket} />
        )}
      </main>

      {/* Success Modal */}
      {modalTicketId && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center space-y-4 border border-slate-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            
            <h3 className="text-xl font-bold text-[#0f2444] font-serif">Grievance Successfully Lodged!</h3>
            <p className="text-xs text-slate-500">Your issue has been logged into the municipal dispatch queue.</p>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left space-y-1">
              <p className="text-[11px] text-slate-400 uppercase font-semibold">Your Tracking Ticket ID:</p>
              <p className="text-xl font-mono font-bold text-[#0f2444] tracking-wider">{modalTicketId}</p>
              <p className="text-[11px] text-slate-500">Save this code to check progress in the "Track Status" tab.</p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleModalTrack}
                className="flex-1 bg-[#0f2444] hover:bg-[#183b6b] text-white font-bold py-2.5 px-4 rounded-lg text-xs transition"
              >
                🔍 Track Ticket Now
              </button>
              <button
                onClick={() => setModalTicketId('')}
                className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 text-xs font-semibold transition"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer onNavClick={(tab) => { setActiveTab(tab); window.scrollTo({ top: 0, behavior: 'smooth' }); }} />
    </div>
  );
}
