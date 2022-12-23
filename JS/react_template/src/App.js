import { createContext, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Comp404 from "./Comp404";
import CompMinusContainer from "./CompMinusContainer";
import CompNav from "./CompNav";
import CompPlusContainer from "./CompPlusContainer";
export let myContext = createContext();
/* 'myContext'는 export <--> import를 해야하는데 이미 App이 export되어있는곳이 아닌 밖에서 선언해야한다!!! */

const App = () => {

  const setNumber = () => {
    return Math.floor(Math.random() * 9)
  }//function_setNumber

  return (
    <myContext.Provider value={setNumber}>
      <CompNav />
      <Routes>
        <Route path="/" element={<CompPlusContainer />} />
        <Route path="minus" element={<CompMinusContainer />} />
        <Route path="*" element={<Comp404 />} />
      </Routes>
    </myContext.Provider>
  );
};
export default App;