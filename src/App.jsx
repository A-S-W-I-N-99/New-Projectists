import { Routes, Route } from "react-router-dom";

import StudentLogin from "./pages/Login/StudentLogin";
import TeacherLogin from "./pages/Login/TeacherLogin";
import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";

import ManageFaculty from "./pages/ManageFaculty/ManageFaculty";
import AddFaculty from "./pages/AddFaculty/AddFaculty";

import CollegeSettingsDashboard from "./pages/college-settings/CollegeSettingsDashboard";
import NotificationCenter from "./pages/notification-center/NotificationCenter";
import FeeStructureManagement from "./pages/fee-structure-management/FeeStructureManagement";
import GradesTranscript from "./pages/grades-transcript/GradesTranscript";
import UploadMarks from "./pages/upload-marks/UploadMarks";
import DegreeAudit from "./pages/degree-audit/DegreeAudit";
import ExportPreviews from "./pages/export-previews/ExportPreviews";

import NotFound from "./pages/Error/NotFound";

function App() {
  return (
    <Routes>
      {/* Login */}
      <Route path="/" element={<StudentLogin />} />
      <Route path="/teacher-login" element={<TeacherLogin />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<TeacherDashboard />} />

      {/* Faculty */}
      <Route path="/manage-faculty" element={<ManageFaculty />} />
      <Route path="/add-faculty" element={<AddFaculty />} />

      {/* Remaining Modules */}
      <Route
        path="/college-settings"
        element={<CollegeSettingsDashboard />}
      />
      <Route
        path="/notification-center"
        element={<NotificationCenter />}
      />
      <Route
        path="/fee-structure-management"
        element={<FeeStructureManagement />}
      />
      <Route
        path="/grades-transcript"
        element={<GradesTranscript />}
      />
      <Route
        path="/upload-marks"
        element={<UploadMarks />}
      />
      <Route
        path="/degree-audit"
        element={<DegreeAudit />}
      />
      <Route
        path="/export-previews"
        element={<ExportPreviews />}
      />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;