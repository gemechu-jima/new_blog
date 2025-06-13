'use client'

import Carousel from "./component/Carousel";
import Postblog from "./component/PostBlog";
import { useState } from "react";
import Latest from "./component/Latest";
import Popular from "./component/Popular";
export default function Home() {
   const [color, setColor]=useState(false)
  return (
    <div className=" h-auto pb-10 ">
      <div className="h-10"/>
      <main className="flex flex-col sm:flex-row gap-[12px] w-[90%] mx-auto  shadow-md px-1.5rounded-2xl">
        <div className="flex-1  text-center relative">
         <Carousel/>
        </div>
        <div className="flex-1 ">
        <div className="w-full flex items-center ">
          <button className={`flex-1/2 ${color?"bg-yellow-500":"bg-gray-500"} p-3`} onClick={()=>setColor(true)}>Latest</button>
          <button className={`flex-1/2 ${color?"bg-gray-500":"bg-yellow-500"} p-3`} onClick={()=>setColor(false)}>Popular</button>
        </div>
       {color ? <Latest /> : <Popular/>}
        </div>
      </main>
      <Postblog/>
    </div>
  );
  
}
