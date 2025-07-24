import React from 'react'
import "./Sidebar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';

function Sidebar() {
  const [extend, setextend] = useState(false)
  return (
    <div className='sidebar'>
        <GiHamburgerMenu className='ham' onClick={()=>{
          setextend(change=>!change)
        }}/>
        <div className="newchat">
          <FaPlus/>
          {extend?<p>new chat</p>:null}
        </div>
        <div className="recent">
          <FaRegMessage />
          {extend?<p>who are you</p>:null}
        </div>
    </div>
  )
}

export default Sidebar