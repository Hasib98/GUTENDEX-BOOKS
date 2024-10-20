import Search from "./Search";
import Title from "./Title";

export default function Navbar() {
  return (
    <div className=" bg-gray-300 flex items-center justify-between ">
      <Title />
      <Search />
      <div>Count: 12</div>
    </div>
  );
}
