import {
  Routes,
  Route,
} from "react-router-dom";

import TeacherDashboard from "./pages/Dashboard/TeacherDashboard";
import ManageFaculty from "./pages/ManageFaculty/ManageFaculty";
import AddFaculty from "./pages/AddFaculty/AddFaculty";
import TeacherLogin from "./pages/Login/TeacherLogin";
import StudentLogin from "./pages/Login/StudentLogin";
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

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    
  );
}

export default App;