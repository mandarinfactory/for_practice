import React from 'react';
import CompPlus from './CompPlus';

let plusArr = Array(3).fill(1)
const CompPlusContainer = () => {
    return (
        <>
            {
                plusArr.map((v, i) => {
                    return <CompPlus key={i} />
                })//map
            }

        </>
    );
};

export default CompPlusContainer;