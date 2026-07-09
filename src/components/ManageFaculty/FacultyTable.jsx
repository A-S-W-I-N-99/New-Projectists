import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFaculty } from "../../context/FacultyContext";
import FacultyModal from "./FacultyModal";

const FacultyTable = ({
  searchTerm = "",
  activeTab = "All Faculty",
  selectedDepartment = "All",
  sortBy = "None",
  currentPage = 1,
  setCurrentPage,
  itemsPerPage = 5,
}) => {
  const navigate = useNavigate();

  const [selectedFaculty, setSelectedFaculty] =
    useState(null);

  const { facultyList, deleteFaculty } =
    useFaculty();

  useEffect(() => {
    if (setCurrentPage) {
      setCurrentPage(1);
    }
  }, [
    searchTerm,
    activeTab,
    selectedDepartment,
    sortBy,
    setCurrentPage,
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "On Leave":
        return "bg-yellow-100 text-yellow-700";

      case "Inactive":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this faculty?"
    );

    if (confirmDelete) {
      deleteFaculty(id);
    }
  };

  // Search + Filters

  const filteredFaculty = facultyList.filter(
    (faculty) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        (faculty.name || "")
          .toLowerCase()
          .includes(search) ||
        (faculty.email || "")
          .toLowerCase()
          .includes(search) ||
        (faculty.department || "")
          .toLowerCase()
          .includes(search) ||
        (faculty.designation || "")
          .toLowerCase()
          .includes(search);

      const matchesDepartment =
        selectedDepartment === "All" ||
        faculty.department ===
          selectedDepartment;

      const matchesStatus =
        activeTab === "All Faculty" ||
        faculty.status === activeTab;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus
      );
    }
  );

  // Sorting

  const sortedFaculty = [...filteredFaculty];

  switch (sortBy) {
    case "name":
      sortedFaculty.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      break;

    case "department":
      sortedFaculty.sort((a, b) =>
        a.department.localeCompare(
          b.department
        )
      );
      break;

    case "status":
      sortedFaculty.sort((a, b) =>
        a.status.localeCompare(b.status)
      );
      break;

    default:
      break;
  }

  // Pagination

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const paginatedFaculty =
    sortedFaculty.slice(
      startIndex,
      startIndex + itemsPerPage
    );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left">
                Faculty
              </th>

              <th className="px-6 py-4 text-left">
                Department
              </th>

              <th className="px-6 py-4 text-left">
                Designation
              </th>

              <th className="px-6 py-4 text-left">
                Subjects
              </th>

              <th className="px-6 py-4 text-left">
                Email
              </th>

              <th className="px-6 py-4 text-left">
                Phone
              </th>

              <th className="px-6 py-4 text-center">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedFaculty.length === 0 ? (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-10 text-gray-500"
                >
                  No faculty found
                </td>
              </tr>
            ) : (
              paginatedFaculty.map((faculty) => (
                                <tr
                  key={faculty.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          faculty.image ||
                          "https://i.pravatar.cc/100"
                        }
                        alt={faculty.name}
                        className="w-12 h-12 rounded-full"
                      />

                      <div>
                        <h3 className="font-semibold">
                          {faculty.name}
                        </h3>

                        <p className="text-xs text-gray-500">
                          {faculty.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    {faculty.department}
                  </td>

                  <td className="px-6 py-4">
                    {faculty.designation}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2 flex-wrap">
                      {faculty.subjects?.map(
                        (subject, index) => (
                          <span
                            key={index}
                            className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs"
                          >
                            {subject}
                          </span>
                        )
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    {faculty.email}
                  </td>

                  <td className="px-6 py-4">
                    {faculty.phone}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${getStatusColor(
                        faculty.status
                      )}`}
                    >
                      {faculty.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() =>
                          setSelectedFaculty(faculty)
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
                      >
                        View
                      </button>

                      <button
                        onClick={() =>
                          navigate("/add-faculty", {
                            state: { faculty },
                          })
                        }
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(faculty.id)
                        }
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedFaculty && (
        <FacultyModal
          faculty={selectedFaculty}
          onClose={() =>
            setSelectedFaculty(null)
          }
        />
      )}
    </div>
  );
};

export default FacultyTable;