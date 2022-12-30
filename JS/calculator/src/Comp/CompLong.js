import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompLong = () => {
    let { chShowLong } = useContext(AppContext)
    let longErr = e => {
        e.currentTarget.classList.add('active')
        e.currentTarget.addEventListener('transitionend', () => {
            chShowLong(false)
        })//addEventListener
    }//function_longErr
    return (
        <figure className='long' onClick={longErr}>
            <img src={require('../Assets/img/sorry.png')} alt="" />
        </figure>
    );
};

export default CompLong;