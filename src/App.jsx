import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import Image from './Components/Image';
import MyContext from './Components/Context/MyContext';
import axios from 'axios';
const api_url = "https://api.pexels.com/v1/search?query=india";
const tokenStr = "9ZGKKbUqIIE5ncE3QP62RyaWnil5BNTOaLAo6XyT7XlkNHexMJlOea1L";
//when iam trying to use env its giving me an error

function App() {

  const [image, setImage] = useState([]);// for array of images.
  const [searchimage, setSearchimage] = useState("random");
  const [search,setSearch]=useState("");
  
  const get_image = async () => {
    try {
      const res = await axios.get(api_url, {
        headers: { Authorization: `${tokenStr}`},
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
    setSearch(e.target.value)
  }
  
  const getSearch=async ()  =>{
    try{
    const search_res=await axios.get(`https://api.pexels.com/v1/search?query=${search}`,
      {
        headers: { Authorization: `${tokenStr}`},
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

  return (
    <MyContext.Provider value={{image,search,searchimage,handleInputChange,handleButtonChnage,handleEnterChange}}>
      <div className="Container flex-col space-y-8">
      <Navbar />
      <Image  />
      </div>
    </MyContext.Provider>
  )
}

export default App
