import { Routes, Route } from "react-router-dom";

import StudentLogin from "./pages/Login/StudentLogin";
import TeacherLogin from "./pages/Login/TeacherLogin";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";
import CollegeSettingsDashboard from "./pages/college-settings/CollegeSettingsDashboard";
import NotificationCenter from "./pages/notification-center/NotificationCenter";
import FeeStructureManagement from "./pages/fee-structure-management/FeeStructureManagement";
import GradesTranscript from "./pages/grades-transcript/GradesTranscript";
function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentLogin />} />
      <Route path="/teacher-login" element={<TeacherLogin />} />
      <Route path="/dashboard" element={<TeacherDashboard />} />
      <Route path="/college-settings" element={<CollegeSettingsDashboard />}/>
      <Route path="/notification-center" element={<NotificationCenter />} />
      <Route path="/fee-structure-management" element={<FeeStructureManagement />}/>
      <Route path="/grades-transcript" element={<GradesTranscript />} />
    </Routes>
  );
}

export default App;