export const exportFacultyCSV = (facultyList) => {
  if (!facultyList.length) {
    alert("No faculty data available to export.");
    return;
  }

  const headers = [
    "Faculty ID",
    "Name",
    "Department",
    "Designation",
    "Email",
    "Phone",
    "Status",
    "Joining Date",
    "Subjects",
  ];

  const rows = facultyList.map((faculty) => [
    faculty.id,
    faculty.name,
    faculty.department,
    faculty.designation,
    faculty.email,
    faculty.phone,
    faculty.status,
    faculty.joiningDate,
    Array.isArray(faculty.subjects)
      ? faculty.subjects.join(", ")
      : faculty.subjects,
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) =>
      row.map((item) => `"${item ?? ""}"`).join(",")
    ),
  ].join("\n");

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "Faculty_List.csv";

  link.click();

  URL.revokeObjectURL(url);
};