"use client"
import NavBarButton from "../components/NavBarButton";

function NavBar(){ 
    return <>
    
    <nav className="bg-black">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="
       w-full h-16     flex justify-center bg-transparent items-center">
    <h1 className="  
      border-1 border-white 
    text-centre text-5xl  font-bold  text-white
    shadow-[0_5px_20px_rgba(255,255,255,0.5)] "  >
      Projects</h1>
      </div>
      <div className="flex flex-wrap gap-6 w-full h-full justify-center items-center mt-8 text-gray-500 sm:justify-between  ">
      <NavBarButton/>
      </div>
      
    </div>
  

  </nav>
    
    
    </>
}

export default NavBar;
   
