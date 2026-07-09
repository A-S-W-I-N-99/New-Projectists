import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  ClipboardCheck,
  BarChart3,
  FolderOpen,
  HelpCircle,
  LogOut,
  Bell,
  Search,
  X,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  FileText,
  FileSpreadsheet,
  FileDown,
  ToggleLeft,
  ToggleRight,
  Mail,
  Download
} from 'lucide-react';

export default function ExportPreviewDashboard() {
  // Interactive state configurations
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  const [includeHeader, setIncludeHeader] = useState(true);
  const [includePageNumbers, setIncludePageNumbers] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);

  // Column visibility checklist state
  const [columns, setColumns] = useState({
    studentId: true,
    fullName: true,
    enrollmentDate: true,
    status: true,
    contact: false
  });

  const toggleColumn = (key) => {
    setColumns(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Mock document preview data
  const reportData = [
    { id: 'ST-9021', name: 'Alexandra Sterling', date: 'Sept 12, 2023', status: 'ACTIVE', statusStyle: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { id: 'ST-8842', name: 'Marcus Vane', date: 'Sept 14, 2023', status: 'ACTIVE', statusStyle: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { id: 'ST-7731', name: 'Lydia Whitmore', date: 'Sept 15, 2023', status: 'PENDING', statusStyle: 'bg-amber-50 text-amber-700 border-amber-100' },
    { id: 'ST-9104', name: 'Julian Chen', date: 'Sept 15, 2023', status: 'ACTIVE', statusStyle: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
    { id: 'ST-8221', name: 'Sarah Jenkins', date: 'Sept 16, 2023', status: 'WITHDRAWN', statusStyle: 'bg-rose-50 text-rose-600 border-rose-100' },
    { id: 'ST-9055', name: 'David Miller', date: 'Sept 18, 2023', status: 'ACTIVE', statusStyle: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans text-slate-800">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-4 shrink-0">
        <div>
          {/* Logo Section */}
          <div className="mb-8 px-2 flex items-center gap-2">
            <div className="bg-indigo-600 text-white p-2 rounded-xl">
              <BookOpen size={18} />
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-900 leading-none">EduCore Admin</h1>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <LayoutDashboard size={18} />
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <Users size={18} />
              Students
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <BookOpen size={18} />
              Courses
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <ClipboardCheck size={18} />
              Enrollment
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold bg-indigo-50 text-indigo-700">
              <BarChart3 size={18} />
              Reports
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:bg-slate-50 transition-colors">
              <FolderOpen size={18} />
              Documents
            </a>
          </nav>
        </div>

        {/* Sidebar Footer links */}
        <div className="space-y-1 border-t border-slate-100 pt-4">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-50 transition-colors">
            <HelpCircle size={18} />
            Support
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-slate-400 hover:bg-slate-50 transition-colors">
            <LogOut size={18} />
            Logout
          </a>
        </div>
      </aside>

      {/* MAIN LAYOUT CANVAS */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-slate-400 hover:text-slate-600 cursor-pointer">Dashboard</span>
            <span className="text-sm font-bold text-indigo-600 border-b-2 border-indigo-600 h-16 flex items-center px-1">Reports</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-2 cursor-pointer text-slate-400 hover:text-slate-600 relative">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
            </div>
            <div className="p-2 cursor-pointer text-slate-400 hover:text-slate-600">
              <Search size={18} />
            </div>
            <div className="h-4 w-px bg-slate-200"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" 
              alt="Admin Profile" 
              className="w-7 h-7 rounded-full border border-slate-200 object-cover"
            />
          </div>
        </header>

        {/* WORKSPACE BREADCRUMB HEADER */}
        <div className="bg-slate-50 border-b border-slate-200 px-8 py-4 flex items-center justify-between shrink-0">
          <div className="space-y-0.5">
            <p className="text-[11px] font-medium text-slate-400 flex items-center gap-1">
              Reports <span className="text-slate-300">&gt;</span> Student Enrollment Report <span className="text-slate-300">&gt;</span> <span className="text-slate-500 font-semibold">Export Preview</span>
            </p>
            <h2 className="text-xl font-bold text-slate-800">Export Preview</h2>
          </div>
          <button className="text-slate-400 hover:text-slate-600 p-1.5 hover:bg-slate-200/60 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* WORKSPACE CONTROLS & LIVE VIEW GRID */}
        <div className="flex-1 flex overflow-hidden relative">
          
          {/* LEFT INTERACTIVE CONFIGURATION BOX */}
          <div className="w-64 bg-white border-r border-slate-200 p-6 overflow-y-auto space-y-6 shrink-0 text-xs font-semibold text-slate-500 select-none">
            
            {/* EXPORT FORMATS */}
            <div className="space-y-2.5">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Export Format</span>
              <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-xl">
                <button 
                  onClick={() => setSelectedFormat('pdf')}
                  className={`py-2 rounded-lg font-bold flex flex-col items-center gap-1 transition-all ${selectedFormat === 'pdf' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <FileText size={16} />
                  <span>PDF</span>
                </button>
                <button 
                  onClick={() => setSelectedFormat('excel')}
                  className={`py-2 rounded-lg font-bold flex flex-col items-center gap-1 transition-all ${selectedFormat === 'excel' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <FileSpreadsheet size={16} />
                  <span>Excel</span>
                </button>
                <button 
                  onClick={() => setSelectedFormat('csv')}
                  className={`py-2 rounded-lg font-bold flex flex-col items-center gap-1 transition-all ${selectedFormat === 'csv' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <FileDown size={16} />
                  <span>CSV</span>
                </button>
              </div>
            </div>

            {/* PAGE SETUP */}
            <div className="space-y-2.5">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Page Setup</span>
              <div>
                <p className="text-[11px] text-slate-400 font-medium mb-1.5">Orientation</p>
                <button className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 text-center text-slate-700 font-bold hover:bg-slate-100 transition-colors">
                  Portrait
                </button>
              </div>
            </div>

            {/* TOGGLE SETTINGS PANEL */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-700 font-bold">Include Brand Header</p>
                </div>
                <button 
                  onClick={() => setIncludeHeader(!includeHeader)}
                  className={`focus:outline-none transition-colors ${includeHeader ? 'text-indigo-600' : 'text-slate-300'}`}
                >
                  {includeHeader ? <ToggleRight size={32} strokeWidth={1.5} /> : <ToggleLeft size={32} strokeWidth={1.5} />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-700 font-bold">Page Numbers</p>
                </div>
                <button 
                  onClick={() => setIncludePageNumbers(!includePageNumbers)}
                  className={`focus:outline-none transition-colors ${includePageNumbers ? 'text-indigo-600' : 'text-slate-300'}`}
                >
                  {includePageNumbers ? <ToggleRight size={32} strokeWidth={1.5} /> : <ToggleLeft size={32} strokeWidth={1.5} />}
                </button>
              </div>
            </div>

            {/* INCLUDE COLUMNS FILTER CHECKBOXES */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100">
              <div className="flex justify-between items-center">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Include Columns</span>
                <span className="text-[10px] text-indigo-600 hover:underline cursor-pointer">Select All</span>
              </div>
              
              <div className="space-y-2 font-semibold text-slate-600">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={columns.studentId} 
                    onChange={() => toggleColumn('studentId')}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 w-4 h-4 cursor-pointer"
                  />
                  <span>Student ID</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={columns.fullName} 
                    onChange={() => toggleColumn('fullName')}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 w-4 h-4 cursor-pointer"
                  />
                  <span>Full Name</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={columns.enrollmentDate} 
                    onChange={() => toggleColumn('enrollmentDate')}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 w-4 h-4 cursor-pointer"
                  />
                  <span>Enrollment Date</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={columns.status} 
                    onChange={() => toggleColumn('status')}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 w-4 h-4 cursor-pointer"
                  />
                  <span>Status</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={columns.contact} 
                    onChange={() => toggleColumn('contact')}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500/20 w-4 h-4 cursor-pointer"
                  />
                  <span>Contact Info</span>
                </label>
              </div>
            </div>

          </div>

          {/* RIGHT DOCUMENT DRAFT PREVIEW DISPLAY SPACE */}
          <div className="flex-1 bg-slate-100 flex flex-col overflow-hidden pb-28">
            
            {/* Document Workspace Control Ribbon bar */}
            <div className="h-11 border-b border-slate-200 bg-white px-6 flex items-center justify-between select-none shrink-0">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setZoomLevel(prev => Math.max(50, prev - 10))}
                  className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded"
                >
                  <Minimize2 size={15} />
                </button>
                <span className="text-[11px] font-bold text-slate-500 w-12 text-center">{zoomLevel}%</span>
                <button 
                  onClick={() => setZoomLevel(prev => Math.min(150, prev + 10))}
                  className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded"
                >
                  <Maximize2 size={15} />
                </button>
              </div>

              <span className="text-[11px] font-bold text-slate-400">Page {currentPage} of 4</span>

              <div className="flex items-center gap-1 text-slate-400">
                <button className="p-1 hover:text-slate-600"><ChevronLeft size={16} /></button>
                <button className="p-1 hover:text-slate-600"><ChevronRight size={16} /></button>
              </div>
            </div>

            {/* INTERACTIVE PAGE SHEET CANVAS VIEW */}
            <div className="flex-1 p-8 overflow-auto flex justify-center items-start">
              <div 
                className="bg-white shadow-lg border border-slate-200/60 p-12 w-[720px] transition-all duration-200 origin-top"
                style={{ transform: `scale(${zoomLevel / 100})` }}
              >
                {/* DOCUMENT DRAFT HEADER BRANDING */}
                {includeHeader && (
                  <div className="flex justify-between items-start border-b-2 border-indigo-600 pb-5 mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className="bg-indigo-600 text-white p-2 rounded-xl">
                        <BookOpen size={16} />
                      </div>
                      <div>
                        <h3 className="text-sm font-black text-slate-900 tracking-tight">EduCore Management</h3>
                        <p className="text-[9px] text-slate-400 font-medium tracking-wide">Academic Excellence Systems</p>
                      </div>
                    </div>
                    <div className="text-right text-[9px] text-slate-400 font-medium space-y-0.5">
                      <h4 className="font-bold text-slate-700 text-xs">Student Enrollment Report</h4>
                      <p>Generated: Oct 24, 2023</p>
                      <p>Ref: #EDU-2023-0042</p>
                    </div>
                  </div>
                )}

                {/* EXECUTIVE SUMMARY SEGMENT */}
                <div className="bg-indigo-50/50 border border-indigo-100 rounded-xl p-4 mb-6">
                  <h4 className="text-xs font-bold text-indigo-900">Executive Summary</h4>
                  <p className="text-[10px] text-slate-500 font-medium leading-relaxed mt-1">
                    This report provides a comprehensive overview of the student enrollment status for the Fall 2023 Semester. Total active enrollments have increased by 12% compared to the previous academic year.
                  </p>
                </div>

                {/* MAIN RECORDS GRID DATA SHEET */}
                <table className="w-full text-left text-[10px] font-medium text-slate-600">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-800 font-bold bg-slate-50/30">
                      {columns.studentId && <th className="py-2 px-1 w-20">ID</th>}
                      {columns.fullName && <th className="py-2 px-1">Full Name</th>}
                      {columns.enrollmentDate && <th className="py-2 px-1 w-28">Enrollment Date</th>}
                      {columns.status && <th className="py-2 px-1 w-24">Status</th>}
                      {columns.contact && <th className="py-2 px-1">Contact Info</th>}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {reportData.map((row) => (
                      <tr key={row.id}>
                        {columns.studentId && <td className="py-2.5 px-1 font-mono text-slate-400 text-[9px]">{row.id}</td>}
                        {columns.fullName && <td className="py-2.5 px-1 font-bold text-slate-700">{row.name}</td>}
                        {columns.enrollmentDate && <td className="py-2.5 px-1 text-slate-400">{row.date}</td>}
                        {columns.status && (
                          <td className="py-2.5 px-1">
                            <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${row.statusStyle}`}>
                              {row.status}
                            </span>
                          </td>
                        )}
                        {columns.contact && <td className="py-2.5 px-1 text-slate-400">info@{row.id.toLowerCase()}.com</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* DRAFT SHEET WATERMARK FOOTER PAGE NUMBER */}
                {includePageNumbers && (
                  <div className="mt-16 pt-4 border-t border-slate-100 text-center text-[9px] font-bold tracking-wider text-slate-300">
                    PAGE 1 OF 4
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* ABSOLUTE STATIONED FOOTER CONTROLS DRAWER */}
          <footer className="absolute bottom-0 right-0 left-0 h-20 bg-white border-t border-slate-200 px-8 flex items-center justify-between shadow-2xl z-10 select-none">
            <span className="text-[11px] font-semibold text-slate-400">
              Estimated size: <span className="text-slate-700 font-bold">2.4 MB</span>
            </span>

            <div className="flex items-center gap-3">
              <button className="border border-indigo-200 bg-white hover:bg-indigo-50 text-indigo-700 text-xs font-bold px-5 h-11 rounded-xl flex items-center gap-2 transition-all shadow-sm">
                <Mail size={14} /> Send to Email
              </button>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-6 h-11 rounded-xl flex items-center gap-2 transition-all shadow-md shadow-indigo-100">
                <Download size={14} /> Download Now
              </button>
            </div>
          </footer>

        </div>

      </div>
    </div>
  );
}