import React from 'react';
import Typewriter from 'typewriter-effect';
import HeroButton from './HeroButtons';
import { Container } from '@mui/material';
function Hero(){
    return <><section className="bg-transparent dark:bg-gray-900 h-screen w-scren">
    <div className="py-8 px-4 mx-auto max-w<-screen-xl text-center lg:py-16 lg:px-12">
             
        <h1 className="mb-4  min-[912px]:mt-80 text-5xl font-extrabold tracking-tight leading-none 
           
          text-white 
          select-none 
          mt-52 sm:text-6xl md:text-7xl
          lg:text-7xl
          xl:mt-24 ">Haseeb Khan</h1>
        <div className="
        w-max ml-28
         flex sm:w-max sm:right-50
           flex-wrap 
           mt-8 
           lg:mb-16 space-y-4
            sm:flex-row sm:justify-left
             sm:space-y-0 sm:space-x-4
             md:ml-36
             lg:ml-60 
             xl:ml-96
             min-[360px]:ml-10
             min-[820px]:ml-44
             min-[912px]:ml-60
             min-[540px]:ml-28
             min-[500px]:ml-24
             "> 
        <p className='mb-0 sm:ml md:text-2xl 
        text-lg select-none text-gray-500 
           h-6 w-15 md:mb-4 sm:mr-0 sm:ml-10 text-left mt-5 mr-2'>
            
            I&apos;m a
</p>  
 <div className='sm:mb-0 sm:pt-4 '> 
 <Typewriter
  options={{
    strings: ['Full stack Developer', 'Software Engineer','Web Designer'],
    autoStart: true,
    loop: true,
    //@ts-ignore
    onCreateTextNode:function(char,textNode){
        let span =document.createElement('span')
        span.className="mb-2 text-white text-lg sm:mb-0 sm:mt-4 md:text-2xl md:mt-8 md:mb-0 select-none";
           span.textContent=char;   
           return span; },
    cursorClassName:"text-green-500 text-2xl",
    wrapperClassName:"text-xs"
}}

/>
       </div>
       
       
        </div>
         
        <div
          className="
           z-30 sm:space-x-8 space-x-4
              flex-wrap sm:ml-28
                 sm:mt-10 w-max 
    sm:w-max h-12 justify-center 
    items-center  mt-8 ml-16
     sm:justify-between sm:text-sm
     md:mx-auto
     lg:space-x-10
      min-[360px]:ml-1
      min-[390px]:ml-3
      min-[412px]:ml-6
      min-[540px]:ml-20
      min-[500px]:ml-20">
        <HeroButton />
             
        </div> 
             
        
          
    </div>
</section>
    </>
}
export default Hero;
