import React, { useState } from 'react';
import {
  LayoutDashboard,
  Calendar,
  ClipboardCheck,
  Award,
  AppWindow,
  Settings,
  LogOut,
  Search,
  Bell,
  HelpCircle,
  Download,
  CheckCircle2,
  Clock,
  Circle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Plus
} from 'lucide-react';

export default function DegreeAuditDashboard() {
  // State for toggling collapsible course cards
  const [coreCoursesOpen, setCoreCoursesOpen] = useState(true);
  const [majorElectivesOpen, setMajorElectivesOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col justify-between p-4 shrink-0">
        <div>
          {/* Logo */}
          <div className="mb-8 px-2 flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-1.5 rounded-lg font-bold text-xl">
              E
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-none">EduFlow</h1>
              <p className="text-[10px] text-slate-400 mt-0.5">Student Portal</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <LayoutDashboard size={18} />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <Calendar size={18} />
              Timetable
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <ClipboardCheck size={18} />
              Attendance
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold bg-indigo-50 text-indigo-600">
              <Award size={18} />
              Grades
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <AppWindow size={18} />
              Registration
            </a>
          </nav>
        </div>

        {/* Sidebar Footer Operations */}
        <div className="space-y-1 border-t border-slate-100 pt-4">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-50 transition-colors">
            <Settings size={18} />
            Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-50 transition-colors">
            <LogOut size={18} />
            Logout
          </a>
        </div>
      </aside>

      {/* MAIN VIEWPORT CONTAINER */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0">
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search for courses or transcripts..." 
              className="w-full bg-slate-50 text-xs pl-9 pr-4 py-2 rounded-xl border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:bg-white text-slate-600 transition-all"
            />
          </div>

          <div className="flex items-center gap-5">
            <div className="relative cursor-pointer text-slate-400 hover:text-slate-600">
              <Bell size={18} />
              <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
            </div>
            <HelpCircle size={18} className="text-slate-400 cursor-pointer" />
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <span className="block text-xs font-bold text-slate-700">Julian Thorne</span>
                <span className="block text-[9px] font-medium text-slate-400">ID: 2021-9304</span>
              </div>
              <div className="w-7 h-7 bg-indigo-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                JT
              </div>
            </div>
          </div>
        </header>

        {/* WORKSPACE CONTENT */}
        <main className="flex-1 p-8 overflow-y-auto space-y-6 max-w-[1400px] w-full mx-auto">
          
          {/* Main Module Banner Row */}
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-0.5 rounded-md">
                Academic Year 2024/25
              </span>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight pt-1">
                Degree Audit: B.S. Software Engineering
              </h2>
              <p className="text-xs text-slate-400">
                Requirement summary for Julian Thorne. Your expected graduation date is set for <span className="font-semibold text-slate-700">May 15, 2025</span>.
              </p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 transition-colors shrink-0">
              <Download size={14} />
              Download Audit Report
            </button>
          </div>

          {/* PROGRESS SUMMARY OVERVIEW BAR */}
          <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1 space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400 uppercase tracking-wider text-[10px]">Overall Progress</span>
                <span className="text-indigo-600 text-sm">78%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 relative">
                <div className="bg-indigo-600 h-2 rounded-full transition-all duration-500" style={{ width: '78%' }}></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
                <span>Completed: 94 Credits</span>
                <span>Required: 120 Credits</span>
              </div>
            </div>
            
            <div className="md:w-px md:h-12 bg-slate-100"></div>
            
            <div className="w-48 shrink-0">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Audit Status</span>
              <div className="flex items-center gap-1.5 mt-1 text-emerald-600 font-bold text-sm">
                <CheckCircle2 size={16} />
                <span>ON TRACK</span>
              </div>
            </div>
          </div>

          {/* TWO COLUMN INTERACTION PANELS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* LEFT ACCORDIONS COLUMN */}
            <div className="lg:col-span-2 space-y-4">
              
              {/* ACCORDION 1: CORE COURSES */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div 
                  onClick={() => setCoreCoursesOpen(!coreCoursesOpen)}
                  className="p-4 flex items-center justify-between bg-slate-50/40 border-b border-slate-50 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-700">
                    <Award size={16} className="text-indigo-600" />
                    <span>Core Courses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-semibold text-slate-400">36 / 42 Credits</span>
                    {coreCoursesOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
                  </div>
                </div>

                {coreCoursesOpen && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-slate-400 border-b border-slate-100 font-bold text-[10px] uppercase tracking-wider bg-slate-50/10">
                          <th className="p-3.5 pl-5">Course Code</th>
                          <th className="p-3.5">Course Name</th>
                          <th className="p-3.5 text-center">Credits</th>
                          <th className="p-3.5 text-center w-20">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50 text-slate-600 font-medium">
                        <tr>
                          <td className="p-3.5 pl-5 font-bold text-slate-700">CS301</td>
                          <td className="p-3.5 text-slate-500">Algorithms & Complexity</td>
                          <td className="p-3.5 text-center font-semibold">4.0</td>
                          <td className="p-3.5 text-center"><CheckCircle2 size={16} className="text-emerald-500 mx-auto" /></td>
                        </tr>
                        <tr>
                          <td className="p-3.5 pl-5 font-bold text-slate-700">CS402</td>
                          <td className="p-3.5 text-slate-500">Operating Systems II</td>
                          <td className="p-3.5 text-center font-semibold">4.0</td>
                          <td className="p-3.5 text-center"><Clock size={16} className="text-amber-500 mx-auto" /></td>
                        </tr>
                        <tr>
                          <td className="p-3.5 pl-5 font-bold text-slate-700">CS415</td>
                          <td className="p-3.5 text-slate-500">Software Architecture</td>
                          <td className="p-3.5 text-center font-semibold">4.0</td>
                          <td className="p-3.5 text-center"><Circle size={16} className="text-slate-300 mx-auto" /></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* ACCORDION 2: MAJOR ELECTIVES */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div 
                  onClick={() => setMajorElectivesOpen(!majorElectivesOpen)}
                  className="p-4 flex items-center justify-between bg-slate-50/40 border-b border-slate-50 cursor-pointer select-none"
                >
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-700">
                    <Sparkles size={16} className="text-indigo-600" />
                    <span>Major Electives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-semibold text-slate-400">12 / 18 Credits</span>
                    {majorElectivesOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
                  </div>
                </div>

                {majorElectivesOpen && (
                  <div className="p-5 space-y-3">
                    <p className="text-[11px] text-slate-400 italic">
                      Choose 2 more courses from the approved specialization list.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 font-semibold text-xs rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                        Database Design
                      </span>
                      <span className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 font-semibold text-xs rounded-lg cursor-pointer hover:bg-slate-100 transition-colors">
                        Cybersecurity Fundamentals
                      </span>
                      <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 font-bold text-xs rounded-lg flex items-center gap-1">
                        ✓ Cloud Computing
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* CAPSTONE PROJECT PREVIEW CARD */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-800">Capstone Project</h3>
                    <span className="bg-amber-50 text-amber-600 text-[10px] font-bold px-2 py-0.5 rounded border border-amber-100">In Progress</span>
                  </div>
                  <p className="text-xs font-bold text-slate-700 pt-1">CP499 - Senior Design Project</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed max-w-md">
                    Proposal approved. Phase 1 implementation underway. Scheduled for final defense in April 2025.
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="block text-xl font-black text-slate-800">6.0</span>
                  <span className="block text-[10px] font-bold uppercase text-slate-400 tracking-wider">Credits</span>
                </div>
              </div>

            </div>

            {/* RIGHT WIDGETS COLUMN */}
            <div className="space-y-6">
              
              {/* ACADEMIC STANDING METER */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col items-center justify-center text-center relative overflow-hidden">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block self-start">Academic Standing</span>
                
                {/* Radial Progress Metric Layout */}
                <div className="relative w-28 h-28 my-4 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-indigo-600" strokeDasharray="85, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-2xl font-black text-slate-800 tracking-tight">3.82</span>
                    <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">Cumulative</span>
                  </div>
                </div>

                <p className="text-xs font-bold text-emerald-600">Dean's List Status</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Min. 2.0 GPA Required for Degree</p>
              </div>

              {/* WHAT-IF SIMULATOR ANALYTICS BOX */}
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white rounded-2xl p-5 shadow-md shadow-indigo-100 space-y-4">
                <div>
                  <h3 className="text-sm font-bold tracking-wide">What-If Analysis</h3>
                  <p className="text-[11px] text-indigo-100/80 leading-relaxed mt-1">
                    Thinking about changing your major or adding a minor? Simulate how your current credits would apply.
                  </p>
                </div>
                <button className="w-full bg-white hover:bg-indigo-50 text-indigo-700 text-xs font-bold py-2.5 rounded-xl transition-all shadow-sm">
                  Launch Simulator
                </button>
              </div>

              {/* STATUS LEGEND DISPLAY */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm space-y-2.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Status Legend</span>
                <div className="space-y-2 text-xs font-medium text-slate-600">
                  <div className="flex items-center gap-2"><CheckCircle2 size={15} className="text-emerald-500" /> Requirement Completed</div>
                  <div className="flex items-center gap-2"><Clock size={15} className="text-amber-500" /> In Progress / Registered</div>
                  <div className="flex items-center gap-2"><Circle size={15} className="text-slate-300" /> Requirement Remaining</div>
                </div>
              </div>

            </div>
          </div>

          {/* LOWER SECTION: RECOMMENDATIONS FOR NEXT SEMESTER */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-800">Recommended for Next Semester</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Rec Card 1 */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex flex-col justify-between group hover:border-indigo-100 transition-all">
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-slate-400 font-mono">⟨ ⟩</span>
                    <span className="bg-slate-50 border border-slate-200 text-slate-500 font-semibold text-[9px] px-2 py-0.5 rounded">Pre-req Met</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-xs pt-1 group-hover:text-indigo-600 transition-colors">Distributed Systems</h4>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Fulfills Major Elective requirement. Only 4 seats remaining.
                  </p>
                </div>
                <button className="text-indigo-600 font-bold text-xs mt-4 flex items-center gap-1 self-start hover:underline">
                  Add to Planner <Plus size={12} />
                </button>
              </div>

              {/* Rec Card 2 */}
              <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm flex flex-col justify-between group hover:border-indigo-100 transition-all">
                <div className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold text-slate-400">⚙</span>
                    <span className="bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-[9px] px-2 py-0.5 rounded">High Affinity</span>
                  </div>
                  <h4 className="font-bold text-slate-800 text-xs pt-1 group-hover:text-indigo-600 transition-colors">AI & Ethics</h4>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Fulfills General Education requirement. Recommended based on interests.
                  </p>
                </div>
                <button className="text-indigo-600 font-bold text-xs mt-4 flex items-center gap-1 self-start hover:underline">
                  Add to Planner <Plus size={12} />
                </button>
              </div>

            </div>
          </div>

          {/* ASSIGNED ADVISOR MINI DRAWER FOOTER CARD */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center justify-between gap-4 max-w-sm ml-auto">
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" 
                alt="Dr. Sarah Jenkins" 
                className="w-8 h-8 rounded-full object-cover border border-slate-200"
              />
              <div>
                <h4 className="text-xs font-bold text-slate-700">Dr. Sarah Jenkins</h4>
                <p className="text-[10px] text-slate-400 font-medium">Assigned Academic Advisor</p>
              </div>
            </div>
            <button className="text-indigo-600 text-[11px] font-bold hover:underline shrink-0">
              Schedule Meeting
            </button>
          </div>

        </main>
      </div>
    </div>
  );
}