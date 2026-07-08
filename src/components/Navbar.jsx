import { Search, Bell, HelpCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between">

      {/* Search Box */}
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-3 top-3 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search for students, subjects, or records"
          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        <Bell
          className="text-slate-500 cursor-pointer"
          size={20}
        />

        <HelpCircle
          className="text-slate-500 cursor-pointer"
          size={20}
        />

        <div className="flex items-center gap-3 border-l pl-6">

          <div className="text-right">
            <h4 className="font-semibold">
              Dr. Elena Fisher
            </h4>

            <p className="text-xs text-slate-500">
              Senior Professor
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

        </div>

      </div>

    </header>
  );
}

export default Navbar;