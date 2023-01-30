import { codeEnArr, codeKrArr } from "./conditionCode"

/* 현재 위치정보를 가져와서 위경도를 반환하는 비동기 함수 */
export const getLocation = () => {
    return new Promise(res => {
        navigator.geolocation.getCurrentPosition(location => {
            let latLng = {
                lat: location.coords.latitude, // 위도
                lng: location.coords.longitude, // 경도
            }//latLng

            res(latLng)

        })//getCurrentPosition
    })//promise
}//function_getLocation

/* 위경도를 받아서 주소를 반환하는 비동기 함수 */
export const getAddress = (lat, lng) => {
    return new Promise(res => {
        var geocoder = new window.google.maps.Geocoder;
        var latLng = {
            lat,
            lng,
        };
        geocoder.geocode({ 'location': latLng }, function (address, status) {
            if (status === "OK") {
                res(address)
            } else {
                res(null)
            }//if-else
        });
    })//promise
}//function_getAddress

/* 위경도 정보를 받아서 날씨 정보 반환하는 함수 */
export const getWeather = (lat, lng) => {
    return new Promise(res => {
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=7faef0205f8c309d8424432871e07695`).then(result => {
            let data = result.json();
            res(data)
        }).catch(() => {
            alert('새로고침 해주시길 바랍니다.')
            res(null)
        })//fetch-catch
    })//promise
}//function_getWeather

/* export const outputWeather = category => {
    let temp = (category.temp - 273.15).toFixed(1)
    let tempMin = (typeof(category.temp) === 'object')&& (category.temp.min - 273.15).toFixed(1)
    let tempMax = (typeof(category.temp) === 'object')&& (category.temp.max - 273.15).toFixed(1)
    let time = new Date(category.dt * 1000)
    let year = time.getFullYear()
    let month = time.getMonth()
    let date = time.getDate()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let dayArr = [
        'SUN','MON','TUE','WES','THU','FRI','SAT'
    ]
    let day = dayArr[time.getDay()]
    let desc = codeKrArr[codeEnArr.indexOf(category.weather[0].description)]
    let windDeg = category.wind_deg
    let windSpeed = category.wind_speed
    let rain = (category.rain) ? category.rain : 0 // 시간별 정보에서는 객체로 반환된다.
    let sunriseTime = (category.sunrise)&& new Date(category.sunrise * 1000)
    let sunriseHour = sunriseTime.getHours()
    let sunriseMin = sunriseTime.getMinutes()
    let sunsetTime = (category.sunset)&& new Date(category.sunset * 1000)
    let sunssetHour = sunsetTime.getHours()
    let sunssetMin = sunsetTime.getMinutes()
    return ({
        year, month, date, hour, minute, day, temp, tempMin, tempMax, desc, windDeg, windSpeed, rain, sunriseTime, sunsetTime
        sunriseHour, sunriseMin, sunsetHour, sunsetMin
    })
}//function_outputWeather */