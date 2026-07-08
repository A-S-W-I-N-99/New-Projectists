import { Routes, Route } from "react-router-dom";

import StudentLogin from "./pages/Login/StudentLogin";
import TeacherLogin from "./pages/Login/TeacherLogin";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StudentLogin />} />
      <Route path="/teacher-login" element={<TeacherLogin />} />
      <Route path="/dashboard" element={<TeacherDashboard />} />
      <Route path="/manage-faculty" element={<ManageFaculty />} />
      <Route path="/college-settings" element={<CollegeSettings />} />
      <Route path="/notification-center" element={<NotificationCenter />} />
    </Routes>
  );
}

export default App;