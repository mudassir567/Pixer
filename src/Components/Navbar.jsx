import Search from "./Search";
import logo from '../assets/logo-white.svg'
import "../App.css";


function Navbar() {

  return (
    <>  
<div className="navbar grid xl:grid-cols-12 lg:grid-cols-8  md:grid-cols-4 sm:grid-cols-3 grid-cols-3 ">
<div className="xl:col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-3 col-span-3">

<a>  <img className="logo"  src={logo} alt="logo" />   </a>
  </div> 
  <div className="xl:col-span-8 lg:col-span-5 md:col-span-3 sm:col-span-3 col-span-3">
     <Search />
    </div>
    <div className="xl:col-span-2 lg:col-span-2  md:col-span-3 sm:col-span-3 col-span-3">
       <a className="mr-5 underline">Home </a>
       <a className="mr-5 underline">Downloads</a>
      
     </div>
</div>
































    {/* <div className="container flex flex-wrap p-3 flex-col sm:flex-row items-center justify-between">
    <div className="logos">

      <a className="flex title-font font-medium  text-black text-bold font-sans items-center mb-4 sm:mb-0"> 
        <img className="logo" 
        src={logo} alt="logo" />  
        </a>
        </div>
    <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

     <Search />
    </div>

       <div className=" md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
       <a className="mr-5 underline">Home </a>
       <a className="mr-5 underline">Downloads</a>
      
     </div>

          </div> */}
   
    </>
  );
}

export default Navbar;
