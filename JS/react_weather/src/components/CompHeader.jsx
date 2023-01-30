import React from 'react';

const CompHeader = () => {
    return (
        <header>
            <button className='refresh_btn'>
                <i className="fa-solid fa-arrows-rotate"></i>
            </button>
            <h1>
                <span className='hidden'>날씨앱</span>
                <img src={`${process.env.PUBLIC_URL}public/img/main/title.png`} alt="" />
            </h1>
            <button className="map_btn">
                <i className="fa-solid fa-map-location-dot"></i>
            </button>
        </header>
    );
};

export default CompHeader;