const Pagination = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mt-6 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Left */}
      <p className="text-sm text-gray-500">
        Showing{" "}
        <span className="font-semibold text-gray-700">1</span> to{" "}
        <span className="font-semibold text-gray-700">6</span> of{" "}
        <span className="font-semibold text-gray-700">342</span> faculty
        members
      </p>

      {/* Right */}
      <div className="flex items-center gap-2">
        <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
          Previous
        </button>

        <button className="w-10 h-10 rounded-lg bg-indigo-600 text-white font-semibold">
          1
        </button>

        <button className="w-10 h-10 rounded-lg border hover:bg-gray-100">
          2
        </button>

        <button className="w-10 h-10 rounded-lg border hover:bg-gray-100">
          3
        </button>

        <span className="px-2 text-gray-400">...</span>

        <button className="w-10 h-10 rounded-lg border hover:bg-gray-100">
          20
        </button>

        <button className="px-3 py-2 border rounded-lg hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;