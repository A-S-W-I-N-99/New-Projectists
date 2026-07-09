import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  CheckSquare, 
  GraduationCap, 
  FileText, 
  Search, 
  Bell, 
  Settings, 
  Wallet, 
  Wrench, 
  HelpCircle 
} from 'lucide-react';

export default function NotificationCenter() {
  const [activeTab, setActiveTab] = useState('All');
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);

  const navigationItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: false },
    { name: 'Timetable', icon: Calendar, active: false },
    { name: 'Attendance', icon: CheckSquare, active: false },
    { name: 'Grades', icon: GraduationCap, active: false },
    { name: 'Registration', icon: FileText, active: false },
  ];

  const tabs = ['All', 'Academic', 'Financial', 'General'];

  return (
    <div className="flex min-h-screen bg-[#F8F9FC] text-[#1E293B] font-sans antialiased">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-[#E2E8F0] flex flex-col justify-between p-6">
        <div>
          {/* Logo */}
          <div className="text-[#3B41E3] font-bold text-2xl tracking-tight mb-10 pl-2">
            EduFlow
          </div>

          {/* Navigation links */}
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  item.active 
                    ? 'bg-[#EEF2FF] text-[#3B41E3]' 
                    : 'text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B]'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* User profile section at bottom */}
        <div className="bg-[#EEF2FF] rounded-xl p-3 flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-[#C7D2FE] text-[#3B41E3] flex items-center justify-center font-bold text-sm">
            JD
          </div>
          <div>
            <div className="text-sm font-semibold text-[#1E293B]">John Doe</div>
            <div className="text-xs text-[#64748B]">ID: 2024-8842</div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col">
        
        {/* TOP BAR */}
        <header className="h-16 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-8">
          {/* Search Bar */}
          <div className="relative w-96">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-[#94A3B8]" />
            </span>
            <input
              type="text"
              placeholder="Search notifications, events..."
              className="w-full bg-[#F1F5F9] pl-10 pr-4 py-2 rounded-full text-sm text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B41E3]/20"
            />
          </div>

          {/* Settings & System Notification Icons */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-[#64748B] hover:text-[#1E293B] hover:bg-[#F1F5F9] rounded-full transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#EF4444] rounded-full border border-white"></span>
            </button>
            <button className="p-2 text-[#64748B] hover:text-[#1E293B] hover:bg-[#F1F5F9] rounded-full transition-colors">
              <Settings className="h-5 w-5" />
            </button>
            
            <div className="h-6 w-px bg-[#E2E8F0] mx-2"></div>

            <button className="bg-[#4F46E5] text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center space-x-2 shadow-sm shadow-[#4F46E5]/20 hover:bg-[#3B41E3] transition-colors">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </button>
          </div>
        </header>

        {/* CONTAINER WORKSPACE */}
        <main className="p-8 max-w-7xl w-full mx-auto grid grid-cols-3 gap-8">
          
          {/* LEFT/CENTER COLUMN: Notifications List */}
          <div className="col-span-2 space-y-6">
            <div>
              <div className="flex justify-between items-end mb-2">
                <h1 className="text-3xl font-bold tracking-tight text-[#0F172A]">Notification Center</h1>
                <button className="text-xs font-semibold text-[#4F46E5] hover:underline flex items-center space-x-1">
                  <span>✓ Mark all as read</span>
                </button>
              </div>
              <p className="text-sm text-[#64748B]">Stay updated with your campus activities and academic progress.</p>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-[#E2E8F0] flex space-x-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-medium transition-all relative ${
                    activeTab === tab ? 'text-[#3B41E3]' : 'text-[#64748B] hover:text-[#1E293B]'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#3B41E3] rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Notifications Stack */}
            <div className="space-y-4">
              
              {/* Card 1: Grade Published */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 flex items-start space-x-4 relative overflow-hidden shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3B41E3]"></div>
                <div className="w-1.5 h-1.5 bg-[#3B41E3] rounded-full absolute left-3 top-7"></div>
                
                <div className="p-2.5 bg-[#EEF2FF] rounded-xl text-[#3B41E3] mt-1 ml-2">
                  <GraduationCap className="h-5 w-5" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-base text-[#1E293B]">Grade Published: CS301 Algorithms</h3>
                    <span className="text-xs text-[#94A3B8]">2 hours ago</span>
                  </div>
                  <p className="text-sm text-[#64748B] mb-4">
                    Your final project grade for Analysis of Algorithms has been posted. You scored an <span className="font-semibold text-[#1E293B]">A-</span>.
                  </p>
                  <div className="flex space-x-3">
                    <button className="bg-[#3B41E3] text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#2563EB] transition-colors">View Grade</button>
                    <button className="border border-[#E2E8F0] text-[#64748B] px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#F1F5F9] transition-colors">Dismiss</button>
                  </div>
                </div>
              </div>

              {/* Card 2: Tuition Reminder */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 flex items-start space-x-4 shadow-sm">
                <div className="p-2.5 bg-[#E6F4EA] rounded-xl text-[#137333] mt-1">
                  <Wallet className="h-5 w-5" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-base text-[#1E293B]">Tuition Payment Reminder</h3>
                    <span className="text-xs text-[#94A3B8]">5 hours ago</span>
                  </div>
                  <p className="text-sm text-[#64748B] mb-4">
                    The second installment for Fall 2024 semester is due by <span className="font-semibold text-[#1E293B]">Friday, Oct 25th</span> to avoid late fees.
                  </p>
                  <div className="flex space-x-3">
                    <button className="bg-[#057A55] text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#046c4e] transition-colors">Pay Now</button>
                    <button className="border border-[#E2E8F0] text-[#64748B] px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#F1F5F9] transition-colors">Details</button>
                  </div>
                </div>
              </div>

              {/* Card 3: Timetable Change */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 flex items-start space-x-4 relative overflow-hidden shadow-sm">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3B41E3]"></div>
                <div className="w-1.5 h-1.5 bg-[#3B41E3] rounded-full absolute left-3 top-7"></div>
                
                <div className="p-2.5 bg-[#EEF2FF] rounded-xl text-[#3B41E3] mt-1 ml-2">
                  <Calendar className="h-5 w-5" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-base text-[#1E293B]">Timetable Change: Seminar Room</h3>
                    <span className="text-xs text-[#94A3B8]">Yesterday</span>
                  </div>
                  <p className="text-sm text-[#64748B] mb-4">
                    The Digital Ethics seminar on Thursday has been moved from Room 402 to the <span className="font-semibold text-[#1E293B]">Grand Hall Auditorium</span>.
                  </p>
                  <div className="flex space-x-3">
                    <button className="bg-[#3B41E3] text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#2563EB] transition-colors">Update Calendar</button>
                  </div>
                </div>
              </div>

              {/* Card 4: Library Portal Maintenance */}
              <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 flex items-start space-x-4 shadow-sm">
                <div className="p-2.5 bg-[#FFF4E5] rounded-xl text-[#B76E00] mt-1">
                  <Wrench className="h-5 w-5" />
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-semibold text-base text-[#1E293B]">Library Portal Maintenance</h3>
                    <span className="text-xs text-[#94A3B8]">2 days ago</span>
                  </div>
                  <p className="text-sm text-[#64748B]">
                    The online library resource portal will be offline for scheduled maintenance this Sunday from <span className="font-semibold text-[#1E293B]">2 AM to 6 AM</span>.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Sidebar Blocks */}
          <div className="space-y-6">
            
            {/* Preferences Panel */}
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm">
              <div className="flex items-center space-x-2 mb-1">
                <Settings className="h-4 w-4 text-[#3B41E3]" />
                <h2 className="font-bold text-base text-[#1E293B]">Quick Preferences</h2>
              </div>
              <p className="text-xs text-[#64748B] mb-5">Manage how you receive alerts from various departments.</p>

              <div className="space-y-4">
                {/* Push Toggle */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#1E293B]">Push Notifications</div>
                    <div className="text-[11px] text-[#94A3B8]">Mobile app alerts</div>
                  </div>
                  <button 
                    onClick={() => setPushEnabled(!pushEnabled)}
                    className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${pushEnabled ? 'bg-[#3B41E3]' : 'bg-[#E2E8F0]'}`}
                  >
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${pushEnabled ? 'translate-x-4' : 'translate-x-0'}`}></div>
                  </button>
                </div>

                {/* Email Toggle */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#1E293B]">Email Digests</div>
                    <div className="text-[11px] text-[#94A3B8]">Weekly summary</div>
                  </div>
                  <button 
                    onClick={() => setEmailEnabled(!emailEnabled)}
                    className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${emailEnabled ? 'bg-[#3B41E3]' : 'bg-[#E2E8F0]'}`}
                  >
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${emailEnabled ? 'translate-x-4' : 'translate-x-0'}`}></div>
                  </button>
                </div>

                {/* SMS Toggle */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#1E293B]">SMS Alerts</div>
                    <div className="text-[11px] text-[#94A3B8]">Urgent financial only</div>
                  </div>
                  <button 
                    onClick={() => setSmsEnabled(!smsEnabled)}
                    className={`w-9 h-5 flex items-center rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${smsEnabled ? 'bg-[#3B41E3]' : 'bg-[#E2E8F0]'}`}
                  >
                    <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-200 ${smsEnabled ? 'translate-x-4' : 'translate-x-0'}`}></div>
                  </button>
                </div>
              </div>

              <button className="w-full mt-5 border border-[#E2E8F0] text-[#3B41E3] font-semibold text-xs py-2 rounded-xl hover:bg-[#F8F9FC] transition-colors text-center block">
                All Notification Settings
              </button>
            </div>

            {/* Academic Status Card */}
            <div className="bg-[#3B41E3] text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-semibold text-sm opacity-90 mb-0.5">Academic Status</h3>
                <p className="text-[11px] opacity-70 mb-6">Based on recent notifications</p>
                
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl font-bold tracking-tight">94%</span>
                  <div>
                    <div className="text-[11px] font-medium opacity-90">Attendance Rate</div>
                    <div className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded mt-0.5 inline-block font-semibold">High Compliance</div>
                  </div>
                </div>
              </div>
              {/* Abstract subtle backdrop background circles */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            </div>

            {/* Help Block */}
            <div className="border border-dashed border-[#CBD5E1] rounded-2xl p-6 text-center bg-white/50">
              <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3 text-[#64748B]">
                <HelpCircle className="h-5 w-5" />
              </div>
              <h4 className="font-bold text-sm text-[#1E293B] mb-1">Need Help?</h4>
              <p className="text-xs text-[#64748B] max-w-[200px] mx-auto mb-3">
                Contact student services for clarification on any notification.
              </p>
              <a href="#" className="text-xs font-bold text-[#3B41E3] underline hover:text-[#2563EB]">
                Open Support Ticket
              </a>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}