import React from 'react';

const CompSection1 = () => {
  return (
    <section className='section1'>
      <video className='bg' src={require('../asset/video/video.mp4')} loop autoPlay muted playsInline/>
    </section>
  );
};

export default CompSection1;