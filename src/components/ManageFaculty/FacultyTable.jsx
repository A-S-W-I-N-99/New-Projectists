import facultyData from "../../data/facultyData";

const FacultyTable = () => {
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

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Faculty
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Department
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Designation
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Subjects
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Email
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                Phone
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {facultyData.map((faculty) => (
              <tr
                key={faculty.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-800">
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
                  <div className="flex flex-wrap gap-2">
                    {faculty.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs"
                      >
                        {subject}
                      </span>
                    ))}
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
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      faculty.status
                    )}`}
                  >
                    {faculty.status}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm">
                      View
                    </button>

                    <button className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm">
                      Edit
                    </button>

                    <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyTable;