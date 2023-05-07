import React, { useContext } from "react";
import MyContext from "./Context/MyContext";


const Image = () => {
    const {image,searchimage} = useContext(MyContext)
  return (
    <>
     <h1 className="text-left italic text-zinc-900">Rendering {searchimage} images</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-zinc-300">
       
        {image.map((value, index) => {
          return (
            <div key={index}>
              <img src={value.src.portrait} alt="random images" />

            </div>
          );
        })}
      </div>
    </>
  );
};

export default Image;
