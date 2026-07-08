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
    </Routes>
  );
}

export default App;