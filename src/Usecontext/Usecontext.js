import React, { createContext } from 'react'
import main from '../Gemini';
export const dataContext = createContext();

function Usecontext({children}) {
    async function sent(){
       await main("hello")
    }
    const data={sent}
  return (
    <>
    <dataContext.Provider value={data}>
        {children}
    </dataContext.Provider>
    </>
  )
}

export default Usecontext