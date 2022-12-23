import React, { useEffect } from 'react';

const CompTitle = () => {
    useEffect(() => {
        console.log('Title 완성!!!!!!');
    }, [])//useEffect
    useEffect(() => {
        console.log('Title 수정!!!!!!');
    }, [])//useEffect
    return (
        <>
            <h1>더하기 빼기!</h1>
        </>
    );
};

export default React.memo(CompTitle);