import React from 'react'
import Navbar from '../Navbar'
import Image from '../Image';
import MyContext from '../Context/MyContext';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Footer';


const Api = () => {
  
  const [image, setImage] = useState([]);// for array of images.
  const [searchimage, setSearchimage] = useState("random");
  const [search,setSearch]=useState("");
  const [search_val,setSearch_val]=useState("nature");
  const [pagechange, setPagechange]=useState(1)
  const [loading, setLoading] = useState(false);
  
  const handleInputChange=(e)=>{
    const val =e.target.value
    setSearch(val)
    setSearch_val(val)
  }

  const getSearch=async (pagechange)  =>{
    try{
      setLoading(false)
      const search_res=await axios.get(`${import.meta.env.VITE_API_LINK}=${search_val}&per_page=25&page=${pagechange}`,
      {
        headers: { Authorization: `${import.meta.env.VITE_REACT_APP_ACESS_KEY}`},
      });
      const search_result=search_res.data.photos
      setLoading(true)
      console.log(search_result,"dssds")
      setImage(search_result)
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(() => {

    console.log("use_effect check")
    getSearch(pagechange)
  
  }, [pagechange])
  
  
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
    if (pagechange > 0) {
      const prevPage = pagechange - 1;
      setPagechange(prevPage);
      getSearch(prevPage);
    }
    
  }
  const handleNext_btn=()=>{
    const nextPage = pagechange + 1;
    setPagechange(nextPage);
    getSearch(nextPage);
  }
  return (
    
    <MyContext.Provider value={{image,pagechange,search,searchimage,loading,handleInputChange,handleButtonChnage,handleEnterChange,handlePrev_btn,handleNext_btn}}>

<Navbar />
<Image  />
<Footer />

</MyContext.Provider>

)
}

export default Api