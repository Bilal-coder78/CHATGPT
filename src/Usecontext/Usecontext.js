import React, { createContext, useState } from 'react'
import main from '../Gemini';
export const dataContext = createContext();

function Usecontext({children}) {
  const [input,setinput] = useState("")
  const [showresult,setshowresult] = useState(false)
  const [loading,setloading] = useState(false)
  const [resultdata,setresultdata] = useState("")
  const [recentprompt,setrecentprompt] = useState("")

    async function sent(input){
      setresultdata("")
      setshowresult(true)
      setrecentprompt(input)
      setloading(true)
      let response = await main(input)
      setresultdata(response)
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
      setrecentprompt
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