import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useFaculty } from "../../context/FacultyContext";

const AddFaculty = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    facultyList,
    addFaculty,
    updateFaculty,
  } = useFaculty();

  const editingFaculty = location.state?.faculty;

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    subjects: "",
    joiningDate: "",
    status: "Active",
    image: "https://i.pravatar.cc/100?img=12",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingFaculty) {
      setFormData({
        id: editingFaculty.id,
        name: editingFaculty.name || "",
        email: editingFaculty.email || "",
        phone: editingFaculty.phone || "",
        department: editingFaculty.department || "",
        designation: editingFaculty.designation || "",
        subjects: (editingFaculty.subjects || []).join(", "),
        joiningDate: editingFaculty.joiningDate || "",
        status: editingFaculty.status || "Active",
        image:
          editingFaculty.image ||
          "https://i.pravatar.cc/100?img=12",
      });
    }
  }, [editingFaculty]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = "Invalid email address";
    }

    const emailExists = facultyList.some(
      (faculty) =>
        faculty.email.toLowerCase() ===
          formData.email.toLowerCase() &&
        faculty.id !== formData.id
    );

    if (emailExists) {
      newErrors.email = "Email already exists";
    }

    if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone =
        "Phone number must contain exactly 10 digits";
    }

    if (!formData.department) {
      newErrors.department = "Department is required";
    }

    if (!formData.designation) {
      newErrors.designation = "Designation is required";
    }

    if (!formData.subjects.trim()) {
      newErrors.subjects =
        "Please enter at least one subject";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const faculty = {
      id: editingFaculty
        ? formData.id
        : `FAC-${Date.now()}`,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      department: formData.department,
      designation: formData.designation,
      joiningDate: formData.joiningDate,
      subjects: formData.subjects
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      status: formData.status,
      image: formData.image,
    };

    if (editingFaculty) {
      updateFaculty(faculty);
    } else {
      addFaculty(faculty);
    }

    navigate("/manage-faculty");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {editingFaculty
            ? "Edit Faculty"
            : "Add New Faculty"}
        </h1>

        <p className="text-gray-500 mb-8">
          {editingFaculty
            ? "Update faculty information."
            : "Add new faculty members and academic information."}
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="">Select Department</option>
              <option>Computer Science</option>
              <option>Engineering</option>
              <option>Sciences</option>
              <option>Humanities</option>
            </select>

            {errors.department && (
              <p className="text-red-500 text-sm mt-1">
                {errors.department}
              </p>
            )}
          </div>
                    <div>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option value="">Select Designation</option>
              <option>Professor</option>
              <option>Associate Professor</option>
              <option>Assistant Professor</option>
            </select>

            {errors.designation && (
              <p className="text-red-500 text-sm mt-1">
                {errors.designation}
              </p>
            )}
          </div>

          <div>
            <input
              type="date"
              name="joiningDate"
              value={formData.joiningDate}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />
          </div>

          <div className="md:col-span-2">
            <input
              type="text"
              name="subjects"
              placeholder="Subjects (comma separated)"
              value={formData.subjects}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />

            {errors.subjects && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subjects}
              </p>
            )}
          </div>

          <div className="md:col-span-2 flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Active"
                checked={formData.status === "Active"}
                onChange={handleChange}
              />
              Active
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="Inactive"
                checked={formData.status === "Inactive"}
                onChange={handleChange}
              />
              Inactive
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="status"
                value="On Leave"
                checked={formData.status === "On Leave"}
                onChange={handleChange}
              />
              On Leave
            </label>
          </div>

          <div className="md:col-span-2 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => navigate("/manage-faculty")}
              className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition"
            >
              {editingFaculty
                ? "Update Faculty"
                : "Save Faculty"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFaculty;