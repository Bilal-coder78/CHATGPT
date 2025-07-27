import React, { useContext } from 'react'
import "./Sidebar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';
import { dataContext } from '../../Usecontext/Usecontext';

function Sidebar() {
  const [extend, setextend] = useState(false)
  const {sent,prevprompt} = useContext(dataContext)
  return (
    <div className='sidebar'>
        <GiHamburgerMenu className='ham' onClick={()=>{
          setextend(change=>!change)
        }}/>
        <div className="newchat">
          <FaPlus/>
          {extend?<p>new chat</p>:null}
        </div>
        {prevprompt.map((item)=>{
          return (
             <div className="recent">
          <FaRegMessage />
          {extend?<p>{item}</p>:null}
        </div>
          )
        })}
        
    </div>
  )
}

export default Sidebar