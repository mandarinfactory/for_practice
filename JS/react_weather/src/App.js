import { useEffect, useState } from "react";
import { createContext } from "react";
import CompHeader from "./components/CompHeader";
import CompCurrent from "./components/CompCurrent";
import CompDaily from "./components/CompDaily";
import CompDetail from "./components/CompDetail";
import CompHourTime from "./components/CompHourTime";
import CompMap from "./components/CompMap";
import { getAddress, getLocation, getWeather } from "./store/function";
export const Appcontext = createContext()

const App = () => {
  const [latLng, setLatLng] = useState(null) // 위도, 경도 state 변수
  const [address, setAddress] = useState(null) // 주소정보
  const [weather, setWeather] = useState(null) // 날씨정보

  const initialize = async () => {
    let { lat, lng } = await getLocation() // 현재 위치의 위·경도를 객체로 반환 --> destructuring 문법 사용!
    let addressResult = await getAddress(lat, lng) // 위·경도를 받아서 주소를 반환
    let weatherResult = await getWeather(lat, lng) // 위·경도를 받아서 날씨를 반환
    console.log(lat, lng);
    console.log(addressResult);
    console.log(weatherResult);

    setLatLng({ lat, lng })
    setAddress(addressResult)
    setWeather(weatherResult)

  }//function initialize --> promise로 만들고 ==> async && await를 이용해서 구현한다!(비동기 함수)
  useEffect(() => {
    initialize() // useEffect내에서만 실행되게끔!
  }, [])//useEffect --> [] app build가 완성된 첫번째만 한다!

  return (
    <Appcontext.Provider value={{
      latLng, setLatLng,
      address, setAddress,
      weather, setWeather,
    }}>
      <CompHeader />
      <CompCurrent />
      <CompDetail />
      <CompHourTime />
      <CompDaily />
      <CompMap />
    </Appcontext.Provider>
  );
};
export default App;