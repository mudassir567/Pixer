import React, { useContext, useState } from "react";
import MyContext from "./Context/MyContext";
import ImageZoom from "./ImageZoom";
import "../App.css";

const Image = () => {
  const { image, searchimage } = useContext(MyContext);

  return (
    <>
      <h1 className="text-left italic text-zinc-900">
        Rendering {searchimage} images
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-black rounded-md overflow-hidden ">
        {image.map((imgUrl, index) => {
          return <ImageZoom key={index} imgUrl={imgUrl} />; // zoom modal
        })}
      </div>
    </>
  );
};

export default Image;
