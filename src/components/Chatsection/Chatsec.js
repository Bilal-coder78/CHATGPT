import React, { useContext } from 'react'
import "./Chatsec.css"
import Darkmode from '../Darkmode/Darkmode'
import { LuSendHorizontal } from "react-icons/lu";
import { dataContext } from '../../Usecontext/Usecontext';
import user from "../../assets/user.png"
import ai from "../../assets/ai.png"

function Chatsec() {
  let {sent,input,setinput,showresult,resultdata,recentprompt,loading} = useContext(dataContext)
  return (
    <div className='chatsec'>
        <div className="topsection">
            {!showresult?<div className="headings">
              <span>HELLO BILAL,</span>
              <span>I'm Your Own Assistant</span>
              <span>How can i help you...?</span>
            </div>:<div className="result">
              <div className='userbox'>
              <img src={user} alt="" width={"50px"}/>
              <p>{recentprompt}</p>
              </div>
            <div className='aibox'>
              <img src={ai} alt="" width={"50px"}/>
              {loading?<div className='loader'>
                <hr/>
                <hr/>
                <hr/>
              </div>:<p>{resultdata}</p>}
              </div>
              </div>}
        </div>
        <div className="bottomsection">
          <input onChange={(e)=>setinput(e.target.value)} type="text"placeholder='Enter a prompt' value={input}/>
          {input?<button className='sendbtn' onClick={()=>{
            sent(input)
          }}><LuSendHorizontal /></button>:null}
         <Darkmode/>
        </div>
    </div>
  )
}

export default Chatsec