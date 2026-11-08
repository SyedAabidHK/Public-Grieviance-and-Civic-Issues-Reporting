import React, { useState } from 'react';

export default function ReportIssueForm({ selectedCategory, onSubmitGrievance }) {
  const [category, setCategory] = useState(selectedCategory || '');
  const [title, setTitle] = useState('');
  const [landmark, setLandmark] = useState('');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState('Normal');
  const [reporter, setReporter] = useState('');
  const [photo, setPhoto] = useState('');

  // Update category if passed from parent
  React.useEffect(() => {
    if (selectedCategory) setCategory(selectedCategory);
  }, [selectedCategory]);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      setPhoto(uploadEvent.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSamplePhoto = (type) => {
    const samples = {
      pothole: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&auto=format&fit=crop&q=60",
      garbage: "https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?w=600&auto=format&fit=crop&q=60",
      light: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=60"
    };
    setPhoto(samples[type] || '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !title.trim() || !landmark.trim() || !description.trim()) {
      alert("Please fill in all mandatory fields.");
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicketId = `TKT-${randomNum}`;

    const newIssue = {
      id: newTicketId,
      title: title.trim(),
      category,
      landmark: landmark.trim(),
      description: description.trim(),
      urgency,
      status: "Submitted",
      reporter: reporter.trim() || "Resident",
      date: "Today (" + new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ")",
      photo,
      remarks: "Grievance received and registered into the civic dispatch queue."
    };

    onSubmitGrievance(newIssue);

    // Reset form
    setTitle('');
    setLandmark('');
    setDescription('');
    setPhoto('');
    setReporter('');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header Banner */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-600 flex items-center justify-center text-lg">
            📝
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#0f2444] font-serif">Lodge a Civic Grievance</h2>
            <p className="text-xs text-slate-500">Fill in the problem details. Your report will be immediately assigned a tracking code.</p>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-sky-50 rounded-lg border border-sky-100 flex items-start space-x-2 text-xs text-sky-900">
          <span className="text-sky-600 font-bold">ℹ️</span>
          <p>
            <strong>Privacy Guarantee:</strong> To protect citizen safety, you only need to provide a general landmark or area (e.g. "Near College Gate" or "Market Road Circle"). Do not enter your personal phone number or private home door number.
          </p>
        </div>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-5">
        
        {/* Category */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Civic Issue Category <span className="text-rose-500">*</span>
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0f2444] text-sm bg-white"
          >
            <option value="" disabled>-- Select Issue Type --</option>
            <option value="Pothole & Roads">🛣️ Pothole & Road Damage</option>
            <option value="Garbage & Waste">🗑️ Garbage Dump & Waste Accumulation</option>
            <option value="Streetlight Fault">💡 Broken Streetlight / Darkness</option>
            <option value="Water Supply Leak">💧 Water Supply Pipe Burst / Leakage</option>
            <option value="Drainage & Sewage">🚰 Drainage Overflow & Clogged Gutter</option>
            <option value="Public Sanitation & Others">🛡️ Public Sanitation & Others</option>
          </select>
        </div>

        {/* Short Title */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Short Title <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="e.g. Deep pothole causing two-wheelers to slip"
            maxLength={80}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0f2444] text-sm"
          />
          <p className="text-[11px] text-slate-400 mt-1">Keep it brief and specific (max 80 characters)</p>
        </div>

        {/* Landmark / Area */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Nearby Landmark or Public Area <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
            required
            placeholder="e.g. Near VTU College Main Gate, Beside Bus Shelter"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0f2444] text-sm"
          />
          <p className="text-[11px] text-slate-400 mt-1">Specify nearby crossroads, building, college gate, or street name</p>
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Detailed Description <span className="text-rose-500">*</span>
          </label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Describe the issue, how long it has persisted, and if it poses immediate danger to vehicles or pedestrians..."
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0f2444] text-sm"
          />
        </div>

        {/* Urgency & Resident Tag */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Urgency Level
            </label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0f2444] text-sm bg-white"
            >
              <option value="Normal">Normal (Routine resolution)</option>
              <option value="High">High (Impacting traffic / hygiene)</option>
              <option value="Emergency">Urgent / Safety Hazard</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Resident Tag (Optional)
            </label>
            <input
              type="text"
              value={reporter}
              onChange={(e) => setReporter(e.target.value)}
              placeholder="e.g. Concerned Citizen / Hostel Resident"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#0f2444] text-sm"
            />
          </div>
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
            Attach Photo (Optional)
          </label>
          <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:bg-slate-50 transition cursor-pointer relative">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            />
            
            {!photo ? (
              <div className="space-y-1">
                <span className="text-3xl">📷</span>
                <p className="text-xs text-slate-600 font-medium">Click to select a photo from your phone or PC</p>
                <p className="text-[11px] text-slate-400">PNG, JPG or JPEG up to 5MB</p>
              </div>
            ) : (
              <div className="relative inline-block">
                <img src={photo} alt="Issue Preview" className="h-40 rounded-lg object-cover border border-slate-200 shadow-sm mx-auto" />
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setPhoto(''); }}
                  className="absolute -top-2 -right-2 bg-rose-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow hover:bg-rose-700"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
          
          {/* Preset Buttons for easy presentation demo */}
          <div className="mt-2 flex items-center space-x-2 text-[11px] text-slate-500">
            <span>Demo presets:</span>
            <button type="button" onClick={() => handleSamplePhoto('pothole')} className="text-sky-700 hover:underline">Sample Pothole</button>
            <span>•</span>
            <button type="button" onClick={() => handleSamplePhoto('garbage')} className="text-sky-700 hover:underline">Sample Garbage</button>
            <span>•</span>
            <button type="button" onClick={() => handleSamplePhoto('light')} className="text-sky-700 hover:underline">Sample Streetlight</button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-[#0f2444] hover:bg-[#183b6b] text-white font-bold py-3 px-6 rounded-lg text-sm shadow-md transition flex items-center justify-center"
          >
            🚀 Submit Grievance
          </button>
          <button
            type="button"
            onClick={() => { setTitle(''); setLandmark(''); setDescription(''); setPhoto(''); }}
            className="px-5 py-3 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 text-sm font-medium transition"
          >
            Clear Form
          </button>
        </div>

      </form>
    </div>
  );
}
