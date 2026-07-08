const stats = [
  {
    id: 1,
    title: "Total Faculty",
    value: "342",
    color: "bg-indigo-500",
    change: "+12 this month",
  },
  {
    id: 2,
    title: "Active Faculty",
    value: "318",
    color: "bg-green-500",
    change: "93% Active",
  },
  {
    id: 3,
    title: "Departments",
    value: "18",
    color: "bg-blue-500",
    change: "Across Campus",
  },
  {
    id: 4,
    title: "On Leave",
    value: "24",
    color: "bg-yellow-500",
    change: "7% Faculty",
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">{card.title}</p>

              <h2 className="text-3xl font-bold mt-2 text-gray-800">
                {card.value}
              </h2>

              <p className="text-sm text-green-600 mt-3">
                {card.change}
              </p>
            </div>

            <div
              className={`w-14 h-14 rounded-full ${card.color} flex items-center justify-center text-white text-xl font-bold`}
            >
              {card.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;