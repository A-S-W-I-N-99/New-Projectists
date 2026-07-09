import { createContext, useContext, useEffect, useState } from "react";
import facultyData from "../data/facultyData";

const FacultyContext = createContext();

export const FacultyProvider = ({ children }) => {
  // Load from Local Storage or default data
  const [facultyList, setFacultyList] = useState(() => {
    const savedData = localStorage.getItem("facultyList");

    if (savedData) {
      return JSON.parse(savedData);
    }

    return facultyData;
  });

  // Save whenever facultyList changes
  useEffect(() => {
    localStorage.setItem("facultyList", JSON.stringify(facultyList));
  }, [facultyList]);

  // Dynamic Statistics
  const facultyStats = {
    total: facultyList.length,
    active: facultyList.filter(
      (faculty) => faculty.status === "Active"
    ).length,
    onLeave: facultyList.filter(
      (faculty) => faculty.status === "On Leave"
    ).length,
    inactive: facultyList.filter(
      (faculty) => faculty.status === "Inactive"
    ).length,
  };

  // Add Faculty
  const addFaculty = (newFaculty) => {
    setFacultyList((prev) => [...prev, newFaculty]);
  };

  // Delete Faculty
  const deleteFaculty = (id) => {
    setFacultyList((prev) =>
      prev.filter((faculty) => faculty.id !== id)
    );
  };

  // Update Faculty
  const updateFaculty = (updatedFaculty) => {
    setFacultyList((prev) =>
      prev.map((faculty) =>
        faculty.id === updatedFaculty.id
          ? updatedFaculty
          : faculty
      )
    );
  };

  return (
    <FacultyContext.Provider
      value={{
        facultyList,
        facultyStats,
        addFaculty,
        deleteFaculty,
        updateFaculty,
      }}
    >
      {children}
    </FacultyContext.Provider>
  );
};

export const useFaculty = () => {
  const context = useContext(FacultyContext);

  if (!context) {
    throw new Error(
      "useFaculty must be used inside FacultyProvider"
    );
  }

  return context;
};