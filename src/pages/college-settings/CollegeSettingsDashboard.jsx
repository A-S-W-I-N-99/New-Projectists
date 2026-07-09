import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  BookOpen, 
  ClipboardList, 
  Sliders, 
  Search, 
  Bell, 
  HelpCircle, 
  Calendar, 
  Plus, 
  Edit2, 
  FileText, 
  Download,
  Percent,
  ToggleLeft,
  ToggleRight,
  Monitor,
  Binary,
  Compass
} from 'lucide-react';

export default function CollegeSettingsDashboard() {
  // State for toggles and settings
  const [lateRegistration, setLateRegistration] = useState(true);
  const [autoInvoices, setAutoInvoices] = useState(true);
  const [attendanceThreshold, setAttendanceThreshold] = useState(75);
  const [gpaScale, setGpaScale] = useState('4.0');

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-4 shrink-0">
        <div>
          {/* Logo */}
          <div className="mb-8 px-2">
            <h1 className="text-xl font-bold text-indigo-700">EduAdmin Pro</h1>
            <p className="text-xs text-slate-400 font-medium">Administrator Portal</p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <LayoutDashboard size={18} />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <Users size={18} />
              Faculty
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <GraduationCap size={18} />
              Students
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <BookOpen size={18} />
              Courses
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <ClipboardList size={18} />
              Enrollment
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-indigo-50 text-indigo-700">
              <Sliders size={18} />
              College Settings
            </a>
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="bg-slate-100 rounded-xl p-3 flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
            alt="Dr. Julian Vance" 
            className="w-10 h-10 rounded-full object-cover border border-slate-200"
          />
          <div className="overflow-hidden">
            <h4 className="text-sm font-semibold text-slate-700 truncate">Dr. Julian Vance</h4>
            <p className="text-xs text-slate-500 truncate">Chief Registrar</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          {/* Global Search */}
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search settings, departments, or rules..." 
              className="w-full bg-slate-100 text-sm pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-transparent focus:bg-white transition-all"
            />
          </div>

          {/* Right Utilities */}
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer text-slate-500 hover:text-slate-700">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </div>
            <HelpCircle size={20} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
            <div className="h-5 w-px bg-slate-200"></div>
            <span className="text-sm font-medium text-slate-500">College Management System</span>
          </div>
        </header>

        {/* WORKSPACE */}
        <main className="flex-1 p-8 overflow-y-auto space-y-6 max-w-[1400px] w-full mx-auto">
          
          {/* Dashboard Title Section */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">College Settings</h2>
              <p className="text-sm text-slate-500 mt-1">Configure global academic parameters and institutional infrastructure.</p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm flex items-center gap-2 transition-colors">
              <FileText size={16} />
              Save Changes
            </button>
          </div>

          {/* MIDDLE GRID: Academic Calendar & Global/Grading Rules */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Academic Calendar Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 lg:col-span-2 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2 font-bold text-slate-800">
                    <Calendar size={18} className="text-indigo-600" />
                    <h3>Academic Calendar</h3>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 text-sm font-semibold flex items-center gap-1">
                    <Plus size={16} /> Add Semester
                  </button>
                </div>

                {/* Active Semester Alert Banner */}
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 flex items-center justify-between mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-600 text-white p-2.5 rounded-lg mt-0.5">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-indigo-900 text-sm flex items-center gap-2">
                        Fall 2024 <span className="bg-indigo-200 text-indigo-800 text-xs px-2 py-0.5 rounded-full font-medium">Active</span>
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">Aug 28, 2024 - Dec 20, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Registration Ends</p>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">Sep 15, 2024</p>
                  </div>
                </div>

                {/* Semesters Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="text-slate-400 font-semibold border-b border-slate-100">
                        <th className="pb-3 font-semibold">Semester</th>
                        <th className="pb-3 font-semibold">Start Date</th>
                        <th className="pb-3 font-semibold">End Date</th>
                        <th className="pb-3 font-semibold">Status</th>
                        <th className="pb-3 w-10"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr className="text-slate-700">
                        <td className="py-3.5 font-semibold text-slate-900">Spring 2025</td>
                        <td className="py-3.5 text-slate-500">Jan 12, 2025</td>
                        <td className="py-3.5 text-slate-500">May 15, 2025</td>
                        <td className="py-3.5">
                          <span className="bg-amber-50 text-amber-700 border border-amber-200/60 text-xs px-2.5 py-0.5 rounded-md font-medium">Planned</span>
                        </td>
                        <td className="py-3.5 text-right">
                          <button className="text-slate-400 hover:text-slate-600"><Edit2 size={14} /></button>
                        </td>
                      </tr>
                      <tr className="text-slate-700">
                        <td className="py-3.5 font-semibold text-slate-900">Summer 2025</td>
                        <td className="py-3.5 text-slate-500">Jun 01, 2025</td>
                        <td className="py-3.5 text-slate-500">Aug 10, 2025</td>
                        <td className="py-3.5">
                          <span className="bg-amber-50 text-amber-700 border border-amber-200/60 text-xs px-2.5 py-0.5 rounded-md font-medium">Planned</span>
                        </td>
                        <td className="py-3.5 text-right">
                          <button className="text-slate-400 hover:text-slate-600"><Edit2 size={14} /></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Side Rules Column */}
            <div className="space-y-6">
              
              {/* Global Rules Configuration */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 font-bold text-slate-800 mb-2">
                  <Sliders size={18} className="text-indigo-600" />
                  <h3>Global Rules</h3>
                </div>

                {/* Rule 1: Late Registration */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">Enable Late Registration</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Allow student enrollment after semester start</p>
                  </div>
                  <button 
                    onClick={() => setLateRegistration(!lateRegistration)} 
                    className={`focus:outline-none transition-colors duration-200 ${lateRegistration ? 'text-indigo-600' : 'text-slate-300'}`}
                  >
                    {lateRegistration ? <ToggleRight size={38} strokeWidth={1.5} /> : <ToggleLeft size={38} strokeWidth={1.5} />}
                  </button>
                </div>

                {/* Rule 2: Auto Invoices */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">Auto-generate Invoices</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Generate billing upon course confirmation</p>
                  </div>
                  <button 
                    onClick={() => setAutoInvoices(!autoInvoices)} 
                    className={`focus:outline-none transition-colors duration-200 ${autoInvoices ? 'text-indigo-600' : 'text-slate-300'}`}
                  >
                    {autoInvoices ? <ToggleRight size={38} strokeWidth={1.5} /> : <ToggleLeft size={38} strokeWidth={1.5} />}
                  </button>
                </div>

                {/* Rule 3: Attendance Input */}
                <div className="flex items-center justify-between pt-1">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-800">Attendance Threshold</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Minimum % required to pass a course</p>
                  </div>
                  <div className="relative flex items-center">
                    <input 
                      type="number" 
                      value={attendanceThreshold}
                      onChange={(e) => setAttendanceThreshold(e.target.value)}
                      className="w-16 bg-slate-50 border border-slate-200 text-center text-sm font-bold text-indigo-700 py-1.5 pr-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
                    />
                    <Percent size={12} className="absolute right-2 text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Grading Scales Configuration */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-2 font-bold text-slate-800 mb-2">
                  <GraduationCap size={18} className="text-indigo-600" />
                  <h3>Grading Scales</h3>
                </div>

                {/* Scale Switch Toggles */}
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => setGpaScale('4.0')}
                    className={`p-3 rounded-xl border text-center transition-all ${gpaScale === '4.0' ? 'border-indigo-600 bg-indigo-50/40' : 'border-slate-100 bg-white hover:bg-slate-50'}`}
                  >
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Current Scale</p>
                    <p className="text-lg font-extrabold text-slate-800 mt-0.5">4.0 GPA</p>
                  </button>
                  <button 
                    onClick={() => setGpaScale('5.0')}
                    className={`p-3 rounded-xl border text-center transition-all ${gpaScale === '5.0' ? 'border-indigo-600 bg-indigo-50/40' : 'border-slate-100 bg-white hover:bg-slate-50'}`}
                  >
                    <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Switch To</p>
                    <p className="text-lg font-extrabold text-slate-400 mt-0.5">5.0 GPA</p>
                  </button>
                </div>

                {/* Letter Boundaries Snippet */}
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-2">Letter Boundaries</p>
                  <div className="grid grid-cols-4 gap-1.5 text-center text-xs font-semibold">
                    <div className="bg-emerald-50 text-emerald-700 border border-emerald-100 p-2 rounded-lg">
                      <span className="block font-bold text-sm">A</span>
                      <span className="text-[10px] text-emerald-600/80 font-medium">90-100</span>
                    </div>
                    <div className="bg-blue-50 text-blue-700 border border-blue-100 p-2 rounded-lg">
                      <span className="block font-bold text-sm">B</span>
                      <span className="text-[10px] text-blue-600/80 font-medium">80-89</span>
                    </div>
                    <div className="bg-amber-50 text-amber-700 border border-amber-100 p-2 rounded-lg">
                      <span className="block font-bold text-sm">C</span>
                      <span className="text-[10px] text-amber-600/80 font-medium">70-79</span>
                    </div>
                    <div className="bg-rose-50 text-rose-700 border border-rose-100 p-2 rounded-lg">
                      <span className="block font-bold text-sm">D/F</span>
                      <span className="text-[10px] text-rose-600/80 font-medium">&lt;70</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* LOWER SECTION: Department Management */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <BookOpen size={18} className="text-indigo-600" />
                <h3>Department Management</h3>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors">
                  <Download size={14} /> Export Data
                </button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors">
                  <Plus size={14} /> New Department
                </button>
              </div>
            </div>

            {/* Department Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* CS Card */}
              <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/30 hover:shadow-sm transition-shadow flex items-start gap-4">
                <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl mt-0.5">
                  <Monitor size={20} />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Computer Science</h4>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">Dean: Dr. Sarah Chen</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Faculty</span>
                        <span className="text-xs font-bold text-slate-700">42</span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Students</span>
                        <span className="text-xs font-bold text-slate-700">1,240</span>
                      </div>
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/50 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">Active</span>
                  </div>
                </div>
              </div>

              {/* Math Card */}
              <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/30 hover:shadow-sm transition-shadow flex items-start gap-4">
                <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl mt-0.5">
                  <Binary size={20} />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Mathematics</h4>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">Dean: Dr. Robert Fischer</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Faculty</span>
                        <span className="text-xs font-bold text-slate-700">28</span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Students</span>
                        <span className="text-xs font-bold text-slate-700">850</span>
                      </div>
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/50 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">Active</span>
                  </div>
                </div>
              </div>

              {/* Physics Card */}
              <div className="border border-slate-100 rounded-xl p-4 bg-slate-50/30 hover:shadow-sm transition-shadow flex items-start gap-4">
                <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl mt-0.5">
                  <Compass size={20} />
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Physics</h4>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">Dean: Dr. Elena Moretti</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Faculty</span>
                        <span className="text-xs font-bold text-slate-700">35</span>
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Students</span>
                        <span className="text-xs font-bold text-slate-700">610</span>
                      </div>
                    </div>
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200/50 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wide">Active</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </main>

        {/* SYSTEM STATUS FOOTER */}
        <footer className="h-10 bg-white border-t border-slate-200 px-8 flex items-center justify-between text-xs text-slate-400 font-medium shrink-0">
          <div>Last administrative sync: Today at 09:42 AM</div>
          <div className="flex items-center gap-1.5">
            Server Status: <span className="text-emerald-600 font-bold flex items-center gap-1">Optimal <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block animate-pulse"></span></span>
          </div>
        </footer>

      </div>
    </div>
  );
}