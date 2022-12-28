import React from 'react';
import { btnArr } from '../Store/store';
import CompBtn from './CompBtn';

const CompBtns = () => {
    return (
        <div className="btns">
            {
                btnArr.map(v => {
                    return <CompBtn key={v.id} btnInfo={v} />
                })//map
            }
        </div>
    );
};

export default CompBtns;