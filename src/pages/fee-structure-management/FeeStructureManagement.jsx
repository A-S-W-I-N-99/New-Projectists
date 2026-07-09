import React, { useState } from 'react';
import {
  LayoutDashboard,
  UserCheck,
  FileText,
  Calendar,
  Users,
  Wallet,
  Search,
  Bell,
  History,
  HelpCircle,
  Settings,
  Download,
  Plus,
  Sliders,
  CheckCircle,
  SlidersHorizontal,
  Edit2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Clock
} from 'lucide-react';

export default function FeeStructureManagement() {
  const [activeTab, setActiveTab] = useState('All');

  const navigationItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Enrollment', icon: UserCheck },
    { name: 'Academic Records', icon: FileText },
    { name: 'Scheduling', icon: Calendar },
    { name: 'Faculty Management', icon: Users },
    { name: 'Financials', icon: Wallet, active: true },
  ];

  const tabs = ['All', 'Tuition', 'Auxiliary'];

  const feeData = [
    {
      name: 'Standard Undergraduate Tuition',
      subtext: 'Tier 1 - Domestic',
      scope: 'University Wide',
      category: 'Undergraduate',
      categoryColor: 'bg-[#EEF2FF] text-[#4F46E5]',
      amount: '$12,500.00',
      frequency: 'Per Semester',
      status: 'ACTIVE',
      statusColor: 'text-[#16A34A]'
    },
    {
      name: 'Engineering Lab Surcharge',
      subtext: 'Equipment maintenance',
      scope: 'Dept. of Mechanical Engineering',
      category: 'Department Specific',
      categoryColor: 'bg-[#EFF6FF] text-[#1D4ED8]',
      amount: '$450.00',
      frequency: 'Per Semester',
      status: 'ACTIVE',
      statusColor: 'text-[#16A34A]'
    },
    {
      name: 'International Student Levy',
      subtext: 'Compliance & Support',
      scope: 'International Office',
      category: 'International',
      categoryColor: 'bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]',
      amount: '$1,200.00',
      frequency: 'Per Year',
      status: 'ACTIVE',
      statusColor: 'text-[#16A34A]'
    },
    {
      name: 'Tech Innovation Fee',
      subtext: 'Software licensing',
      scope: 'IT Services',
      category: 'All Students',
      categoryColor: 'bg-[#EEF2FF] text-[#4F46E5]',
      amount: '$75.00',
      frequency: 'Per Semester',
      status: 'DRAFT',
      statusColor: 'text-[#64748B]'
    }
  ];

  return (
    <div className="flex min-h-screen bg-[#F8F9FC] text-[#1E293B] font-sans antialiased">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-[#E2E8F0] flex flex-col justify-between p-4">
        <div>
          {/* Logo Branding */}
          <div className="mb-8 pl-3 pt-2">
            <div className="text-[#3B41E3] font-bold text-2xl tracking-tight">EduFlow</div>
            <div className="text-xs text-[#94A3B8] font-medium tracking-wide">Admin Suite</div>
          </div>

          {/* Main Navigation Links */}
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  item.active 
                    ? 'bg-[#4F46E5] text-white shadow-sm' 
                    : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B]'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Lower Sidebar Actions */}
        <div className="space-y-4">
          <button className="w-full bg-[#3B41E3] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#2563EB] transition-colors shadow-sm">
            Generate Reports
          </button>
          
          <div className="border-t border-[#E2E8F0] pt-4 space-y-1">
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-semibold text-[#64748B] hover:bg-[#F1F5F9] transition-colors">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </a>
            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-semibold text-[#64748B] hover:bg-[#F1F5F9] transition-colors">
              <HelpCircle className="h-4 w-4" />
              <span>Support</span>
            </a>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        
        {/* HEADER TOP BAR */}
        <header className="h-16 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-8 sticky top-0 z-40">
          {/* Universal Search Bar */}
          <div className="relative w-96">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-[#94A3B8]" />
            </span>
            <input
              type="text"
              placeholder="Search fee structures or records..."
              className="w-full bg-[#F1F5F9] pl-10 pr-4 py-2 rounded-full text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none border border-transparent focus:border-[#E2E8F0]"
            />
          </div>

          {/* Quick Actions & Profile Metadata */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-[#64748B] hover:text-[#1E293B] hover:bg-[#F1F5F9] rounded-full transition-colors relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#EF4444] rounded-full"></span>
            </button>
            <button className="p-2 text-[#64748B] hover:text-[#1E293B] hover:bg-[#F1F5F9] rounded-full transition-colors">
              <History className="h-4 w-4" />
            </button>
            <button className="p-2 text-[#64748B] hover:text-[#1E293B] hover:bg-[#F1F5F9] rounded-full transition-colors">
              <HelpCircle className="h-4 w-4" />
            </button>
            
            <div className="h-6 w-px bg-[#E2E8F0] mx-1"></div>

            {/* Profile Summary Card */}
            <div className="flex items-center space-x-3 pl-1">
              <div className="text-right">
                <div className="text-xs font-bold text-[#1E293B]">Admin User</div>
                <div className="text-[10px] text-[#94A3B8] font-medium">Central Office</div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Admin avatar Profile"
                className="w-8 h-8 rounded-full bg-slate-200 border border-[#E2E8F0] object-cover"
              />
            </div>
          </div>
        </header>

        {/* ACTION PANEL WORKSPACE CONTAINER */}
        <main className="p-8 max-w-[1400px] w-full mx-auto space-y-6">
          
          {/* Dashboard Module Title Area */}
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-[#0F172A] mb-1">Fee Structure Management</h1>
              <p className="text-xs text-[#64748B]">Configure tuition, auxiliary fees, and financial policies for the Academic Year 2024/25.</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="bg-white border border-[#E2E8F0] text-[#4F46E5] text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#F8F9FC] transition-colors flex items-center space-x-2 shadow-sm">
                <Download className="h-3.5 w-3.5" />
                <span>Export PDF</span>
              </button>
              <button className="bg-[#4F46E5] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#3B41E3] transition-colors flex items-center space-x-1.5 shadow-sm">
                <Plus className="h-4 w-4" />
                <span>Add New Fee</span>
              </button>
            </div>
          </div>

          {/* TOP METRICS GRID DISPLAY */}
          <div className="grid grid-cols-3 gap-6">
            
            {/* Metric Box 1: Projected Revenue */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-[#EEF2FF] rounded-xl text-[#3B41E3]">
                  <Wallet className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-bold bg-[#E6F4EA] text-[#137333] px-2 py-0.5 rounded-full flex items-center space-x-0.5">
                  <TrendingUp className="h-3 w-3 mr-0.5" />
                  <span>+12.5% vs LY</span>
                </span>
              </div>
              <div className="mt-4">
                <span className="text-[10px] font-bold tracking-wider text-[#94A3B8] uppercase block mb-1">Projected Total Revenue</span>
                <span className="text-2xl font-extrabold text-[#0F172A] tracking-tight">$24,840,500</span>
                <span className="text-xs text-[#64748B] block mt-1">Based on 14,200 confirmed enrollments.</span>
              </div>
            </div>

            {/* Metric Box 2: Deadlines & Rules */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-sm font-bold text-[#0F172A]">Deadlines & Rules</h2>
                <button className="text-[11px] font-bold text-[#4F46E5] hover:underline">Edit Rules</button>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
                  <span className="text-[#64748B]">Payment Deadline:</span>
                  <span className="font-semibold text-[#1E293B]">Aug 25, 2024</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#F1F5F9]">
                  <span className="text-[#64748B]">Late Fee Buffer:</span>
                  <span className="font-semibold text-[#1E293B]">5 Business Days</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#64748B]">Late Penalty:</span>
                  <span className="font-semibold text-[#1E293B]">$150.00 Flat Fee</span>
                </div>
              </div>
            </div>

            {/* Metric Box 3: Category Distribution Chart summary */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-bold text-[#0F172A] mb-4">Category Distribution</h2>
              <div className="space-y-3">
                {/* Undergrad Progress item */}
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#64748B] font-medium">Undergraduate (65%)</span>
                    <span className="font-bold text-[#1E293B]">$16.1M</span>
                  </div>
                  <div className="w-full bg-[#F1F5F9] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#3B41E3] h-full w-[65%] rounded-full"></div>
                  </div>
                </div>
                {/* Grad Progress item */}
                <div>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span className="text-[#64748B] font-medium">Graduate (25%)</span>
                    <span className="font-bold text-[#1E293B]">$6.2M</span>
                  </div>
                  <div className="w-full bg-[#F1F5F9] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#0D9488] h-full w-[25%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* MAIN FEE TABLES LIST CARD */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm">
            
            {/* Table Controller Header actions */}
            <div className="p-4 border-b border-[#E2E8F0] flex justify-between items-center bg-white">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-bold text-[#0F172A]">Fee Master List</span>
                {/* Category Sort Segment Pills */}
                <div className="bg-[#F1F5F9] p-0.5 rounded-xl flex space-x-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                        activeTab === tab 
                          ? 'bg-white text-[#3B41E3] shadow-sm' 
                          : 'text-[#64748B] hover:text-[#1E293B]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <button className="border border-[#E2E8F0] hover:bg-[#F8F9FC] text-[#64748B] text-xs font-bold px-3 py-1.5 rounded-xl flex items-center space-x-1.5 transition-colors">
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>Filters</span>
              </button>
            </div>

            {/* TABULAR HOVER ROWS */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    <th className="py-3 px-6 w-1/4">Fee Name</th>
                    <th className="py-3 px-4">Department / Scope</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Frequency</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9] text-xs">
                  {feeData.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-[#F8FAFC] transition-colors group">
                      <td className="py-4 px-6 font-semibold text-[#1E293B]">
                        <div>{fee.name}</div>
                        {fee.subtext && <div className="text-[10px] font-medium text-[#94A3B8] mt-0.5">{fee.subtext}</div>}
                      </td>
                      <td className="py-4 px-4 text-[#64748B] font-medium">{fee.scope}</td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${fee.categoryColor}`}>
                          {fee.category}
                        </span>
                      </td>
                      <td className="py-4 px-4 font-bold text-[#1E293B]">{fee.amount}</td>
                      <td className="py-4 px-4 text-[#64748B] font-medium">{fee.frequency}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${fee.status === 'ACTIVE' ? 'bg-[#16A34A]' : 'bg-[#64748B]'}`}></span>
                          <span className={`font-bold text-[11px] ${fee.statusColor}`}>{fee.status}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button className="p-1.5 text-[#64748B] hover:text-[#3B41E3] hover:bg-[#EEF2FF] rounded-lg transition-colors inline-flex items-center">
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer Pagination Controls */}
            <div className="p-4 bg-white border-t border-[#E2E8F0] flex justify-between items-center text-xs text-[#64748B] font-medium">
              <span>Showing 1-10 of 42 fee entries</span>
              <div className="flex items-center space-x-1">
                <button className="p-1.5 border border-[#E2E8F0] rounded-lg hover:bg-[#F8F9FC] disabled:opacity-50 text-[#1E293B]" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button className="p-1.5 border border-[#E2E8F0] rounded-lg hover:bg-[#F8F9FC] text-[#1E293B]">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>

          {/* BOTTOM INTERACTIVE DECK PANELS */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Panel 1: Revenue Modeler */}
            <div className="bg-[#EEF2FF] border border-[#C7D2FE] rounded-2xl p-5 flex items-center space-x-4 shadow-sm group hover:border-[#3B41E3] transition-colors">
              <div className="p-3 bg-white rounded-xl text-[#3B41E3] border border-[#E2E8F0] shadow-sm">
                <Sliders className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-[#1E293B] mb-0.5">Revenue Modeler</h3>
                <p className="text-xs text-[#64748B] max-w-sm mb-2">Simulate the impact of changing tuition rates on total institutional revenue.</p>
                <a href="#" className="text-xs font-bold text-[#3B41E3] hover:underline flex items-center">
                  <span>Run Simulation</span>
                  <span className="ml-1 transform group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Panel 2: Compliance Check */}
            <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-5 flex items-center space-x-4 shadow-sm group hover:border-[#1D4ED8] transition-colors">
              <div className="p-3 bg-white rounded-xl text-[#10B981] border border-[#E2E8F0] shadow-sm">
                <CheckCircle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-sm text-[#1E293B] mb-0.5">Compliance Check</h3>
                <p className="text-xs text-[#64748B] max-w-sm mb-2">Ensure your fee structures meet latest state and federal accessibility regulations.</p>
                <a href="#" className="text-xs font-bold text-[#1D4ED8] hover:underline flex items-center">
                  <span>Review Policy</span>
                  <span className="ml-1 transform group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}