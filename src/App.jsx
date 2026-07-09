import { Routes, Route } from "react-router-dom";

import StudentLogin from "./pages/Login/StudentLogin";
import TeacherLogin from "./pages/Login/TeacherLogin";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";
import ManageFaculty from "./pages/ManageFaculty/ManageFaculty";
import AddFaculty from "./pages/AddFaculty/AddFaculty";
// import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<StudentLogin />} />
      <Route
        path="/teacher-login"
        element={<TeacherLogin />}
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={<TeacherDashboard />}
      />

      {/* Faculty */}
      <Route
        path="/manage-faculty"
        element={<ManageFaculty />}
      />

      <Route
        path="/add-faculty"
        element={<AddFaculty />}
      />

      {/* Future Modules */}
      {/* <Route path="/college-settings" element={<CollegeSettings />} /> */}
      {/* <Route path="/notification-center" element={<NotificationCenter />} /> */}
      {/* <Route path="/grades-transcript" element={<GradesTranscript />} /> */}
      {/* <Route path="/upload-marks" element={<UploadMarks />} /> */}

      {/* 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;