import React, { useContext, useState } from "react";
import MyContext from "./Context/MyContext";
import ImageZoom from "./ImageZoom";
import "../App.css";
import Spinner from "./Spinner";

const Image = () => {
  const { image, searchimage,loading} = useContext(MyContext);
  console.log(loading)

  return (
    <>
      <h1 className="text-left italic text-zinc-900">
        Rendering {searchimage} images
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-black rounded-md overflow-hidden ">
        {loading ? image.map((imgUrl, index) => {
          return <ImageZoom key={index} imgUrl={imgUrl} /> // zoom modal
         
      }): <h1 className="text-white">loading...........<Spinner /></h1>}
      </div>
    </>
  );
};

export default Image;
