import React from 'react';

const CompTitle = () => {
    return (
        <h1 className="title">
            <span className='hidden'>제목</span>
            <img src={require('../Assets/img/title.png')} alt="" />
        </h1>
    );
};

export default React.memo(CompTitle);
/* memo --> 내 state가 변할때만! 변하겠다! */