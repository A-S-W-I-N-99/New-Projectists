import { NavLink } from "react-router-dom";

function SidebarLink({ icon, label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
          isActive
            ? "bg-indigo-100 text-indigo-700 border-r-4 border-indigo-700 rounded-r-none"
            : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}

export default SidebarLink;