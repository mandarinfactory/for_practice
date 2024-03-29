import React from 'react';
import CompMenu from './CompMenu';

const CompHeader = () => {
  return (
    <>
      <header>
        <h1>
          <span className='hidden'>로고</span>
          <img src={require('../asset/img/logo/Logo.png')} alt="" />
        </h1>
        <nav className="gnb gnb-lg">
          <CompMenu />
        </nav>
        <button className='mbtn'>
          <span className="bar1"></span>
          <span className="bar2"></span>
          <span className="bar3"></span>
        </button>
      </header>
      <nav className="gnb gnb-sm">
        <video src={require(`../asset/video/nav.mp4`)} />
        <CompMenu />
      </nav>
    </>
  );
};

export default CompHeader;