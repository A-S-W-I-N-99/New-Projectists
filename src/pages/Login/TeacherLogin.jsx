import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

function TeacherLogin() {
    const navigate = useNavigate();
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>VCET College Management System</h2>
        <h3>Teacher Login</h3>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button onClick={() => navigate("/dashboard")}>
  Login
</button>

        <p className="forgot-password">
          <a href="#">Forgot Password?</a>
        </p>

        <p className="switch-login">
          Student? <Link to="/">Student Login</Link>
        </p>
      </div>
    </div>
  );
}

export default TeacherLogin;