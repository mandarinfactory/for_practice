import React, { useContext } from 'react';
import { Appcontext } from '../App';

const CompCurrent = () => {
    let { address, weather } = useContext(Appcontext)
    if (!address || !weather) return false
    let weatherData = weather.current // 현재 날씨 정보객체
    return (
        <section className='current_section'>
            <h1>날씨앱</h1>
            <p className="address">
                {
                    (address) ? address[2].formatted_address : '등록되지 않은 위치입니다.'
                }
            </p>
        </section>
    );
};

export default CompCurrent;