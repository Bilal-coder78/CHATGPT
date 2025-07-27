import React, { useContext } from 'react'
import "./Sidebar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from 'react';
import { dataContext } from '../../Usecontext/Usecontext';

function Sidebar() {
  const [extend, setextend] = useState(false)
  const {sent,prevprompt,setshowresult,setloading} = useContext(dataContext)
  async function loadprevprompt(prompt){
    sent(prompt)
  }
  function newchat(){
    setshowresult(false)
    setloading(false)
  }
  return (
    <div className='sidebar'>
        <GiHamburgerMenu className='ham' onClick={()=>{
          setextend(change=>!change)
        }}/>
        <div className="newchat" onClick={()=>{newchat()}}>
          <FaPlus/>
          {extend?<p>new chat</p>:null}
        </div>
        {prevprompt.map((item)=>{
          return (
             <div className="recent" onClick={()=>{loadprevprompt(item)}}>
          <FaRegMessage />
          {extend?<p>{item.slice(0,10)+"..."}</p>:null}
        </div>
          )
        })}
        
    </div>
  )
}

export default Sidebar