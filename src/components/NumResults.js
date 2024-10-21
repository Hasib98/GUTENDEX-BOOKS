export default function NumResults({ count = 0 }) {
  return (
    <div className="font-nunito">
      Found <span className="font-bold">{count} </span>
      results
    </div>
  );
}
