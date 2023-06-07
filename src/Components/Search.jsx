import React, { useContext } from "react";
import MyContext from "./Context/MyContext";

const Search = () => {
  const { search, handleInputChange, handleButtonChnage, handleEnterChange } =useContext(MyContext);

  return (
    <>
      <div className="flex items-center space-x-4 sm:flew-row ">
        {/* <input
          type="text"
          className="Searchbar"
          placeholder="search..."
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleEnterChange}
        /> */}

        <input style={{width:"500px"}}
        type="search"
        className="w-full p-3 text-sm text-gray-900 border-black-300 rounded-md" 
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleEnterChange}
        placeholder="Search HD Images, Wallpapers..." required />



        {console.log(search, "testing in search component")}
        <button
          className="bg-black p-3 text-white active:bg-zinc-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={handleButtonChnage}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
