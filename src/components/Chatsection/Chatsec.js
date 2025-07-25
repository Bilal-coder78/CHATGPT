import React, { useContext } from 'react'
import "./Chatsec.css"
import Darkmode from '../Darkmode/Darkmode'
import { LuSendHorizontal } from "react-icons/lu";
import { dataContext } from '../../Usecontext/Usecontext';

function Chatsec() {
  let {sent} = useContext(dataContext)
  return (
    <div className='chatsec'>
        <div className="topsection">
            <div className="headings">
              <span>HELLO BILAL,</span>
              <span>I'm Your Own Assistant</span>
              <span>How can i help you...?</span>
            </div>
        </div>
        <div className="bottomsection">
          <input type="text"placeholder='Enter a prompt'/>
          <button className='sendbtn' onClick={()=>{
            sent()
          }}><LuSendHorizontal /></button>
         <Darkmode/>
        </div>
    </div>
  )
}

export default Chatsec