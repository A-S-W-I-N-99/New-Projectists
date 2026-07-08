import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import StatCard from "../../components/StatCard";
import TableRow from "../../components/TableRow";
import ActivityItem from "../../components/ActivityItem";
import ActionCard from "../../components/ActionCard";

import {
  Users,
  GraduationCap,
  CheckSquare,
  AlertTriangle,
  Calendar,
  FileText,
  Bell,
  Clock,
} from "lucide-react";

function TeacherDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
              <p className="text-slate-500 mt-2">
                Good morning, Dr. Fisher. Here's what's happening today.
              </p>
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg">
              New Assessment
            </button>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard
              icon={<Users className="text-indigo-700" />}
              title="Total Students"
              value="1,284"
              badge="+12%"
              badgeType="success"
            />

            <StatCard
              icon={<GraduationCap className="text-green-600" />}
              title="Active Faculty"
              value="92"
              badge="Active Now"
              badgeType="info"
            />

            <StatCard
              icon={<CheckSquare className="text-yellow-600" />}
              title="Today's Attendance"
              value="94.2%"
              badge="Stable"
              badgeType="neutral"
            />

            <StatCard
              icon={<AlertTriangle className="text-red-600" />}
              title="Pending Marks"
              value="08"
              badge="Urgent"
              badgeType="danger"
            />
          </div>

          {/* Table + Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center p-6 border-b border-slate-200">
                <h2 className="text-lg font-bold">Subject Performance</h2>

                <button className="text-indigo-600 font-semibold">
                  View All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left px-4 py-3">Subject</th>
                      <th className="text-left px-4 py-3">Average Grade</th>
                      <th className="text-left px-4 py-3">Submissions</th>
                      <th className="text-left px-4 py-3">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <TableRow
                      subject="Advanced Mathematics"
                      grade="A- (88%)"
                      submissions="42/45"
                      status="ON TRACK"
                      statusType="success"
                    />

                    <TableRow
                      subject="Quantum Physics"
                      grade="B+ (84%)"
                      submissions="38/40"
                      status="ON TRACK"
                      statusType="success"
                    />

                    <TableRow
                      subject="Data Structures"
                      grade="C+ (72%)"
                      submissions="25/45"
                      status="ACTION REQUIRED"
                      statusType="danger"
                    />
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-bold mb-6">Recent Activity</h2>

              <div className="space-y-5">
                <ActivityItem
                  icon={<Calendar size={16} className="text-white" />}
                  iconBg="bg-blue-600"
                  title="Timetable updated"
                  desc="New classroom allocated."
                  time="15 MIN AGO"
                />

                <ActivityItem
                  icon={<FileText size={16} className="text-white" />}
                  iconBg="bg-green-600"
                  title="Marks uploaded"
                  desc="Physics grading completed."
                  time="2 HOURS AGO"
                />

                <ActivityItem
                  icon={<Users size={16} className="text-white" />}
                  iconBg="bg-yellow-500"
                  title="5 New Students"
                  desc="Batch 2024-C enrolled."
                  time="YESTERDAY"
                />
              </div>
            </div>
          </div>

          {/* Quick Actions + Next Lecture */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
              <ActionCard
                icon={<Calendar size={24} className="text-indigo-600" />}
                label="Generate Timetable"
              />

              <ActionCard
                icon={<CheckSquare size={24} className="text-green-600" />}
                label="Mark Attendance"
              />

              <ActionCard
                icon={<Bell size={24} className="text-amber-500" />}
                label="Send Notice"
              />
            </div>

            <div className="bg-indigo-600 text-white rounded-xl p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest opacity-80">
                  Next Lecture
                </p>

                <div className="flex gap-3 mt-4">
                  <Clock />

                  <div>
                    <h3 className="text-xl font-bold">
                      Advanced Physics
                    </h3>

                    <p className="text-sm opacity-80">
                      11:30 AM • Hall 4B
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-white text-indigo-700 py-3 rounded-lg font-semibold">
                Join Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;