import React, { useContext } from 'react';
import { AppContext } from '../App.js'
import { charArr, imgArr } from '../Store/store.js';

const CompOutput = () => {
    let { str } = useContext(AppContext)
    let strArr = str.split('')
    console.log(strArr);
    return (
        <div className="output">
            <p>
                {
                    strArr.map((v, i) => {
                        let idx = charArr.indexOf(v)
                        let imgFile = imgArr[idx]
                        return <img key={i} src={require(`../Assets/img/${imgFile}.png`)} alt />
                    })//map
                }
            </p>
        </div>
    );
};

export default CompOutput;