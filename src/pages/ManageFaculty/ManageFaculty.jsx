import { useState } from "react";

import { useFaculty } from "../../context/FacultyContext";

import Sidebar from "../../components/ManageFaculty/Sidebar";
import Header from "../../components/ManageFaculty/Header";
import StatsCards from "../../components/ManageFaculty/StatsCards";
import FacultyTabs from "../../components/ManageFaculty/FacultyTabs";
import FacultyFilter from "../../components/ManageFaculty/FacultyFilter";
import FacultyTable from "../../components/ManageFaculty/FacultyTable";
import Pagination from "../../components/ManageFaculty/Pagination";

const ManageFaculty = () => {
  const { facultyList } = useFaculty();

  const [activeTab, setActiveTab] =
    useState("All Faculty");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedDepartment, setSelectedDepartment] =
    useState("All");

  // NEW: Sort State
  const [sortBy, setSortBy] =
    useState("None");

  // Pagination
  const [currentPage, setCurrentPage] =
    useState(1);

  const itemsPerPage = 5;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <main className="p-6 space-y-6">
          {/* Statistics */}
          <StatsCards />

          {/* Tabs */}
          <FacultyTabs
            activeTab={activeTab}
            setActiveTab={(tab) => {
              setActiveTab(tab);
              setCurrentPage(1);
            }}
          />

          {/* Department Filter + Sort */}
          <FacultyFilter
            selectedDepartment={selectedDepartment}
            setSelectedDepartment={(dept) => {
              setSelectedDepartment(dept);
              setCurrentPage(1);
            }}
            sortBy={sortBy}
            setSortBy={(value) => {
              setSortBy(value);
              setCurrentPage(1);
            }}
          />

          {/* Faculty Table */}
          <FacultyTable
            activeTab={activeTab}
            searchTerm={searchTerm}
            selectedDepartment={selectedDepartment}
            sortBy={sortBy}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
          />

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={facultyList.length}
            itemsPerPage={itemsPerPage}
          />
        </main>
      </div>
    </div>
  );
};

export default ManageFaculty;