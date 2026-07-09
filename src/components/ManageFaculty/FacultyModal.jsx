const FacultyModal = ({ faculty, onClose }) => {
  if (!faculty) return null;

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
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl"
        >
          ×
        </button>

        <div className="flex items-center gap-4 mb-6">
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-24 h-24 rounded-full object-cover"
          />

          <div>
            <h2 className="text-2xl font-bold">
              {faculty.name}
            </h2>

            <p>{faculty.designation}</p>

            <span
              className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                faculty.status
              )}`}
            >
              {faculty.status}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <p><strong>ID:</strong> {faculty.id}</p>
          <p><strong>Email:</strong> {faculty.email}</p>
          <p><strong>Phone:</strong> {faculty.phone}</p>
          <p><strong>Department:</strong> {faculty.department}</p>

          <div>
            <strong>Subjects:</strong>

            <div className="flex flex-wrap gap-2 mt-2">
              {(faculty.subjects || []).map((subject, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FacultyModal;