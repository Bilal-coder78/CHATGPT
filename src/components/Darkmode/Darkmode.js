import React, { useEffect } from 'react'
import { useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import "./Darkmode.css"

function Darkmode() {
    const [mode, setmode] = useState("dark-mode")
    function toggle(){
        if(mode==="dark-mode"){
            setmode("light-mode")
        }else{
            setmode("dark-mode")
        }
    }
    useEffect(()=>{
        document.body.className= mode;
    },[mode])
  return (
    <div>
        <button className='darkmodebtn' onClick={()=>{
            toggle()
        }}>{mode==="dark-mode"?<MdOutlineWbSunny/>:<LuMoon/>}</button>
    </div>
  )
}

export default Darkmode