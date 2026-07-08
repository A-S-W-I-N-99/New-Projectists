function ActionCard({ icon, label }) {
  return (
    <button className="bg-white border-2 border-dashed border-slate-300 hover:border-indigo-600 hover:bg-slate-50 rounded-xl p-5 flex flex-col items-center justify-center gap-3 transition-all text-center h-full">
      <div className="p-3 bg-slate-100 rounded-xl">
        {icon}
      </div>

      <span className="text-sm font-semibold text-slate-700">
        {label}
      </span>
    </button>
  );
}

export default ActionCard;