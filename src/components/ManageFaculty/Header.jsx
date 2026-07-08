const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Manage Faculty
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage faculty members, departments and academic information.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search faculty..."
            className="w-72 rounded-xl border border-gray-300 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            />
          </svg>
        </div>

        {/* Add Faculty Button */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-xl font-medium transition">
          + Add Faculty
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Admin"
            className="w-10 h-10 rounded-full border"
          />

          <div>
            <h3 className="text-sm font-semibold text-gray-700">
              Admin
            </h3>
            <p className="text-xs text-gray-500">
              Super Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;