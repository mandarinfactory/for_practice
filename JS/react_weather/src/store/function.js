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