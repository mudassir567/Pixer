import axios from "axios";
import { useState } from "react";
// let apiSearchUrl=`https://api.pexels.com/v1/search?query=${search}`
const tokenStr = "9ZGKKbUqIIE5ncE3QP62RyaWnil5BNTOaLAo6XyT7XlkNHexMJlOea1L";


function Navbar() {

  const [search,setSearch]=useState("");

  const handleInputChange=(e)=>{
    setSearch(e.target.value)
  }
  const getSearch=async ()  =>{
    try{
    const res=await axios.get(`https://api.pexels.com/v1/search?query=${search}`,
      {
        headers: { Authorization: `${tokenStr}`},
      });
      console.log(res,"searchhhhh");
    }

    catch(err){
      console.log(err)
    }
    

  }

  const handleButtonChnage=(e)=>{
    getSearch()
    setSearch("")
  }



  return (
    <>
      <div className="Container space-x-4 justify-between bg-emerald-300	 ">
        <div className="logo flex items-center">
          <h4>PIXER</h4>
        </div>
        <div className="flex space-x-4  ">
          <input type="text" className="" placeholder="search..."  value={search} onChange={handleInputChange}/>
          {console.log(search)}
          <button onClick={handleButtonChnage}>Search</button>

          
        </div>
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
