import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
function TeacherLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e) => {
  e.preventDefault();

  alert("Login button clicked!");
};
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* Left Side */}
      <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-indigo-700 to-blue-600 text-white p-12">

  <div className="text-center max-w-md">

    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8">
      <span className="text-4xl">🎓</span>
    </div>

    <h1 className="text-5xl font-bold mb-4">
      EduCore Pro
    </h1>

    <p className="text-xl opacity-90 mb-8">
      College Management System
    </p>

    <p className="text-sm leading-7 opacity-80">
      Access your courses, attendance, grades, timetable and academic records from one secure portal.
    </p>

  </div>

</div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-slate-100">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

  <h2 className="text-3xl font-bold text-center mb-2">
   Student Login
  </h2>

  <p className="text-center text-slate-500 mb-8">
   Sign in to access your student portal
  </p>

 <form onSubmit={handleSubmit} className="space-y-5">
    <div>
      <label className="block text-sm font-medium mb-2">
        Email
      </label>

     <div className="relative">
  <Mail
    size={18}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
  />

  <input
    type="email"
    placeholder="Enter your email"
    className="w-full border border-slate-300 rounded-lg pl-10 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
</div>
    </div>

    <div>
      <label className="block text-sm font-medium mb-2">
        Password
      </label>

     <div className="relative">
      <Lock
  size={18}
  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
/>
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    className="w-full border border-slate-300 rounded-lg pl-10 pr-14 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
  >
    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
</div>
    </div>

    <div className="flex justify-between items-center text-sm">
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        Remember Me
      </label>

      <button
        type="button"
        className="text-indigo-600 hover:underline"
      >
        Forgot Password?
      </button>
    </div>

    <button
      type="submit"
      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
    >
    Student Login
    </button>

  </form>

</div>
        </div>
      </div>

    
  );
}

export default TeacherLogin;