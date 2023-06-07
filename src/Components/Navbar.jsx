import Search from "./Search";
import logo from '../assets/logo-white.svg'
import "../App.css";


function Navbar() {

  return (
    <>
    <div className="container flex flex-wrap p-3 flex-col sm:flex-row items-center justify-between">
    <div className="logos">



      <a className="flex title-font font-medium  text-black text-bold font-sans items-center mb-4 sm:mb-0"> 
        <img className="logo" src={logo} alt="logo" />  
        </a>
        </div>
    <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

     <Search />
    </div>

       <div className=" md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
       <a className="mr-5 underline">Home </a>
       <a className="mr-5 underline">Downloads</a>
      
     </div>

          </div>
   
    </>
  );
}

export default Navbar;
