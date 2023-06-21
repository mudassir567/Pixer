import React, { useContext } from "react";
import MyContext from "./Context/MyContext";

const Footer = () => {
  const { pagechange, handlePrev_btn, handleNext_btn } = useContext(MyContext);

  return (
    <>
      <div className="flex gap-10 justify-center">
        {pagechange!==1 ? <button
          className="bg-black text-white active:bg-zinc-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={handlePrev_btn}
        >  previous
        </button>
        :null}
        <p className="text-black font-bold"> {pagechange}/10 </p>
        {pagechange==10 ? null:
          <button
          className="bg-black text-white active:bg-zinc-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={handleNext_btn}
        >next
        </button>
        }
      </div>
    </>
  );
};

export default Footer;
