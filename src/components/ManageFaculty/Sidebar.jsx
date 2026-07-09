import {
  LayoutDashboard,
  BookOpen,
  Calendar,
  CheckSquare,
  GraduationCap,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

// ✅ Correct import
import SidebarLink from "../SidebarLink";

function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-4">
      <div>
        <div className="mb-8 px-4">
          <h1 className="text-xl font-bold text-indigo-700">
            EduCore Pro
          </h1>

          <p className="text-xs text-slate-500">
            Campus Management
          </p>
        </div>

        <nav className="space-y-1">
          <SidebarLink
            icon={<LayoutDashboard size={20} />}
            label="Dashboard"
            to="/dashboard"
          />

          <SidebarLink
            icon={<BookOpen size={20} />}
            label="Subjects"
            to="/subjects"
          />

          <SidebarLink
            icon={<Calendar size={20} />}
            label="Timetable"
            to="/timetable"
          />

          <SidebarLink
            icon={<CheckSquare size={20} />}
            label="Attendance"
            to="/attendance"
          />

          <SidebarLink
            icon={<GraduationCap size={20} />}
            label="Grading"
            to="/grading"
          />

          <SidebarLink
            icon={<Users size={20} />}
            label="Faculty"
            to="/manage-faculty"
          />

          <SidebarLink
            icon={<Users size={20} />}
            label="Students"
            to="/students"
          />
        </nav>
      </div>

      <div className="border-t border-slate-200 pt-4 space-y-1">
        <SidebarLink
          icon={<Settings size={20} />}
          label="Settings"
          to="/settings"
        />

        <SidebarLink
          icon={<LogOut size={20} />}
          label="Logout"
          to="/"
        />
      </div>
    </aside>
  );
}

export default Sidebar;