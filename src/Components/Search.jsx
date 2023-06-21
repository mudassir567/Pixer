import React, { useContext } from "react";
import MyContext from "./Context/MyContext";

const Search = () => {
  const { search, handleInputChange, handleButtonChnage, handleEnterChange } =useContext(MyContext);

  return (
    <>
      <div className="flex items-center space-x-1 ">
        <input 
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
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </div>
    </>
  );
};

export default Search;
