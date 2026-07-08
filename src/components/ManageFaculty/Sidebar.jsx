const menuItems = [
  { name: "Dashboard", active: false },
  { name: "Students", active: false },
  { name: "Faculty", active: true },
  { name: "Departments", active: false },
  { name: "Attendance", active: false },
  { name: "Examinations", active: false },
  { name: "Settings", active: false },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg border-r border-gray-200 flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="px-6 py-6 border-b">
          <h1 className="text-2xl font-bold text-indigo-600">
            EduManage
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            College Management System
          </p>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                item.active
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  item.active ? "bg-white" : "bg-gray-400"
                }`}
              ></div>

              <span className="font-medium">
                {item.name}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-5 border-t">
        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition">
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;