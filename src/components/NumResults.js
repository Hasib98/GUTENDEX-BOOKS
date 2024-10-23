export default function NumResults({ count = 0 }) {
  return (
    <div
      className="absolute  top-2 -right-2 font-nunito font-bold scale-75 sm:scale-100 sm:static"
      // className="font-nunito font-bold"
    >
      Found{" "}
      <span
        className="bg-teal-200 p-1 rounded-xl font-extrabold border-slate-900  text-emerald-900"
        // className="bg-slate-200 p-1 rounded-xl font-extrabold border-slate-900 border-2"
      >
        {count}
      </span>{" "}
      results
    </div>
  );
}
