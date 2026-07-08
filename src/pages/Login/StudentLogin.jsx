import { Link } from "react-router-dom";
import "../../styles/login.css";

function StudentLogin() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>VCET College Management System</h2>
        <h3>Student Login</h3>

        <input
          type="email"
          placeholder="Enter your email"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button>Login</button>

        <p className="forgot-password">
          <a href="#">Forgot Password?</a>
        </p>

        <p className="switch-login">
          Teacher? <Link to="/teacher-login">Teacher Login</Link>
        </p>
      </div>
    </div>
  );
}

export default StudentLogin;