import Search from "./Search";
import Title from "./Title";

export default function Navbar() {
  return (
    <div className=" bg-red-300 flex items-center justify-between pl-10 pr-10 pt-5 pb-5">
      <Title />
      <Search />
      <div>Count: 12</div>
    </div>
  );
}
