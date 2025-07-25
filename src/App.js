import { useContext } from "react";
import Chatsec from "./components/Chatsection/Chatsec";
import Separation from "./components/Separation/Separation";
import Sidebar from "./components/Sidebar/Sidebar";
import { dataContext } from "./Usecontext/Usecontext";

function App() {
  let data = useContext(dataContext)
  console.log(data)
  return (
    <>
    <Sidebar/>
    <Separation/>
    <Chatsec/>
    </>
  );
}

export default App;
