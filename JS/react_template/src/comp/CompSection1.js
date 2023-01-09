import React from 'react';

const CompSection1 = () => {
  return (
    <section className='section1'>
      <video className="bg" src={require('../asset/video/video.mp4')} autoPlay muted playsInline loop></video>
    </section>
  );
};

export default CompSection1;