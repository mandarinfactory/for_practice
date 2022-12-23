import React from 'react';
import { NavLink } from 'react-router-dom';

const CompNav = () => {
    return (
        <>
            <nav>
                <NavLink to="/">
                    더하기문제!
                </NavLink>
                <hr />
                <NavLink to="minus">
                    빼기문제!
                </NavLink>
            </nav>
        </>
    );
};

export default CompNav;