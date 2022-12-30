import React from 'react';

const CompLoader = () => {
    return (
        <figure className='loader'>
            <img src={require('../Assets/img/loading.gif')} alt="" />
        </figure>
    );
};

export default CompLoader;