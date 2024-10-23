export default function Navbar({ children }) {
  return (
    <div className="h-36 relative bg-yellow-400 flex flex-col items-center  rounded-md sm:flex-row sm:h-14 sm:justify-between sm:p-4 sm:mb-8 mb-4">
      {children}
    </div>
    // <div className="sm:h-14 bg-amber-400 sm:flex  items-center justify-between p-4 rounded-md mb-8">
    //   {children}
    // </div>
  );
}
