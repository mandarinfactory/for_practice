import React, { useContext } from 'react';
import { Appcontext } from '../App';

const CompCurrent = () => {
    let { address, weather } = useContext(Appcontext)
    if (!address || !weather) return false
    return (
        <section className='current_section'>
            <h1>날씨앱</h1>
            <p className="address">
                {address[2].formatted_address}
            </p>
        </section>
    );
};

export default CompCurrent;