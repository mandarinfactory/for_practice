import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompError = () => {
    let { chShowErr } = useContext(AppContext)
    let hideErr = e => {
        e.currentTarget.classList.add('active')
        e.currentTarget.addEventListener('transitionend', () => {
            chShowErr(false)
        })//addEventListener
    }//function_hideErr
    return (
        <figure className='error' onClick={hideErr}>
            <img src={require('../Assets/img/oops.png')} alt="" />
        </figure>
    );
};

export default CompError;