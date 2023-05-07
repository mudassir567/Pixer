// 9ZGKKbUqIIE5ncE3QP62RyaWnil5BNTOaLAo6XyT7XlkNHexMJlOea1L
import React, { useEffect, useState } from "react";
import axios from "axios";

const api_url = "https://api.pexels.com/v1/search?query=people";
 const tokenStr = "9ZGKKbUqIIE5ncE3QP62RyaWnil5BNTOaLAo6XyT7XlkNHexMJlOea1L";

const Api = () => {
  const [image, setImage] = useState([]);
  
  const get_image = async () => {
    try {
      const res = await axios.get(api_url, {
        headers: { Authorization: `${tokenStr}`},
      });

      console.log("axiosssssssss");

      console.log(res.data.photos); //ye baar baar print hora console me
      let result = res.data.photos;
      setImage(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    //Runs only on the first render
    get_image();
  }, []);

  return (
    <>
    <p className="text-left italic text-emerald-300">Rendering Random Images...</p>
      <div className="Container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {image.map((value, index) => {
          return (
            <div key={index}>
              <img src={value.src.portrait} alt="random" />

              {console.log(value, "dsssss")}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Api;
