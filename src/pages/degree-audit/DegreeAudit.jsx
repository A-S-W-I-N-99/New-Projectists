import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  ClipboardCheck, 
  GraduationCap, 
  Users, 
  UserSquare2,
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  HelpCircle, 
  Download, 
  Upload, 
  Save, 
  FileSpreadsheet,
  CheckCircle,
  Trophy,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Send
} from 'lucide-react';

export default function UploadMarksDashboard() {
  // State for student marks input
  const [studentMarks, setStudentMarks] = useState({
    'MT-24-001': '',
    'MT-24-002': '',
    'MT-24-003': '',
    'MT-24-004': '',
    'MT-24-005': ''
  });

  // State for search filter and checkbox validation
  const [searchQuery, setSearchQuery] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Mock static students database
  const students = [
    { rank: 1, name: 'Aaron Anderson', initials: 'AA', roll: 'MT-24-001', maxMarks: 50 },
    { rank: 2, name: 'Beatrice Bennett', initials: 'BB', roll: 'MT-24-002', maxMarks: 50 },
    { rank: 3, name: 'Catherine Clark', initials: 'CC', roll: 'MT-24-003', maxMarks: 50 },
    { rank: 4, name: 'David Dixon', initials: 'DD', roll: 'MT-24-004', maxMarks: 50 },
    { rank: 5, name: 'Elara Finch', initials: 'EF', roll: 'MT-24-005', maxMarks: 50 },
  ];

  // Handle value change for individual student marks
  const handleMarksChange = (roll, value) => {
    // Basic validation to keep inputs clean and bounded
    if (value === '' || (Number(value) >= 0 && Number(value) <= 50)) {
      setStudentMarks(prev => ({
        ...prev,
        [roll]: value
      }));
    }
  };

  // Calculate dynamic entry analytics
  const entriesEntered = Object.values(studentMarks).filter(val => val !== '').length;

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-4 shrink-0">
        <div>
          {/* Dashboard Application Logo */}
          <div className="mb-8 px-2 flex items-center gap-2.5">
            <div className="bg-indigo-600 text-white p-2 rounded-xl">
              <GraduationCap size={20} />
            </div>
            <div>
              <h1 className="text-base font-bold text-slate-900 leading-tight">EduCore Pro</h1>
              <p className="text-[11px] text-slate-400 font-medium">Campus Management</p>
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
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold bg-indigo-50 text-indigo-700">
              <Trophy size={18} />
              Grading
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <Users size={18} />
              Faculty
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <UserSquare2 size={18} />
              Students
            </a>
          </nav>
        </div>

        {/* Configuration Bottom Footer Nav */}
        <div className="space-y-1 border-t border-slate-100 pt-4">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
            <Settings size={18} />
            Settings
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-rose-600 hover:bg-rose-50/50 transition-colors">
            <LogOut size={18} />
            Logout
          </a>
        </div>
      </aside>

      {/* MAIN WORKSPACE WRAPPER */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        
        {/* HEADER BAR */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          {/* Module Hierarchy Mapping */}
          <div className="text-[11px] font-semibold text-slate-400 flex items-center gap-1.5">
            <span>Academic</span>
            <span className="text-slate-300">&gt;</span>
            <span>Grading</span>
            <span className="text-slate-300">&gt;</span>
            <span className="text-indigo-600 font-bold">Upload Marks</span>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-5">
            <div className="relative cursor-pointer text-slate-500 hover:text-slate-700">
              <Bell size={18} />
              <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
            </div>
            <HelpCircle size={18} className="text-slate-400 hover:text-slate-600 cursor-pointer" />
            <div className="h-4 w-px bg-slate-200"></div>
            
            {/* Faculty Meta ID Card */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <h4 className="text-xs font-bold text-slate-800">Dr. Sarah Jenkins</h4>
                <p className="text-[10px] text-slate-400 font-medium">Senior Faculty</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" 
                alt="Dr. Sarah Jenkins" 
                className="w-8 h-8 rounded-full object-cover border border-slate-200"
              />
            </div>
          </div>
        </header>

        {/* WORKSPACE VIEWPORT */}
        <main className="flex-1 p-8 space-y-6 max-w-[1400px] w-full mx-auto pb-32">
          
          {/* Workspace Title & Actions Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Upload Marks</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-50 border border-indigo-100 text-indigo-700 text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <FileSpreadsheet size={12} /> Advanced Mathematics (MATH-301)
                </span>
                <span className="bg-slate-100 border border-slate-200 text-slate-600 text-[11px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1.5">
                  <Calendar size={12} /> Mid-Term Examination (Fall 2024)
                </span>
              </div>
            </div>

            {/* Utility Templates Row */}
            <div className="flex items-center gap-3">
              <button className="border border-indigo-200 bg-white hover:bg-indigo-50 text-indigo-600 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-sm">
                <Download size={14} /> Export Template
              </button>
              <button className="border border-indigo-200 bg-white hover:bg-indigo-50 text-indigo-600 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-sm">
                <Upload size={14} /> Bulk Upload CSV
              </button>
              <button className="bg-white hover:bg-slate-50 text-indigo-600 border border-indigo-600 text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-sm">
                <Save size={14} /> Save Draft
              </button>
            </div>
          </div>

          {/* ANALYTICS SUMMARY GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Students Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm relative flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Students</span>
                <Users size={16} className="text-indigo-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mt-4">45</h3>
              <div className="w-full bg-indigo-600 h-1 rounded-full mt-4"></div>
            </div>

            {/* Marks Entered Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm relative flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Marks Entered</span>
                <ClipboardCheck size={16} className="text-amber-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mt-4">
                {entriesEntered} <span className="text-slate-300 text-sm font-semibold">/ 45</span>
              </h3>
              <div className="w-full bg-slate-100 h-1 rounded-full mt-4 overflow-hidden">
                <div className="bg-indigo-600 h-full transition-all duration-300" style={{ width: `${(entriesEntered / 45) * 100}%` }}></div>
              </div>
            </div>

            {/* Class Average Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm relative flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Class Average</span>
                <CheckCircle size={16} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-400 italic mt-4">N/A</h3>
              <p className="text-[10px] text-slate-400 font-medium mt-4">Pending submission</p>
            </div>

            {/* Highest Score Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm relative flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Highest Score</span>
                <Trophy size={16} className="text-rose-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-400 italic mt-4">N/A</h3>
              <p className="text-[10px] text-slate-400 font-medium mt-4">Calculated on save</p>
            </div>
          </div>

          {/* STUDENT GRADES LIST TABLE COMPONENT */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            
            {/* Table Control Header */}
            <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <h3 className="text-sm font-bold text-slate-800">Student Grade List</h3>
              
              {/* Row Search */}
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-2.5 text-slate-400" size={14} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search student name or roll..." 
                  className="w-full bg-slate-50 text-xs pl-9 pr-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all text-slate-600"
                />
              </div>
            </div>

            {/* Table Elements viewport */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="p-4 pl-6 w-20 font-bold">Rank</th>
                    <th className="p-4 font-bold">Student Name</th>
                    <th className="p-4 font-bold">Roll Number</th>
                    <th className="p-4 font-bold">Status</th>
                    <th className="p-4 font-bold text-center w-28">Max Marks</th>
                    <th className="p-4 font-bold text-center w-36">Marks Obtained</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                  {students
                    .filter(student => 
                      student.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                      student.roll.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((student) => (
                      <tr key={student.roll} className="hover:bg-slate-50/60 transition-colors">
                        <td className="p-4 pl-6 font-bold text-slate-900">{student.rank}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold text-[10px] rounded-full flex items-center justify-center tracking-wider">
                              {student.initials}
                            </div>
                            <span className="font-bold text-slate-700">{student.name}</span>
                          </div>
                        </td>
                        <td className="p-4 text-slate-500 font-mono text-[11px]">{student.roll}</td>
                        <td className="p-4">
                          {studentMarks[student.roll] !== '' ? (
                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] px-2.5 py-0.5 rounded-md font-bold">Filled</span>
                          ) : (
                            <span className="bg-orange-50 text-orange-600 border border-orange-100 text-[10px] px-2.5 py-0.5 rounded-md font-bold">Pending</span>
                          )}
                        </td>
                        <td className="p-4 text-center font-bold text-slate-700">{student.maxMarks}</td>
                        <td className="p-4 text-center">
                          <input 
                            type="text" 
                            maxLength={2}
                            placeholder="00"
                            value={studentMarks[student.roll]}
                            onChange={(e) => handleMarksChange(student.roll, e.target.value)}
                            className="w-16 bg-slate-50 hover:bg-slate-100 focus:bg-white text-center text-xs font-bold text-slate-700 py-1.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-mono"
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Segment */}
            <div className="p-4 border-t border-slate-200 flex items-center justify-center gap-1 select-none">
              <button onClick={() => setCurrentPage(1)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-700"><ChevronsLeft size={14} /></button>
              <button onClick={() => setCurrentPage(1)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-700"><ChevronLeft size={14} /></button>
              
              <button className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-sm">1</button>
              <button className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:bg-slate-50">2</button>
              <button className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:bg-slate-50">3</button>
              <span className="px-2 text-slate-300 text-xs">...</span>
              <button className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:bg-slate-50">9</button>
              
              <button onClick={() => setCurrentPage(2)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-700"><ChevronRight size={14} /></button>
              <button onClick={() => setCurrentPage(9)} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-700"><ChevronsRight size={14} /></button>
            </div>
          </div>

        </main>

        {/* BOTTOM AFFIRMED SUBMISSION DRAWER */}
        <footer className="fixed bottom-0 right-0 left-64 h-24 bg-white border-t border-slate-200 px-8 flex items-center justify-between shadow-2xl z-20">
          <label className="flex items-start gap-3 max-w-xl cursor-pointer group select-none">
            <input 
              type="checkbox" 
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
              className="mt-1 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/30 w-4 h-4 cursor-pointer"
            />
            <span className="text-xs text-slate-500 font-semibold leading-relaxed group-hover:text-slate-700 transition-colors">
              I confirm that I have verified the marks against the answer scripts.
            </span>
          </label>

          {/* Submission and current workflow tracker */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wide">Entries Complete</span>
              <div className="text-xs font-bold text-slate-700 mt-0.5 flex items-center justify-end gap-2">
                <span>{entriesEntered} / 45</span>
                <div className="w-20 bg-slate-100 rounded-full h-1.5 overflow-hidden inline-block">
                  <div className="bg-indigo-600 h-full" style={{ width: `${(entriesEntered / 45) * 100}%` }}></div>
                </div>
              </div>
            </div>

            <button 
              disabled={!isConfirmed}
              className={`h-14 px-8 rounded-xl font-bold text-xs flex flex-col items-center justify-center gap-0.5 shadow-md transition-all ${
                isConfirmed 
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer shadow-indigo-100' 
                  : 'bg-indigo-200 text-indigo-50/70 cursor-not-allowed shadow-none'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Send size={12} />
                <span>Submit Final Grades</span>
              </div>
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
}