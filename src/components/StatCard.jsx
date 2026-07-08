function StatCard({ icon, title, value, badge, badgeType }) {
  const badgeStyles = {
    success: "bg-green-100 text-green-700",
    info: "bg-sky-100 text-sky-700",
    neutral: "bg-yellow-100 text-yellow-700",
    danger: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-semibold text-slate-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>
        </div>

        <div className="p-3 bg-slate-100 rounded-lg">
          {icon}
        </div>
      </div>

      <div className="mt-5">
        <span
          className={`text-xs font-bold px-2 py-1 rounded ${badgeStyles[badgeType]}`}
        >
          {badge}
        </span>
      </div>
    </div>
  );
}

export default StatCard;