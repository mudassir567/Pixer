import Search from "./Search";

function Navbar() {

  return (
    <>
      <div className="Container space-x-4 justify-between bg-emerald-300	 ">
        <div className="logo flex items-center">
          <h4>PIXER</h4>
        </div>
        <Search />
        <div className=" nav-links flex   ">
          <div className="">
            <ul className="flex space-x-4  underline text-sky-500 text-lg">
              <li>    <a> Home </a> </li>
              <li>        <a> Downloads </a>      </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
