import { useState } from "react";
import { createContext } from "react";
import CompCurrent from "./components/CompCurrent";
import CompDaily from "./components/CompDaily";
import CompDetail from "./components/CompDetail";
import CompHourTime from "./components/CompHourTime";
import CompMap from "./components/CompMap";
const Appcontext = createContext()

const App = () => {
  const [weatherDt, setWeatherDt] = useState()
  return (
    <Appcontext.Provider value={{
      weatherDt, setWeatherDt,
    }}>
      <CompCurrent />
      <CompHourTime />
      <CompDaily />
      <CompDetail />
      <CompMap />
    </Appcontext.Provider>
  );
};
export default App;