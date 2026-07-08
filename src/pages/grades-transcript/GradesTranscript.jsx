import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  ClipboardCheck, 
  GraduationCap, 
  AppWindow,
  Search, 
  Bell, 
  HelpCircle, 
  Download, 
  TrendingUp, 
  Award, 
  MapPin, 
  Filter, 
  Printer, 
  ChevronDown, 
  ChevronRight,
  Bookmark
} from 'lucide-react';

export default function StudentGradesDashboard() {
  // State for accordion toggles
  const [fall2023Open, setFall2023Open] = useState(true);
  const [spring2023Open, setSpring2023Open] = useState(false);
  const [fall2022Open, setFall2022Open] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f8fafc] font-sans text-slate-800">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-100 flex flex-col justify-between p-4 shrink-0">
        <div>
          {/* Logo */}
          <div className="mb-8 px-2 flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-1.5 rounded-lg">
              <GraduationCap size={20} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-indigo-900 leading-none">EduFlow</h1>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide mt-0.5">Student Portal</p>
            </div>
          </div>

          {/* Navigation Links */}
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
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold bg-indigo-50/60 text-indigo-600 border-r-2 border-indigo-600 rounded-r-none -mr-4">
              <Award size={18} />
              Grades
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <AppWindow size={18} />
              Registration
            </a>
          </nav>
        </div>

        {/* User Profile Footer Left */}
        <div className="bg-slate-50 rounded-xl p-3 flex items-center gap-3 border border-slate-100">
          <img 
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" 
            alt="Julian Thorne" 
            className="w-9 h-9 rounded-full object-cover border border-slate-200"
          />
          <div className="overflow-hidden">
            <h4 className="text-xs font-bold text-slate-700 truncate">Julian Thorne</h4>
            <p className="text-[10px] text-slate-400 font-medium truncate">ID: 2021-04922</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-8 shrink-0">
          {/* Search bar */}
          <div className="relative w-96">
            <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search for courses, grades, or faculty..." 
              className="w-full bg-[#f1f5f9] text-xs pl-9 pr-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 border border-transparent focus:bg-white transition-all text-slate-600"
            />
          </div>

          {/* Right Profile Utilities */}
          <div className="flex items-center gap-5">
            <div className="relative cursor-pointer text-slate-400 hover:text-slate-600">
              <Bell size={18} />
              <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
            </div>
            <HelpCircle size={18} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
            <div className="h-4 w-px bg-slate-200"></div>
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-xs font-semibold text-slate-600">Julian Thorne</span>
              <img 
                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100" 
                alt="Julian Thorne" 
                className="w-7 h-7 rounded-full object-cover border border-slate-200"
              />
            </div>
          </div>
        </header>

        {/* WORKSPACE */}
        <main className="flex-1 p-8 overflow-y-auto space-y-6 max-w-[1300px] w-full mx-auto">
          
          {/* Breadcrumb & Header Section */}
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <p className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
                Portal <span className="text-slate-300">&gt;</span> Academic Records <span className="text-slate-300">&gt;</span> <span className="text-indigo-600">Grades & Transcript</span>
              </p>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Academic Performance</h2>
              <p className="text-xs text-slate-400 max-w-xl">
                View your official grades, cumulative GPA, and download transcript documents for your academic record.
              </p>
            </div>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 transition-all">
              <Download size={14} />
              Download Official Transcript
            </button>
          </div>

          {/* FOUR METRIC CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Overall CGPA */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Overall CGPA</p>
                  <h3 className="text-3xl font-black text-slate-800 mt-2">3.82</h3>
                </div>
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl">
                  <Bookmark size={16} />
                </div>
              </div>
              <p className="text-[11px] text-slate-400 font-medium mt-4 flex items-center gap-1">
                <span className="text-emerald-500 font-bold flex items-center">+0.12</span> vs last semester
              </p>
            </div>

            {/* Credits Earned */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Credits Earned</p>
                  <h3 className="text-3xl font-black text-slate-800 mt-2">94 <span className="text-slate-300 text-lg font-bold">/ 120</span></h3>
                </div>
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl">
                  <ClipboardCheck size={16} />
                </div>
              </div>
              <div className="mt-4 space-y-1.5">
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <p className="text-[10px] text-slate-400 font-semibold tracking-wide">78% degree completion</p>
              </div>
            </div>

            {/* Standing */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Standing</p>
                  <h3 className="text-lg font-black text-slate-800 mt-2">Dean's List</h3>
                </div>
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl">
                  <Award size={16} />
                </div>
              </div>
              <div className="mt-3">
                <span className="bg-emerald-50 text-emerald-600 text-[10px] px-2 py-0.5 rounded-full font-bold">Excellent Standing</span>
                <p className="text-[10px] text-slate-400 font-medium mt-1.5">Academic distinction maintained</p>
              </div>
            </div>

            {/* Academic Path */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Academic Path</p>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">Computer Science</h3>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5">Minor: Mathematics</p>
                </div>
                <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl">
                  <MapPin size={16} />
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-semibold tracking-wide mt-3">Catalog Year: 2021</p>
            </div>
          </div>

          {/* TREND ANALYSIS & QUICK SUMMARY GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* GPA Trend Chart Card */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 lg:col-span-2 shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  GPA Trend Analysis
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                  <span className="w-2 h-2 rounded-full bg-indigo-600"></span> Term GPA
                </div>
              </div>

              {/* Simulated Chart Visual */}
              <div className="h-44 flex items-end justify-between px-6 pt-4 border-b border-slate-100">
                <div className="flex flex-col items-center gap-2 w-12">
                  <div className="bg-indigo-200/60 w-8 h-28 rounded-t-lg transition-all hover:bg-indigo-300"></div>
                  <span className="text-[10px] font-bold text-slate-400">S1</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-12">
                  <div className="bg-indigo-200/60 w-8 h-32 rounded-t-lg transition-all hover:bg-indigo-300"></div>
                  <span className="text-[10px] font-bold text-slate-400">S2</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-12">
                  <div className="bg-indigo-200/60 w-8 h-30 rounded-t-lg transition-all hover:bg-indigo-300"></div>
                  <span className="text-[10px] font-bold text-slate-400">S3</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-12">
                  <div className="bg-indigo-200/60 w-8 h-34 rounded-t-lg transition-all hover:bg-indigo-300"></div>
                  <span className="text-[10px] font-bold text-slate-400">S4</span>
                </div>
                <div className="flex flex-col items-center gap-2 w-12">
                  <div className="bg-indigo-600 w-8 h-[148px] rounded-t-lg shadow-md shadow-indigo-100"></div>
                  <span className="text-[10px] font-bold text-indigo-600">Fall 23</span>
                </div>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col justify-between">
              <h3 className="text-sm font-bold text-slate-800">Quick Summary</h3>
              
              <div className="space-y-3 my-auto">
                {/* Remaining Credits Snippet */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                  <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Remaining Credits</p>
                  <p className="text-base font-extrabold text-slate-700 mt-0.5">26 Units</p>
                </div>
                
                {/* Next Milestone */}
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                  <p className="text-[9px] uppercase tracking-wider font-bold text-slate-400">Next Milestone</p>
                  <p className="text-base font-extrabold text-slate-700 mt-0.5">Senior Project</p>
                </div>
              </div>
            </div>
          </div>

          {/* COURSE RECORDS SECTION */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800">Course Records</h3>
              <div className="flex items-center gap-3 text-slate-400">
                <button className="hover:text-slate-600"><Filter size={16} /></button>
                <button className="hover:text-slate-600"><Printer size={16} /></button>
              </div>
            </div>

            {/* TERM 1 ACCORDION (FALL 2023 - ACTIVE) */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div 
                onClick={() => setFall2023Open(!fall2023Open)}
                className="p-4 bg-slate-50/50 flex items-center justify-between cursor-pointer border-b border-slate-100 select-none"
              >
                <div className="flex items-center gap-3">
                  <div className="text-slate-400">
                    {fall2023Open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-700">Fall 2023 - Current</h4>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">Term GPA: 3.92 • 16 Credits Completed</p>
                  </div>
                </div>
                <span className="bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">Active Term</span>
              </div>

              {fall2023Open && (
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="text-slate-400 font-bold border-b border-slate-100 bg-slate-50/20">
                        <th className="p-4 font-semibold pl-11">Course Code & Name</th>
                        <th className="p-4 font-semibold text-center">Credits</th>
                        <th className="p-4 font-semibold text-center">Grade</th>
                        <th className="p-4 font-semibold text-center">Points</th>
                        <th className="p-4 font-semibold text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                      <tr>
                        <td className="p-4 pl-11">
                          <span className="block font-bold text-slate-700">CS401</span>
                          <span className="text-[10px] text-slate-400">Advanced Algorithms</span>
                        </td>
                        <td className="p-4 text-center text-slate-500">4.0</td>
                        <td className="p-4 text-center font-bold text-indigo-600">A</td>
                        <td className="p-4 text-center text-slate-500">16.0</td>
                        <td className="p-4 text-center">
                          <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-100/50">Completed</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 pl-11">
                          <span className="block font-bold text-slate-700">CS450</span>
                          <span className="text-[10px] text-slate-400">Machine Learning Fundamentals</span>
                        </td>
                        <td className="p-4 text-center text-slate-500">4.0</td>
                        <td className="p-4 text-center font-bold text-indigo-600">A</td>
                        <td className="p-4 text-center text-slate-500">16.0</td>
                        <td className="p-4 text-center">
                          <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-100/50">Completed</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 pl-11">
                          <span className="block font-bold text-slate-700">MATH302</span>
                          <span className="text-[10px] text-slate-400">Abstract Algebra II</span>
                        </td>
                        <td className="p-4 text-center text-slate-500">4.0</td>
                        <td className="p-4 text-center font-bold text-indigo-600">A-</td>
                        <td className="p-4 text-center text-slate-500">14.8</td>
                        <td className="p-4 text-center">
                          <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-emerald-100/50">Completed</span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 pl-11">
                          <span className="block font-bold text-slate-700">HSS201</span>
                          <span className="text-[10px] text-slate-400">History of Technology</span>
                        </td>
                        <td className="p-4 text-center text-slate-500">4.0</td>
                        <td className="p-4 text-center font-bold text-indigo-600">A</td>
                        <td className="p-4 text-center text-slate-500">16.0</td>
                        <td className="p-4 text-center">
                          <span className="bg-orange-50 text-orange-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-orange-100/50">In Progress</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* TERM 2 ACCORDION (SPRING 2023 - COLLAPSED) */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div 
                onClick={() => setSpring2023Open(!spring2023Open)}
                className="p-4 flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <div className="text-slate-400">
                    {spring2023Open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-700">Spring 2023</h4>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">Term GPA: 3.74 • 15 Credits Completed</p>
                  </div>
                </div>
                <span className="bg-slate-100 text-slate-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Past Term</span>
              </div>
            </div>

            {/* TERM 3 ACCORDION (FALL 2022 - COLLAPSED) */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div 
                onClick={() => setFall2022Open(!fall2022Open)}
                className="p-4 flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <div className="text-slate-400">
                    {fall2022Open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-700">Fall 2022</h4>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">Term GPA: 3.58 • 16 Credits Completed</p>
                  </div>
                </div>
                <span className="bg-slate-100 text-slate-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Past Term</span>
              </div>
            </div>

          </div>

          {/* LOWER SECTION: GRADING SCALE LEGEND */}
          <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2">
              <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Grading Scale Legend</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1.5 text-[10px] text-slate-500 font-medium">
                <p><span className="font-bold text-slate-700">A (Excellent)</span> 4.0 Points</p>
                <p><span className="font-bold text-slate-700">C (Average)</span> 2.0 Points</p>
                <p><span className="font-bold text-slate-700">B (Good)</span> 3.0 Points</p>
                <p><span className="font-bold text-slate-700">D (Poor)</span> 1.0 Points</p>
                <p><span className="font-bold text-slate-700">B- (Good -)</span> 2.7 Points</p>
                <p><span className="font-bold text-slate-700">F (Failure)</span> 0.0 Points</p>
              </div>
            </div>

            {/* Verification Metadata Footnote */}
            <div className="text-right text-[9px] text-slate-400 space-y-1 md:max-w-xs w-full md:w-auto">
              <p className="font-bold uppercase tracking-wider">Verification Status</p>
              <p>Last Updated: Oct 24, 2023, 09:42 AM</p>
              <p className="truncate">Electronic Transcript ID: EFT-2023-94827-JH</p>
              <div className="flex justify-end gap-3 text-indigo-500 font-bold mt-1">
                <a href="#" className="hover:underline">Privacy Policy</a>
                <a href="#" className="hover:underline">Institutional Policies</a>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}