export default function Navbar({ children }) {
  return (
    <div className="h-14 bg-amber-400 flex items-center justify-between p-4 rounded-md mb-8">
      {children}
    </div>
  );
}
