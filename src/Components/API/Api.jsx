import React from 'react'
import Navbar from '../Navbar'
import Image from '../Image';
import MyContext from '../Context/MyContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Footer';
const api_url = "https://api.pexels.com/v1/search?query=nature&per_page=30";


const Api = () => {



  const [image, setImage] = useState([]);// for array of images.
  const [searchimage, setSearchimage] = useState("random");
  const [search,setSearch]=useState("");
  const [search_val,setSearch_val]=useState("");
  const [pagechange, setPagechange]=useState(1)


 
  
  const get_image = async () => {
    try {
      const res = await axios.get(api_url, {
        headers: { Authorization: `${import.meta.env.VITE_REACT_APP_ACESS_KEY}`},
      });
      let result = res.data.photos;
      console.log(result,"testing the get_image array"); //ye baar baar print hora console me
      setImage(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
        //Runs only on the first render
        console.log("use_effect check")
    get_image()
  }, [])

  const handleInputChange=(e)=>{
    const val =e.target.value
    setSearch(val)
    setSearch_val(val)
    
  }
  
  const getSearch=async ()  =>{
    try{
    const search_res=await axios.get(`https://api.pexels.com/v1/search?query=${search_val}&per_page=8&page=${pagechange}`,
      {
        headers: { Authorization: `${import.meta.env.VITE_REACT_APP_ACESS_KEY}`},
      });
      let search_result=search_res.data.photos
      console.log(search_result,"dssds")
      setImage(search_result)
    }
    catch(err){
      console.log(err)
    }
  }

  const handleButtonChnage=(e)=>{
    getSearch()
    setSearch("")
    setSearchimage(search)
    console.log("get_search function is called")
    
  }
  const handleEnterChange=(e)=>{
    console.log(e)
    if(e.key=== 'Enter'){
      console.log(e,"fff")
      handleButtonChnage()

    }
  }

const  handlePrev_btn=()=>{
    setPagechange(pagechange<0 - 1)
    getSearch()
   
}
const handleNext_btn=()=>{
    setPagechange(pagechange +1)
    getSearch()
}


return (
    
<MyContext.Provider value={{image,pagechange,search,searchimage,handleInputChange,handleButtonChnage,handleEnterChange,handlePrev_btn,handleNext_btn}}>

<Navbar />
<Image  />
<Footer />

</MyContext.Provider>

)
}

export default Api