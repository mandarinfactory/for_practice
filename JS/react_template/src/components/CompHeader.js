import React from 'react';
import { NavLink } from 'react-router-dom';

const CompHeader = () => {
    return (
        <header>
            <nav className='gnb'>
                <NavLink to="/abcd">
                    주우소오카아안
                </NavLink>
            </nav>
        </header>
    );
};

export default CompHeader;