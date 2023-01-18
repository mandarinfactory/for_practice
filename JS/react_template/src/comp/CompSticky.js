import React from 'react';

const CompSticky = ({ children }) => {
  return (
    <div className='sticky'>
      <video className="sticky_video" src={require('../asset/video/bg.mp4')} autoPlay loop muted playsInline></video>
      <figure className='bg_cloud'>
        <img src={require('../asset/img/sticky/sticky-bg-top.png')} alt="" />
      </figure>
      {children}
    </div>
  );
};

export default CompSticky;