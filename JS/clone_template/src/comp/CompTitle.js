import React from 'react';

const CompTitle = () => {
    return (
        <figure className='title'>
            <div>
                <img src={require('../asset/img/logo/title.png')} alt="" />
                <img className="title-glitch1" src={require('../asset/img/logo/title-glitch1.png')} alt="" />
                <img className="title-glitch2" src={require('../asset/img/logo/title-glitch2.png')} alt="" />
            </div>
        </figure>
    );
};

export default CompTitle;