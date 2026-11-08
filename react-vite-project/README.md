# JanaSeva - Public Grievance and Civic Issue Reporting System
### Citizen Civic Issue Redressal Portal

---

## 📌 Project Overview
**JanaSeva** is a responsive web application designed to empower citizens to report local civic issues (potholes, dark streetlights, garbage overflow, water leaks, and clogged drainage) and track real-time resolution with local municipal authorities.

---

## 🚀 Two Ways to Run the Project

### Option 1: Instant 1-Click Browser Demo (Zero Setup Required)
If you have a project presentation today and don't want to install tools:
1. Locate the file `civic_portal.html` in this folder.
2. Double-click it to open it in **Google Chrome** or **Microsoft Edge**.
3. The entire website is 100% interactive! You can:
   - File grievances with photo previews.
   - Track tickets (`TKT-8941`, `TKT-8938`, etc.).
   - Filter issues by category and status.
   - Print the project report card.

---

### Option 2: Running with React + Vite (Professional Setup)
When you want to demonstrate the React + Vite code to your professors:
1. **Install Node.js** (LTS version) from [nodejs.org](https://nodejs.org).
2. Open terminal inside the project folder:
   ```bash
   npm install
   npm run dev
   ```
3. Open the link displayed (usually `http://localhost:5173`) in your browser.

---

## 🎯 Key Project Features
1. **Public Grievance Lodging**:
   - Supports 6 civic categories: Potholes, Garbage, Streetlights, Water Leaks, Drainage, Sanitation.
   - General landmark / area localization (protects citizen safety).
   - Real photo evidence upload with instant preview.
   - Auto-generated tracking ticket code (e.g. `TKT-8942`).

2. **Public Status Tracking**:
   - 3-stage visual progress stepper: **Submitted → In Progress → Resolved**.
   - Inspection log and official ward officer notes.

3. **Public Transparency Feed**:
   - Live filterable board showing all community reports.
   - Filter by status and civic issue category.

4. **Privacy Protection**:
   - Does NOT store or display private resident phone numbers or exact door addresses.

5. **UN Sustainable Development Goals (SDG)**:
   - **SDG 11**: Sustainable Cities and Communities (Target 11.6 - Municipal solid waste & infrastructure).
   - **SDG 16**: Peace, Justice, and Strong Institutions (Transparent, accountable civic governance).

---

## 🎓 Viva Voce & Presentation Cheat-Sheet
- **Q1: Why did you choose this community problem?**
  - *Answer:* In student neighborhoods and college campuses, small civic issues like road craters or dark street stretches create safety hazards. Traditional complaint procedures are slow and lack transparency. JanaSeva bridges citizens and municipal squads directly.
- **Q2: How does the system handle citizen privacy?**
  - *Answer:* The system avoids collecting or displaying sensitive personal phone numbers or exact home addresses. It uses public landmarks (e.g., "Opposite College Canteen") and optional citizen pseudonyms.
- **Q3: What technologies did you use?**
  - *Answer:* Frontend built with React 18, Vite.js for fast modern bundling, Tailwind CSS for responsive government-grade UI, and browser storage for persistence.
