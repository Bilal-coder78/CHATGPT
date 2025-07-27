import React, { createContext, useState } from 'react'
import main from '../Gemini';
export const dataContext = createContext();

function Usecontext({children}) {
  const [input,setinput] = useState("")
  const [showresult,setshowresult] = useState(false)
  const [loading,setloading] = useState(false)
  const [resultdata,setresultdata] = useState("")
  const [recentprompt,setrecentprompt] = useState("")
  const [prevprompt,setprevprompt] = useState([])

    async function sent(input){
      setresultdata("")
      setshowresult(true)
      setrecentprompt(input)
      setloading(true)
      setprevprompt(prev=>[...prev,input])
      let response = await main(input)
      setresultdata(response.split("**") && response.split("*"))
      setinput("")
      setloading(false)
    }
    const data={
      sent,
      input,
      setinput,
      showresult,
      setshowresult,
      loading,
      setloading,
      resultdata,
      setresultdata,
      recentprompt,
      setrecentprompt,
      prevprompt
    }
  return (
    <>
    <dataContext.Provider value={data}>
        {children}
    </dataContext.Provider>
    </>
  )
}

export default Usecontext