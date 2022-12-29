import React from 'react';
import { btnArr } from '../Store/store';
import CompBtn from './CompBtn';

const CompBtns = () => {
    return (
        <div className="btns">
            {
                btnArr.map(
                    v => <CompBtn key={v.id} btnInfo={v} />
                )//map --> parameter가 하나이고 return을 하므로 {}&return을 생략가능!
            }
        </div>
    );
};

export default CompBtns;