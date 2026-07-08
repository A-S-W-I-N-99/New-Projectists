function TableRow({ subject, grade, submissions, status, statusType }) {
  const statusStyle =
    statusType === "success"
      ? "bg-sky-100 text-sky-700"
      : "bg-red-100 text-red-700";

  return (
    <tr className="hover:bg-slate-50">
      <td className="px-4 py-4 font-semibold">{subject}</td>
      <td className="px-4 py-4">{grade}</td>
      <td className="px-4 py-4">{submissions}</td>
      <td className="px-4 py-4">
        <span
          className={`px-2 py-1 rounded text-xs font-bold ${statusStyle}`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}

export default TableRow;