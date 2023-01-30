import React, { useContext } from 'react';
import { Appcontext } from '../App';
/* import { outputWeather } from '../store/function'; */

const CompCurrent = () => {
    let { address, weather } = useContext(Appcontext)
    if (!address || !weather) return false
    let weatherData = weather.current // 현재 날씨 정보객체
    /*  
        let today = weather.daily[0] // 오늘날씨 정보객체
        let data = outputWeather(current) // 현재시간 날씨정보를 가공해서 변환
        let todayData = outputWeather(current) // 오늘날짜별 날씨정보를 가공해서 변환
    */
    return (
        <section className='current_section'>
            <p className="address">
                {
                    (address) ? address[2].formatted_address : '등록되지 않은 위치입니다.'
                }
            </p>
            <div className="current_info">
                <div className='sunrise_sunset'>
                    <time>
                        {/* {todayData.sunriseHour} */}:{/* {todayData.sunriseMin} */}
                    </time>
                    <time>
                        {/* {todayData.sunsetHour} */}:{/* {todayData.sunsetMin} */}
                    </time>
                </div>
                <p className="temp_min_max">
                    {/*
                     <b>{todayData.tempMin}</b> 
                     <b>{todayData.tempMax}</b> 
                     */}
                </p>
                <p className='temp'>
                    <b>{weatherData.temp - 273.15}</b><sup>&#8451;</sup>
                </p>
                <p className="desc">
                    {/* data.desc */}
                </p>
                <p className="wind_rain">
                    {/* data.windDeg */},
                    <i style={{ transform: `rotate(-45deg)` }}></i>
                    <b>
                        {/* data.windSpeed */}<small>hPa</small>
                    </b>
                    <i></i>
                    <b>
                        {/* data.rain */}<small>mm/h</small>
                    </b>
                </p>
                <p className='time'>
                    <time>
                        <b>
                            {
                                /* {(data.hour <= 12) ? data.hour : data.hour - 12} : {data.minute}*/
                            }
                        </b>
                        <small>
                            ({((/* data.hour */ 12 <= 12)) ? 'AM' : 'PM'})
                        </small>
                    </time>
                    <time>
                        {/* <b>
                                {data.year}년 {data.month}월 {data.date}일 
                            </b>
                            <small>
                                {data.day} 
                            </small>
                        */}
                    </time>
                </p>
            </div>
        </section>
    );
};

export default CompCurrent;