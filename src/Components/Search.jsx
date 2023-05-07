import React, { useContext } from 'react'
import MyContext from './Context/MyContext';

const Search = () => {
    const {search,handleInputChange,handleButtonChnage,handleEnterChange}=useContext(MyContext)
    
  return (
    <>
        <div className="flex space-x-4  ">
          <input type="text" className="" placeholder="search..."  value={search} onChange={handleInputChange} onKeyDown={handleEnterChange}/>
          {console.log(search,"testing in search component")}
          <button onClick={handleButtonChnage} >Search</button>

        </div>
    </>
  )
}

export default Search