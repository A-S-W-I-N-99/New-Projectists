function ActivityItem({ icon, iconBg, title, desc, time }) {
  return (
    <div className="flex items-start gap-3">
      <div className={`p-2 rounded-full ${iconBg}`}>
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-sm">
          {title}
        </h4>

        <p className="text-xs text-slate-500 mt-1">
          {desc}
        </p>

        <p className="text-[10px] text-slate-400 mt-2 font-bold">
          {time}
        </p>
      </div>
    </div>
  );
}

export default ActivityItem;