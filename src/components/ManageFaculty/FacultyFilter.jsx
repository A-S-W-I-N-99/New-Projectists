const FacultyFilter = ({
  selectedDepartment,
  setSelectedDepartment,
  sortBy,
  setSortBy,
}) => {
  const departments = [
    "All",
    "Computer Science",
    "Engineering",
    "Sciences",
    "Humanities",
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-end gap-4 mb-4">
      {/* Department Filter */}
      <select
        value={selectedDepartment}
        onChange={(e) =>
          setSelectedDepartment(e.target.value)
        }
        className="border rounded-lg px-4 py-2 bg-white"
      >
        {departments.map((department) => (
          <option
            key={department}
            value={department}
          >
            {department}
          </option>
        ))}
      </select>

      {/* Sort Filter */}
      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(e.target.value)
        }
        className="border rounded-lg px-4 py-2 bg-white"
      >
        <option value="None">Sort By</option>
        <option value="name">
          Name (A-Z)
        </option>
        <option value="department">
          Department (A-Z)
        </option>
        <option value="status">
          Status
        </option>
      </select>
    </div>
  );
};

export default FacultyFilter;