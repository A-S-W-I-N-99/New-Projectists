import { useFaculty } from "../../context/FacultyContext";

const StatsCards = () => {

  const { facultyList } = useFaculty();


  // Total faculty count
  const totalFaculty = facultyList.length;


  // Active faculty count
  const activeFaculty = facultyList.filter(
    (faculty) => faculty.status === "Active"
  ).length;


  // Department count
  const departments = [
    ...new Set(
      facultyList.map(
        (faculty) => faculty.department
      )
    ),
  ].length;


  // On Leave percentage
  const onLeaveCount = facultyList.filter(
    (faculty) => faculty.status === "On Leave"
  ).length;


  const onLeavePercentage =
    totalFaculty === 0
      ? 0
      : Math.round(
          (onLeaveCount / totalFaculty) * 100
        );


  const stats = [
    {
      title: "Total Faculty",
      value: totalFaculty,
      color: "bg-blue-100 text-blue-700",
    },

    {
      title: "Active Faculty",
      value: activeFaculty,
      color: "bg-green-100 text-green-700",
    },

    {
      title: "Departments",
      value: departments,
      color: "bg-purple-100 text-purple-700",
    },

    {
      title: "On Leave",
      value: `${onLeavePercentage}%`,
      color: "bg-yellow-100 text-yellow-700",
    },
  ];


  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      {stats.map((stat,index)=>(
        <div
          key={index}
          className="bg-white rounded-2xl shadow-sm border p-6"
        >

          <div
            className={`inline-block px-3 py-1 rounded-lg text-sm font-semibold ${stat.color}`}
          >
            {stat.title}
          </div>


          <h2 className="text-3xl font-bold text-gray-800 mt-4">
            {stat.value}
          </h2>


          <p className="text-sm text-gray-500 mt-2">
            Updated automatically
          </p>

        </div>
      ))}

    </div>
  );
};


export default StatsCards;