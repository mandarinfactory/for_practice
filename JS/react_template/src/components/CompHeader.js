import React from 'react';
import CompMenu from './CompMenu';

const CompHeader = () => {
    return (
        <>
            <header>
                <h1>로오오오고오오오</h1>
                <nav className='gnb gnb_lg'>
                    <CompMenu />
                </nav>
                <nav className='gnb gnb_sm'>
                    <video src={require(`../asset/video/nav.mp4`)} />
                    <CompMenu />
                </nav>
                <button className='mbtn'>
                    <span className='bar1'></span>
                    <span className='bar2'></span>
                    <span className='bar3'></span>
                </button>
                <nav className="gnb gnb_sm">
                    <CompMenu />
                </nav>
            </header>
        </>
    );
};

export default CompHeader;