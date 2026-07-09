const FacultyTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    "All Faculty",
    "Active",
    "Inactive",
    "On Leave",
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-2 flex gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === tab
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default FacultyTabs;