function SidebarLink({ icon, label, active = false }) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-indigo-100 text-indigo-700 border-r-4 border-indigo-700 rounded-r-none"
          : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export default SidebarLink;