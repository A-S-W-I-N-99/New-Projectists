import { useState } from "react";

import Sidebar from "../../components/ManageFaculty/Sidebar";
import Header from "../../components/ManageFaculty/Header";
import StatsCards from "../../components/ManageFaculty/StatsCards";
import FacultyTabs from "../../components/ManageFaculty/FacultyTabs";
import FacultyTable from "../../components/ManageFaculty/FacultyTable";
import Pagination from "../../components/ManageFaculty/Pagination";

const ManageFaculty = () => {
  const [activeTab, setActiveTab] = useState("All Faculty");

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        <main className="p-6 space-y-6">
          {/* Statistics */}
          <StatsCards />

          {/* Tabs and Filters */}
          <FacultyTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Faculty Table */}
          <FacultyTable />

          {/* Pagination */}
          <Pagination />
        </main>
      </div>
    </div>
  );
};

export default ManageFaculty;