import React, { useContext } from 'react';
import { AppContext } from '../App.js'

const CompOutput = () => {
    let { str } = useContext(AppContext)
    return (
        <div className="output">
            <p>
                {str}
            </p>
        </div>
    );
};

export default CompOutput;