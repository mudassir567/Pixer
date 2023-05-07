import { useState } from 'react';
import Api from './Components/API/Api'
import './App.css'
import Navbar from './Components/Navbar'

function App() {

  //const [image, setImage] = useState([]);

  return (
    
    <>
  
      <div className="Container flex-col space-y-8">
      <Navbar />
     <Api/>
      {/* <h1 className="text-3xl font-bold underline text-center">Hello world!</h1>  */}
      </div>

 
    </>
  )
}

export default App
