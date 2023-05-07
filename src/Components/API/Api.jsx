// // 9ZGKKbUqIIE5ncE3QP62RyaWnil5BNTOaLAo6XyT7XlkNHexMJlOea1L
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Image from "../Image";
// import Navbar from "../Navbar";

// const api_url = "https://api.pexels.com/v1/search?query=people";
//  const tokenStr = "9ZGKKbUqIIE5ncE3QP62RyaWnil5BNTOaLAo6XyT7XlkNHexMJlOea1L";

// const Api = () => {
//   const [image, setImage] = useState([]);
  
//   const get_image = async () => {
//     try {
//       const res = await axios.get(api_url, {
//         headers: { Authorization: `${tokenStr}`},
//       });

//       console.log("axiosssssssss");

//       console.log(res.data.photos); //ye baar baar print hora console me
//       let result = res.data.photos;
//       setImage(result);
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
//   useEffect(() => {
//     //Runs only on the first render
//     get_image();
//   }, []);


//   //  const getSearch=async ()  =>{
//   //   try{
//   //   const res=await axios.get(`https://api.pexels.com/v1/search?query=${search}`,
//   //     {
//   //       headers: { Authorization: `${tokenStr}`},
//   //     });
//   //     console.log(res,"searchhhhwwwwwwwwwwwwwwwh");
//   //   }

//   //   catch(err){
//   //     console.log(err)
//   //   }
    

  
//   return (
//     <>
//     <Image image={image}/>


//     </>
//   );
// };

// export default Api;
