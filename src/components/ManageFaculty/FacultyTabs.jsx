const tabs = [
  "All Faculty",
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Mechanical",
  "Civil",
];

const FacultyTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              activeTab === tab
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right Side Buttons */}
      <div className="flex gap-3">
        <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-sm font-medium">
          Filter
        </button>

        <button className="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-sm font-medium">
          Export
        </button>
      </div>
    </div>
  );
};

export default FacultyTabs;