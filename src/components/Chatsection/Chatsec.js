import React from 'react'
import "./Chatsec.css"
import Darkmode from '../Darkmode/Darkmode'
import { LuSendHorizontal } from "react-icons/lu";

function Chatsec() {
  return (
    <div className='chatsec'>
        <div class="topsection">
            <div class="headings">
              <span>HELLO BILAL,</span>
              <span>I'm Your Own Assistant</span>
              <span>How can i help you...?</span>
            </div>
        </div>
        <div class="bottomsection">
          <input type="text"placeholder='Enter a prompt'/>
          <button className='sendbtn'><LuSendHorizontal /></button>
         <Darkmode/>
        </div>
    </div>
  )
}

export default Chatsec